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
import * as Colors from './constants/Colors'
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

  function handleWorkExperienceChange(e) {}

  return (
    <>
      <div className='app-root'>
        <div className='cv'>
          <div className='personal'>
            <div className='name-role-block'>
              <InputField
                label='Full name'
                name={Keys.FULL_NAME}
                fontSize={32}
                color={Colors.WHITE}
                value={personalInformation[Keys.FULL_NAME]}
                onChange={handlePersonalInformationChange}
              />
              <InputField
                label='Role'
                name={Keys.ROLE}
                fontSize={24}
                color={Colors.WHITE}
                value={personalInformation[Keys.ROLE]}
                onChange={handlePersonalInformationChange}
              />
            </div>
            <div className='other-personal-info'>
              <div className='contacts-block'>
                <InputField
                  label='E-mail'
                  name={Keys.EMAIL}
                  color={Colors.WHITE}
                  icon={EmailIcon}
                  value={personalInformation[Keys.EMAIL]}
                  onChange={handlePersonalInformationChange}
                />
                <InputField
                  label='Phone number'
                  name={Keys.PHONE_NUMBER}
                  color={Colors.WHITE}
                  icon={PhoneIcon}
                  value={personalInformation[Keys.PHONE_NUMBER]}
                  onChange={handlePersonalInformationChange}
                />
              </div>
              <div className='website-location-block'>
                <InputField
                  label='Website'
                  name={Keys.WEBSITE}
                  color={Colors.WHITE}
                  icon={HomeIcon}
                  value={personalInformation[Keys.WEBSITE]}
                  onChange={handlePersonalInformationChange}
                />
                <InputField
                  label='Location'
                  name={Keys.LOCATION}
                  color={Colors.WHITE}
                  icon={RoomIcon}
                  value={personalInformation[Keys.LOCATION]}
                  onChange={handlePersonalInformationChange}
                />
              </div>
            </div>
          </div>
          <div className='section'>
            <Header text='Summary' />
            <TextArea
              label='Your CV summary'
              value={summary}
              name={Keys.SUMMARY}
              width={700}
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
        <Footer />
      </div>
    </>
  )
}

export default App
