import PropTypes from 'prop-types'
import * as Keys from '../../../constants/Keys'
import EditorSectionControls from '../EditorSectionControls'

function EducationBlockEditor({
  educationEntry,
  onChange = () => {},
  onDeleted = () => {},
}) {
  return <div className='editor-section'>
      <EditorSectionControls targetObject={educationEntry} onDeleted={onDeleted} />
  </div>
}

EducationBlockEditor.propTypes = {
  educationEntry: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
}

export default EducationBlockEditor
