import PropTypes from 'prop-types'
import * as Keys from '../constants/Keys'
import InputField from './InputField'
import TextArea from './TextArea'

function ExperienceBlock({ experience, onChange = () => {} }) {
  return (
    <div className='editor-section'>
      <InputField
        label='Job title'
        value={experience[Keys.JOB_TITLE]}
        name={Keys.JOB_TITLE}
        fontSize={24}
        fontWeight={600}
        onChange={(e) => {
          onChange(experience[Keys.ID], Keys.JOB_TITLE, e.target.value)
        }}
      />
      <InputField
        label='Where did you work?'
        value={experience[Keys.WORK_PLACE]}
        name={Keys.WORK_PLACE}
        fontSize={20}
        onChange={(e) => {
          onChange(experience[Keys.ID], Keys.WORK_PLACE, e.target.value)
        }}
      />
      <TextArea
        label='What did you do?'
        value={experience[Keys.WORK_SUMMARY]}
        name={Keys.WORK_SUMMARY}
        height={40}
        onChange={(e) => {
          onChange(experience[Keys.ID], Keys.WORK_SUMMARY, e.target.value)
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
