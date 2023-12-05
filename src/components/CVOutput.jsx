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
            <div>
              {personalDetails[Keys.EMAIL]}
            </div>
            <div>
              {personalDetails[Keys.PHONE_NUMBER]}
            </div>
          </div>
          <div className='personal-column'>
            <div>
              {personalDetails[Keys.LOCATION]}
            </div>
            <div>
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
