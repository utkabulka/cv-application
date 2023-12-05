import PropTypes from 'prop-types'
import * as Keys from '../../constants/Keys'
import '../../styles/cv_output/ExperienceBlock.css'

function ExperienceBlock({ experience }) {
  return (
    <div className='experience-block'>
      <h1>{experience[Keys.JOB_TITLE]}</h1>
      <h2>{experience[Keys.WORK_PLACE]}</h2>
      <p>{experience[Keys.WORK_SUMMARY]}</p>
    </div>
  )
}

ExperienceBlock.propTypes = {
  experience: PropTypes.object.isRequired,
}

export default ExperienceBlock
