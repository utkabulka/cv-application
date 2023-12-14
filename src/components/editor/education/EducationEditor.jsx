import PropTypes from 'prop-types'
import { ReactSortable } from 'react-sortablejs'
import Header from '../../Header'
import AddButton from '../AddButton'

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
        <Header text='Education' />
      </div>

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
