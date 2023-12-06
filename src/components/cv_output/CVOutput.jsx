import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import PlaceIcon from '@mui/icons-material/Place'
import PropTypes from 'prop-types'
import * as Keys from '../../constants/Keys'
import '../../styles/cv_output/CVOutput.css'
import ExperienceBlock from './ExperienceBlock'

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
            <a
              href={personalDetails[Keys.WEBSITE]}
              target='_blank'
              rel='noreferrer'
            >
              <div className='personal-detail-text'>
                <HomeIcon />
                {personalDetails[Keys.WEBSITE]}
              </div>
            </a>
          </div>
        </div>
      </div>
      {summary == '' ? null : (
        <div className='section'>
          <h1>Summary</h1>
          <p>{summary}</p>
          <hr />
        </div>
      )}
      <div className='section'>
        <h1>Work experience</h1>
        {workExperience.map((experience) => (
          <ExperienceBlock key={experience[Keys.ID]} experience={experience} />
        ))}
      </div>
    </div>
  )
}
CVOutput.propTypes = {
  personalDetails: PropTypes.object,
  summary: PropTypes.string,
  workExperience: PropTypes.array,
}

export default CVOutput
