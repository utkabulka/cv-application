import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
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
      <div className='editor-section-controls'>
        <div className='handle'>
          <DragHandleIcon />
        </div>
        <button className='editor-section-delete'
          onClick={() => {
            onDeleted(experience[Keys.ID])
          }}
        >
          <DeleteForeverIcon />
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
        value={experience[Keys.WORK_COMPANY]}
        name={Keys.WORK_COMPANY}
        onChange={(e) => {
          onChange(experience[Keys.ID], Keys.WORK_COMPANY, e.target.value)
        }}
      />
      <div className='date-range'>
        <DateSelector
          label='Started'
          isRequired={true}
          value={experience[Keys.START_DATE]}
          name={Keys.START_DATE}
          onDatePicked={(e) => {
            onChange(experience[Keys.ID], Keys.START_DATE, e.target.value)
          }}
        />
        <DateSelector
          label='Finished'
          value={experience[Keys.END_DATE]}
          name={Keys.END_DATE}
          onDatePicked={(e) => {
            onChange(experience[Keys.ID], Keys.END_DATE, e.target.value)
          }}
        />
      </div>
      <TextArea
        label='Summary'
        placeholder='What did you do?'
        isRequired={true}
        value={experience[Keys.SUMMARY]}
        name={Keys.SUMMARY}
        height={100}
        onChange={(e) => {
          onChange(experience[Keys.ID], Keys.SUMMARY, e.target.value)
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
