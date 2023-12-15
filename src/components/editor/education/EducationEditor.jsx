import PropTypes from 'prop-types'
import { ReactSortable } from 'react-sortablejs'
import * as Keys from '../../../constants/Keys'
import AddButton from '../AddButton'
import EducationBlockEditor from './EducationBlockEditor'

// TODO: make one common component for EducationEditor, WorkExperienceEditor
function EducationEditor({
  education,
  setEducation = () => {},
  onEducationChanged = () => {},
  onEducationDeleted = () => {},
  onEducationAdded = () => {},
}) {
  return (
    <>
      <div className='editor-section'>
        <h1>Education</h1>
      </div>
      <ReactSortable list={education} setList={setEducation} handle='.handle'>
        {education.map((educationEntry) => (
          <EducationBlockEditor
            key={educationEntry[Keys.ID]}
            educationEntry={educationEntry}
            onChange={onEducationChanged}
            onDeleted={onEducationDeleted}
          />
        ))}
      </ReactSortable>
      <AddButton onClick={onEducationAdded} />
    </>
  )
}

EducationEditor.propTypes = {
  education: PropTypes.array.isRequired,
  setEducation: PropTypes.func.isRequired,
  onEducationChanged: PropTypes.func.isRequired,
  onEducationDeleted: PropTypes.func.isRequired,
  onEducationAdded: PropTypes.func.isRequired,
}

export default EducationEditor
