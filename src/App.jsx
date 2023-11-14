import { useState } from 'react'

import InputField from './components/InputField'
import SectionHeader from './components/SectionHeader'
import './styles/App.css'

function App() {
  const [personalInformation, setPersonalInformation] = useState({
    fullName: 'Alice Bobinson',
    email: 'bobinson.a@pochta.ru',
    phoneNumber: '+995 228 044 122',
    address: 'Some city, Country',
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
          <div className='general-info'>
            <InputField
              label='Full name'
              name='fullName'
              value={personalInformation.fullName}
              onChange={handlePersonalInformationChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
