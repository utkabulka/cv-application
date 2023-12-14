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

  // work experience functions
  function handleWorkExperienceChange(workExperienceId, fieldName, value) {
    setWorkExperience(
      workExperience.map((workExperienceEntry) => {
        if (workExperienceEntry[Keys.ID] === workExperienceId) {
          return { ...workExperienceEntry, [fieldName]: value }
        } else {
          return workExperienceEntry
        }
      })
    )
  }

  function handleWorkExperienceAdded() {
    let newWorkExperienceEntry = { ...DefaultData[Keys.WORK_EXPERIENCE] }
    newWorkExperienceEntry[Keys.ID] = crypto.randomUUID()

    setWorkExperience((workExperience) => [
      ...workExperience,
      newWorkExperienceEntry,
    ])
  }

  function handleWorkExperienceDeleted(workExperienceId) {
    setWorkExperience(
      workExperience.filter((workExperienceEntry) => {
        if (workExperienceEntry[Keys.ID] != workExperienceId) {
          return workExperienceEntry
        }
      })
    )
  }

  // education functions
  function handleEducationChange(educationId, fieldName, value) {
    setEducation((educationEntry) => {
      if (educationEntry[Keys.ID] === educationId) {
        return { ...education, [fieldName]: value }
      } else {
        return educationEntry
      }
    })
  }

  function handleEducationAdded() {}

  function handleEducationDeleted(educationId) {}

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
          {selectedTab === NavigationButtons.EDUCATION && (
            <EducationEditor
              education={education}
              setEducation={setEducation}
              onEducationChanged={handleEducationChange}
              onEducationDeleted={handleEducationDeleted}
              onEducationAdded={handleEducationAdded}
            />
          )}
          {selectedTab === NavigationButtons.SETTINGS && <Settings />}
          <Footer />
        </div>
        <CVOutput
          personalDetails={personalDetails}
          summary={summary}
          workExperience={workExperience}
          education={education}
        />
      </div>
    </>
  )
}

export default App
