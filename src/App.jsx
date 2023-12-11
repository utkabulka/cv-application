import { useState } from 'react'

import Footer from './components/Footer'
import CVOutput from './components/cv_output/CVOutput'
import Navigation from './components/editor/Navigation'
import PersonalDetailsEditor from './components/editor/PersonalDetailsEditor'
import WorkExperienceEditor from './components/editor/work_experience/WorkExperienceEditor'
import DefaultData from './constants/DefaultData'
import * as Keys from './constants/Keys'
import * as NavigationButtons from './constants/NavigationButtons'
import SampleData from './constants/SampleData'
import './styles/App.css'

function App() {
  const [selectedTab, setSelectedTab] = useState(
    NavigationButtons.PERSONAL_INFORMATION
  )

  const [personalDetails, setPersonalInformation] = useState(
    SampleData.initialPersonalInformation
  )
  const [summary, setSummary] = useState(SampleData[Keys.SUMMARY])
  const [workExperience, setWorkExperience] = useState(
    SampleData[Keys.WORK_EXPERIENCE]
  )

  function handleNavButtonClick(button) {
    if (button == NavigationButtons.PRINT) {
      console.log('Pressed print button')
      return
    }
    setSelectedTab(button)
  }

  function handlePersonalDetailsChange(key, value) {
    setPersonalInformation({
      ...personalDetails,
      [key]: value,
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

  function handleWorkExperienceDeleted(workExperienceId) {
    setWorkExperience(
      workExperience.filter((experience) => {
        if (experience[Keys.ID] != workExperienceId) {
          return experience
        }
      })
    )
  }

  function handleWorkExperienceAdded() {
    let newWorkExperience = { ...DefaultData[Keys.WORK_EXPERIENCE] }
    newWorkExperience[Keys.ID] = crypto.randomUUID()

    setWorkExperience((workExperience) => [
      ...workExperience,
      newWorkExperience,
    ])
  }

  console.log(workExperience)

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
              <PersonalDetailsEditor
                onInformationChanged={handlePersonalDetailsChange}
                onSummaryChanged={handleSummaryChange}
                personalInformation={personalDetails}
                summary={summary}
              />
            )}
            {selectedTab === NavigationButtons.WORK_EXPERIENCE && (
              <WorkExperienceEditor
                workExperience={workExperience}
                onWorkExpreienceChanged={handleWorkExperienceChange}
                onWorkExpreienceDeleted={handleWorkExperienceDeleted}
                onWorkExpreienceAdded={handleWorkExperienceAdded}
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
