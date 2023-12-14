import PropTypes from 'prop-types'
import * as Keys from '../../../constants/Keys'

function EducationBlockEditor({
  educationEntry,
  onChange = () => {},
  onDeleted = () => {},
}) {
  return <div className='editor-section'></div>
}

EducationBlockEditor.propTypes = {
  educationEntry: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
}

export default EducationBlockEditor
