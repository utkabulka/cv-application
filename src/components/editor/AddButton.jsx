import AddCircleIcon from '@mui/icons-material/AddCircle'
import PropTypes from 'prop-types'

function AddButton({ onClick = () => {} }) {
  return (
    <div className='editor-section add-element-button'>
      <button onClick={onClick}>
        <AddCircleIcon />
      </button>
    </div>
  )
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddButton
