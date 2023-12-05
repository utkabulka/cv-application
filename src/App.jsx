import { useState } from 'react'

import CVOutput from './components/CVOutput'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import PersonalDetails from './components/PersonalDetails'
import WorkExperience from './components/WorkExperience'
import DefaultData from './constants/DefaultData'
import * as Keys from './constants/Keys'
import * as NavigationTabs from './constants/NavigationTabs'
import './styles/App.css'

function App() {
  const [selectedTab, setSelectedTab] = useState(
    NavigationTabs.PERSONAL_INFORMATION
  )

  const [personalDetails, setPersonalInformation] = useState(
    DefaultData.initialPersonalInformation
  )
  const [summary, setSummary] = useState(DefaultData[Keys.SUMMARY])
  const [workExperience, setWorkExperience] = useState(
    DefaultData[Keys.WORK_EXPERIENCE]
  )

  function handleSelectedTabChange(newTab) {
    setSelectedTab(newTab)
    console.log(`New tab: ${newTab}`)
  }

  function handlePersonalDetailsChange(e) {
    setPersonalInformation({
      ...personalDetails,
      [e.target.name]: e.target.value,
    })
  }

  function handleSummaryChange(e) {
    setSummary(e.target.value)
  }

  function handleWorkExperienceChange(workExperienceId, fieldName, value) {
    setWorkExperience(
      workExperience.map((experience) => {
        if (experience.id === workExperienceId) {
          return { ...experience, [fieldName]: value }
        } else {
          return experience
        }
      })
    )
  }

  return (
    <>
      <div className='app-root'>
        <div className='cv'>
          <div className='editor'>
            <Navigation
              onNavigationClicked={handleSelectedTabChange}
              selectedTab={selectedTab}
            />
            {selectedTab === NavigationTabs.PERSONAL_INFORMATION && (
              <PersonalDetails
                onInformationChanged={handlePersonalDetailsChange}
                onSummaryChanged={handleSummaryChange}
                personalInformation={personalDetails}
                summary={summary}
              />
            )}
            {selectedTab === NavigationTabs.WORK_EXPERIENCE && (
              <WorkExperience
                workExperience={workExperience}
                onWorkExpreienceChanged={handleWorkExperienceChange}
              />
            )}
            <Footer />
          </div>
          <CVOutput
            personalDetails={personalDetails}
            summary={summary}
            workExperience={workExperience}
          />
        </div>
      </div>
    </>
  )
}

export default App
