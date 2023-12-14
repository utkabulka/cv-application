import PropTypes from 'prop-types'
import * as Keys from '../../../constants/Keys'
import DateSelector from '../DateSelector'
import EditorSectionControls from '../EditorSectionControls'
import InputField from '../InputField'
import TextArea from '../TextArea'

function EducationBlockEditor({
  educationEntry,
  onChange = () => {},
  onDeleted = () => {},
}) {
  return (
    <div className='editor-section'>
      <EditorSectionControls
        targetObject={educationEntry}
        onDeleted={onDeleted}
      />
      <InputField
        label='University or school'
        placeholder='Where did you study?'
        isRequired={true}
        value={educationEntry[Keys.SCHOOL]}
        name={Keys.SCHOOL}
        onChange={(e) =>
          onChange(educationEntry[Keys.ID], Keys.SCHOOL, e.target.value)
        }
      />
      <InputField
        label='Degree'
        isRequired={true}
        value={educationEntry[Keys.DEGREE]}
        name={Keys.DEGREE}
        onChange={(e) =>
          onChange(educationEntry[Keys.ID], Keys.DEGREE, e.target.value)
        }
      />
      <InputField
        label='Location'
        placeholder='In what location did you study?'
        isRequired={true}
        value={educationEntry[Keys.LOCATION]}
        name={Keys.LOCATION}
        onChange={(e) =>
          onChange(educationEntry[Keys.ID], Keys.LOCATION, e.target.value)
        }
      />
      {/* TODO: make a component */}
      <div className='date-range'>
        <DateSelector
          label='Started'
          isRequired={true}
          value={educationEntry[Keys.START_DATE]}
          name={Keys.START_DATE}
          onDatePicked={(e) => {
            onChange(educationEntry[Keys.ID], Keys.START_DATE, e.target.value)
          }}
        />
        <DateSelector
          label='Graduated'
          value={educationEntry[Keys.END_DATE]}
          name={Keys.END_DATE}
          onDatePicked={(e) => {
            onChange(educationEntry[Keys.ID], Keys.END_DATE, e.target.value)
          }}
        />
      </div>
      <TextArea
        label='Summary'
        placeholder='What did you learn?'
        value={educationEntry[Keys.SUMMARY]}
        name={Keys.SUMMARY}
        height={100}
        onChange={(e) => {
          onChange(educationEntry[Keys.ID], Keys.SUMMARY, e.target.value)
        }}
      />
    </div>
  )
}

EducationBlockEditor.propTypes = {
  educationEntry: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
}

export default EducationBlockEditor
