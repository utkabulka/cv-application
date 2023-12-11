import PropTypes from 'prop-types'
import * as Keys from '../../../constants/Keys'
import DateSelector from '../DateSelector'
import InputField from '../InputField'
import TextArea from '../TextArea'

function ExperienceBlockEditor({
  experience,
  onChange = () => {},
  onDeleted = () => {},
}) {
  return (
    <div className='editor-section'>
      <div className='editor-section-buttons'>
        <button
          onClick={() => {
            onDeleted(experience[Keys.ID])
          }}
        >
          DEL
        </button>
      </div>
      <InputField
        label='Job title'
        isRequired={true}
        value={experience[Keys.JOB_TITLE]}
        name={Keys.JOB_TITLE}
        onChange={(e) => {
          onChange(experience[Keys.ID], Keys.JOB_TITLE, e.target.value)
        }}
      />
      <InputField
        label='Company'
        placeholder='Where did you work?'
        isRequired={true}
        value={experience[Keys.WORK_PLACE]}
        name={Keys.WORK_PLACE}
        onChange={(e) => {
          onChange(experience[Keys.ID], Keys.WORK_PLACE, e.target.value)
        }}
      />
      <div className='date-range'>
        <DateSelector
          label='Started'
          isRequired={true}
          value={experience[Keys.WORK_START_DATE]}
          name={Keys.WORK_START_DATE}
          onDatePicked={(e) => {
            onChange(experience[Keys.ID], Keys.WORK_START_DATE, e.target.value)
          }}
        />
        <DateSelector
          label='Finished'
          value={experience[Keys.WORK_END_DATE]}
          name={Keys.WORK_END_DATE}
          onDatePicked={(e) => {
            onChange(experience[Keys.ID], Keys.WORK_END_DATE, e.target.value)
          }}
        />
      </div>
      <TextArea
        label='Summary'
        placeholder='What did you do?'
        isRequired={true}
        value={experience[Keys.WORK_SUMMARY]}
        name={Keys.WORK_SUMMARY}
        height={100}
        onChange={(e) => {
          onChange(experience[Keys.ID], Keys.WORK_SUMMARY, e.target.value)
        }}
      />
    </div>
  )
}
ExperienceBlockEditor.propTypes = {
  experience: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
}

export default ExperienceBlockEditor
