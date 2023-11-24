import { useState } from 'react'

import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import RoomIcon from '@mui/icons-material/Room'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import Header from './components/Header'
import InputField from './components/InputField'
import TextArea from './components/TextArea'
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
            <div className='editor-section'>
              <Header text='Personal details' />
              <InputField
                label='Full name'
                placeholder={`What's your name?`}
                isRequired={true}
                name={Keys.FULL_NAME}
                value={personalInformation[Keys.FULL_NAME]}
                onChange={handlePersonalInformationChange}
              />
              <InputField
                label='Role'
                placeholder={`What is your desired role?`}
                isRequired={true}
                name={Keys.ROLE}
                value={personalInformation[Keys.ROLE]}
                onChange={handlePersonalInformationChange}
              />
              <InputField
                label='Location'
                placeholder={`Where do you live?`}
                isRequired={true}
                name={Keys.LOCATION}
                icon={RoomIcon}
                value={personalInformation[Keys.LOCATION]}
                onChange={handlePersonalInformationChange}
              />
              <InputField
                label='Website'
                placeholder={`Your website, if you have one`}
                name={Keys.WEBSITE}
                icon={HomeIcon}
                value={personalInformation[Keys.WEBSITE]}
                onChange={handlePersonalInformationChange}
              />
              <InputField
                label='E-mail'
                placeholder={`Your e-mail`}
                name={Keys.EMAIL}
                icon={EmailIcon}
                value={personalInformation[Keys.EMAIL]}
                onChange={handlePersonalInformationChange}
              />
              <InputField
                label='Phone number'
                placeholder={`Your phone number`}
                name={Keys.PHONE_NUMBER}
                icon={PhoneIcon}
                value={personalInformation[Keys.PHONE_NUMBER]}
                onChange={handlePersonalInformationChange}
              />
            </div>
          </div>
          <div className='cv-output'>
            <div className='personal'>
              <div className='name-role-block'></div>
              <div className='other-personal-info'>
                <div className='contacts-block'></div>
                <div className='website-location-block'></div>
              </div>
            </div>
            <div className='section'>
              <Header text='Summary' />
              <TextArea
                label='Your CV summary'
                value={summary}
                name={Keys.SUMMARY}
                onChange={handleSummaryChange}
              />
              <hr />
            </div>
            <div className='section'>
              <Header text='Experience' />
              <ExperienceSection
                data={workExperience}
                onChange={handleWorkExperienceChange}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
