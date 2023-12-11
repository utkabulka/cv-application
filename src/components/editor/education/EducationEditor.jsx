import PropTypes from 'prop-types'
import Header from '../../Header'
import AddButton from '../AddButton'

function EducationEditor({ onEducationAdded = () => {} }) {
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
  onEducationAdded: PropTypes.func.isRequired,
}

export default EducationEditor
