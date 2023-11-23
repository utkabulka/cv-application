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
        onChange={(e) => {
          onChange(experience[Keys.ID], Keys.JOB_TITLE, e.target.value)
        }}
      />
      <InputField
        label='Where did you work?'
        value={experience[Keys.WORK_PLACE]}
        name={Keys.WORK_PLACE}
        onChange={(e) => {
          onChange(experience[Keys.ID], Keys.WORK_PLACE, e.target.value)
        }}
      />
    </div>
  )
}
ExperienceBlock.propTypes = {
  experience: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ExperienceBlock
