import { useState } from 'react'

import Footer from './components/Footer'
import CVOutput from './components/cv_output/CVOutput'
import Navigation from './components/editor/Navigation'
import PersonalDetailsEditor from './components/editor/PersonalDetailsEditor'
import Settings from './components/editor/Settings'
import EducationEditor from './components/editor/education/EducationEditor'
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
  const [education, setEducation] = useState(SampleData[Keys.EDUCATION])

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

  function handleWorkExperienceAdded() {
    let newWorkExperience = { ...DefaultData[Keys.WORK_EXPERIENCE] }
    newWorkExperience[Keys.ID] = crypto.randomUUID()

    setWorkExperience((workExperience) => [
      ...workExperience,
      newWorkExperience,
    ])
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

  return (
    <>
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
              setWorkExperience={setWorkExperience}
              onWorkExpreienceChanged={handleWorkExperienceChange}
              onWorkExpreienceDeleted={handleWorkExperienceDeleted}
              onWorkExpreienceAdded={handleWorkExperienceAdded}
            />
          )}
          {selectedTab === NavigationButtons.EDUCATION && <EducationEditor />}
          {selectedTab === NavigationButtons.SETTINGS && <Settings />}
          <Footer />
        </div>
        <CVOutput
          personalDetails={personalDetails}
          summary={summary}
          workExperience={workExperience}
        />
      </div>
    </>
  )
}

export default App
