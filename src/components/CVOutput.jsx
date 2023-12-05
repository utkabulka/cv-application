import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import PlaceIcon from '@mui/icons-material/Place'
import PropTypes from 'prop-types'
import * as Keys from '../constants/Keys'
import '../styles/CVOutput.css'

function CVOutput({ personalDetails = [], summary = '', workExperience = [] }) {
  return (
    <div className='cv-output'>
      <div className='personal'>
        <h1>{personalDetails[Keys.FULL_NAME]}</h1>
        <h2>{personalDetails[Keys.ROLE]}</h2>
        <div className='personal-details'>
          <div className='personal-column'>
            <div className='personal-detail-text'>
              <EmailIcon />
              {personalDetails[Keys.EMAIL]}
            </div>
            <div className='personal-detail-text'>
              <PhoneIcon />
              {personalDetails[Keys.PHONE_NUMBER]}
            </div>
          </div>
          <div className='personal-column'>
            <div className='personal-detail-text'>
              <PlaceIcon />
              {personalDetails[Keys.LOCATION]}
            </div>
            <div className='personal-detail-text'>
              <HomeIcon />
              {personalDetails[Keys.WEBSITE]}
            </div>
          </div>
        </div>
      </div>
      {summary == '' ? null : (
        <div className='section'>
          <h3>Summary</h3>
          <p>{summary}</p>
        </div>
      )}
      <div className='section'></div>
    </div>
  )
}
CVOutput.propTypes = {
  personalDetails: PropTypes.object,
  summary: PropTypes.string,
  workExperience: PropTypes.array,
}

export default CVOutput
