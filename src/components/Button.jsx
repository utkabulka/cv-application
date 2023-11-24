import { SvgIcon } from '@mui/material'
import PropTypes from 'prop-types'
import '../styles/Button.css'

function Button({ icon = null, onClick = () => {} }) {
  return (
    <button onClick={onClick}>
      <SvgIcon component={icon} />
    </button>
  )
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object,
}

export default Button
