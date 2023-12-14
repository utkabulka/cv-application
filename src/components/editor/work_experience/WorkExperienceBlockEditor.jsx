import PropTypes from 'prop-types'
import * as Keys from '../../../constants/Keys'
import DateSelector from '../DateSelector'
import EditorSectionControls from '../EditorSectionControls'
import InputField from '../InputField'
import TextArea from '../TextArea'

function WorkExperienceBlockEditor({
  workExperienceEntry,
  onChange = () => {},
  onDeleted = () => {},
}) {
  return (
    <div className='editor-section'>
      <EditorSectionControls
        targetObject={workExperienceEntry}
        onDeleted={onDeleted}
      />
      <InputField
        label='Job title'
        isRequired={true}
        value={workExperienceEntry[Keys.JOB_TITLE]}
        name={Keys.JOB_TITLE}
        onChange={(e) => {
          onChange(workExperienceEntry[Keys.ID], Keys.JOB_TITLE, e.target.value)
        }}
      />
      <InputField
        label='Company'
        placeholder='Where did you work?'
        isRequired={true}
        value={workExperienceEntry[Keys.WORK_COMPANY]}
        name={Keys.WORK_COMPANY}
        onChange={(e) => {
          onChange(
            workExperienceEntry[Keys.ID],
            Keys.WORK_COMPANY,
            e.target.value
          )
        }}
      />
      {/* TODO: make a component */}
      <div className='date-range'>
        <DateSelector
          label='Started'
          isRequired={true}
          value={workExperienceEntry[Keys.START_DATE]}
          name={Keys.START_DATE}
          onDatePicked={(e) => {
            onChange(
              workExperienceEntry[Keys.ID],
              Keys.START_DATE,
              e.target.value
            )
          }}
        />
        <DateSelector
          label='Finished'
          value={workExperienceEntry[Keys.END_DATE]}
          name={Keys.END_DATE}
          onDatePicked={(e) => {
            onChange(
              workExperienceEntry[Keys.ID],
              Keys.END_DATE,
              e.target.value
            )
          }}
        />
      </div>
      <TextArea
        label='Summary'
        placeholder='What did you do?'
        isRequired={true}
        value={workExperienceEntry[Keys.SUMMARY]}
        name={Keys.SUMMARY}
        height={100}
        onChange={(e) => {
          onChange(workExperienceEntry[Keys.ID], Keys.SUMMARY, e.target.value)
        }}
      />
    </div>
  )
}
WorkExperienceBlockEditor.propTypes = {
  workExperienceEntry: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
}

export default WorkExperienceBlockEditor
