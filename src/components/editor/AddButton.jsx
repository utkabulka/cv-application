import AddCircleIcon from '@mui/icons-material/AddCircle'
import PropTypes from 'prop-types'

function AddButton({ onClick = () => {} }) {
  return (
    <button className='add-element-button' onClick={onClick}>
      <AddCircleIcon />
    </button>
  )
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AddButton
