import { useState } from 'react';

import AddHomeIcon from '@mui/icons-material/AddHome';
import InputField from './components/InputField';
import './styles/App.css';

function App() {
  const [personalInformation, setPersonalInformation] = useState({
    fullName: 'Alice Bobinson',
    role: 'Full-stack developer',
    email: 'bobinson.a@pochta.ru',
    phoneNumber: '+995 228 044 122',
    website: 'https://theodinproject.com',
    location: 'Somecity, Somecountry',
  })

  function handlePersonalInformationChange(e) {
    setPersonalInformation({
      ...personalInformation,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className='app-root'>
        <div className='cv'>
          <div className='personal'>
            {/* TODO: smol icons */}
            <div className='name-role-block'>
              <InputField
                label='Full name'
                name='fullName'
                fontSize={28}
                value={personalInformation.fullName}
                onChange={handlePersonalInformationChange}
              />
              <InputField
                label='Role'
                name='role'
                fontSize={20}
                value={personalInformation.role}
                onChange={handlePersonalInformationChange}
              />
            </div>
            <div className='other-personal-info'>
              <div className='contacts-block'>
                <InputField
                  label='E-mail'
                  name='email'
                  value={personalInformation.email}
                  onChange={handlePersonalInformationChange}
                />
                <InputField
                  label='Phone number'
                  name='phoneNumber'
                  value={personalInformation.phoneNumber}
                  onChange={handlePersonalInformationChange}
                />
              </div>
              <div className='website-location-block'>
                <InputField
                  label='Website'
                  name='website'
                  value={personalInformation.website}
                  onChange={handlePersonalInformationChange}
                />
                <InputField
                  label='Location'
                  name='location'
                  value={personalInformation.location}
                  onChange={handlePersonalInformationChange}
                />
              </div>
            </div>
          </div>
          <div className='section'>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
