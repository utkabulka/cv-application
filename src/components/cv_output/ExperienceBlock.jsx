import PropTypes from 'prop-types'
import * as Keys from '../../constants/Keys'
import '../../styles/cv_output/ExperienceBlock.css'

function ExperienceBlock({ experience }) {
  return (
    <div className='experience-block'>
      <h1>{experience[Keys.JOB_TITLE]}</h1>
      <h2>{experience[Keys.WORK_COMPANY]}</h2>
      {experience[Keys.START_DATE] == '' ? null : (
        <p>
          From {experience[Keys.START_DATE]} to{' '}
          {experience[Keys.END_DATE] == ''
            ? 'present day'
            : experience[Keys.END_DATE]}
        </p>
      )}
      <p>{experience[Keys.SUMMARY]}</p>
    </div>
  )
}

ExperienceBlock.propTypes = {
  experience: PropTypes.object.isRequired,
}

export default ExperienceBlock
