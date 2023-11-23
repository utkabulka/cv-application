import PropTypes from 'prop-types'
import * as Keys from '../constants/Keys'
import InputField from './InputField'

function ExperienceBlock({ experience, onChange = () => {} }) {
  return (
    <div className='experience-block'>
      <InputField
        label='Job title'
        value={experience[Keys.JOB_TITLE]}
        name={Keys.JOB_TITLE}
        onChange={onChange}
      />
      <InputField
        label='Where did you work?'
        value={experience[Keys.WORK_PLACE]}
        name={Keys.WORK_PLACE}
        onChange={onChange}
      />
    </div>
  )
}
ExperienceBlock.propTypes = {
  experience: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ExperienceBlock
