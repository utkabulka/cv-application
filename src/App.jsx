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

  function filterOutEntry(id, fromArray = []) {
    return fromArray.filter((entry) => {
      if (entry[Keys.ID] != id) {
        return entry
      }
    })
  }

  return (
    <div className='cv'>
      <div className='editor'>
        <Navigation
          onNavigationClicked={(button) => {
            if (button == NavigationButtons.PRINT) {
              console.log('Pressed print button')
              return
            }
            setSelectedTab(button)
          }}
          selectedTab={selectedTab}
        />
        {selectedTab === NavigationButtons.PERSONAL_INFORMATION && (
          <PersonalDetailsEditor
            onInformationChanged={(key, value) =>
              setPersonalInformation({
                ...personalDetails,
                [key]: value,
              })
            }
            onSummaryChanged={(e) => setSummary(e.target.value)}
            personalInformation={personalDetails}
            summary={summary}
          />
        )}
        {selectedTab === NavigationButtons.WORK_EXPERIENCE && (
          <WorkExperienceEditor
            workExperience={workExperience}
            setWorkExperience={setWorkExperience}
            onWorkExperienceChanged={(workExperienceId, fieldName, value) => {
              setWorkExperience(
                workExperience.map((workExperienceEntry) => {
                  if (workExperienceEntry[Keys.ID] === workExperienceId) {
                    return { ...workExperienceEntry, [fieldName]: value }
                  } else {
                    return workExperienceEntry
                  }
                })
              )
            }}
            onWorkExperienceDeleted={(workExperienceEntryId) =>
              setWorkExperience(
                filterOutEntry(workExperienceEntryId, workExperience)
              )
            }
            onWorkExperienceAdded={() => {
              let newWorkExperienceEntry = {
                ...DefaultData[Keys.WORK_EXPERIENCE],
              }
              newWorkExperienceEntry[Keys.ID] = crypto.randomUUID()
              setWorkExperience((workExperience) => [
                ...workExperience,
                newWorkExperienceEntry,
              ])
            }}
          />
        )}
        {selectedTab === NavigationButtons.EDUCATION && (
          <EducationEditor
            education={education}
            setEducation={setEducation}
            onEducationChanged={(educationId, fieldName, value) =>
              setEducation(
                education.map((educationEntry) => {
                  if (educationEntry[Keys.ID] === educationId) {
                    return { ...educationEntry, [fieldName]: value }
                  } else {
                    return educationEntry
                  }
                })
              )
            }
            onEducationDeleted={(educationEntryId) =>
              setEducation(filterOutEntry(educationEntryId, education))
            }
            onEducationAdded={() => {
              let newEducationEntry = { ...DefaultData[Keys.EDUCATION] }
              newEducationEntry[Keys.ID] = crypto.randomUUID()
              setEducation((education) => [...education, newEducationEntry])
            }}
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
  )
}

export default App
