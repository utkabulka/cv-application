import { SvgIcon } from '@mui/material'
import PropTypes from 'prop-types'
import '../../styles/Editor.css'

function Button({ icon = null, onClick = () => {}, isSelected = false }) {
  return (
    <button onClick={onClick} className={isSelected ? 'selected' : null}>
      <SvgIcon component={icon} />
    </button>
  )
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object,
  isSelected: PropTypes.bool,
}

export default Button
