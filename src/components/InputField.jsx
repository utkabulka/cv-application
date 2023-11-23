import { SvgIcon } from '@mui/material'
import PropTypes from 'prop-types'
import '../styles/InputField.css'

function InputField({
  label = 'Input field label',
  name = '',
  value = '',
  icon = null,
  fontSize = null,
  fontWeight = null,
  color = null,
  onChange = () => {},
}) {
  let fieldStyle = null
  if (fontSize != null || color != null || fontWeight != null) {
    fieldStyle = {
      color: color,
      fontSize: fontSize + 'px',
      fontWeight: fontWeight,
    }
  }
  return (
    <div className='input-field-wrapper'>
      {icon != null ? <SvgIcon component={icon} sx={fieldStyle} /> : null}
      <input
        placeholder={label}
        title={label}
        name={name}
        value={value}
        style={fieldStyle}
        onChange={onChange}
      ></input>
    </div>
  )
}
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.object,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default InputField
