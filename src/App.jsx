import { useState } from 'react'

import CVOutput from './components/CVOutput'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
import PersonalDetails from './components/PersonalDetails'
import DefaultData from './constants/DefaultData'
import * as Keys from './constants/Keys'
import './styles/App.css'

function App() {
  const [personalInformation, setPersonalInformation] = useState(
    DefaultData.initialPersonalInformation
  )
  const [summary, setSummary] = useState(DefaultData[Keys.SUMMARY])
  const [workExperience, setWorkExperience] = useState(
    DefaultData[Keys.WORK_EXPERIENCE]
  )

  function handlePersonalInformationChange(e) {
    setPersonalInformation({
      ...personalInformation,
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
            <Navigation />
            <PersonalDetails
              onInformationChanged={handlePersonalInformationChange}
              onSummaryChanged={handleSummaryChange}
              personalInformation={personalInformation}
              summary={summary}
            />
            <div className='editor-section'>
              <Header text='Experience' />
              <ExperienceSection
                data={workExperience}
                onChange={handleWorkExperienceChange}
              />
            </div>
            <Footer />
          </div>
          <CVOutput />
        </div>
      </div>
    </>
  )
}

export default App
