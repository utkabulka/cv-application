import { useState } from 'react'

import CVOutput from './components/CVOutput'
import Footer from './components/Footer'
import Navigation from './components/editor/Navigation'
import PersonalDetails from './components/personal_details/PersonalDetails'
import WorkExperience from './components/work_experience/WorkExperience'
import DefaultData from './constants/DefaultData'
import * as Keys from './constants/Keys'
import * as NavigationButtons from './constants/NavigationButtons'
import './styles/App.css'

function App() {
  const [selectedTab, setSelectedTab] = useState(
    NavigationButtons.PERSONAL_INFORMATION
  )

  const [personalDetails, setPersonalInformation] = useState(
    DefaultData.initialPersonalInformation
  )
  const [summary, setSummary] = useState(DefaultData[Keys.SUMMARY])
  const [workExperience, setWorkExperience] = useState(
    DefaultData[Keys.WORK_EXPERIENCE]
  )

  function handleNavButtonClick(button) {
    if (button == NavigationButtons.PRINT) {
      console.log('Pressed print button')
      return
    }
    setSelectedTab(button)
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
              onNavigationClicked={handleNavButtonClick}
              selectedTab={selectedTab}
            />
            {selectedTab === NavigationButtons.PERSONAL_INFORMATION && (
              <PersonalDetails
                onInformationChanged={handlePersonalDetailsChange}
                onSummaryChanged={handleSummaryChange}
                personalInformation={personalDetails}
                summary={summary}
              />
            )}
            {selectedTab === NavigationButtons.WORK_EXPERIENCE && (
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
