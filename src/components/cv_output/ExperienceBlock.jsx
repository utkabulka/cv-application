import PropTypes from 'prop-types'
import * as Keys from '../../constants/Keys'
import '../../styles/cv_output/ExperienceBlock.css'

function ExperienceBlock({ experience }) {
  return (
    <div className='experience-block'>
      <h1>{experience[Keys.JOB_TITLE]}</h1>
      <h2>{experience[Keys.WORK_PLACE]}</h2>
      <p>
        From {experience[Keys.WORK_START_DATE]} to{' '}
        {experience[Keys.WORK_END_DATE] == ''
          ? 'present day'
          : experience[Keys.WORK_END_DATE]}
      </p>
      <p>{experience[Keys.WORK_SUMMARY]}</p>
    </div>
  )
}

ExperienceBlock.propTypes = {
  experience: PropTypes.object.isRequired,
}

export default ExperienceBlock
