import { SvgIcon } from '@mui/material'
import '../styles/InputField.css'

function InputField({
  label = 'Input field label',
  name = '',
  value = '',
  icon = null,
  fontSize = null,
  color = null,
  onChange = () => {},
}) {
  let fieldStyle = null
  if (fontSize != null || color != null) {
    fieldStyle = {
      color: color,
      fontSize: fontSize + 'px',
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

InputField.defaultProps = {}

export default InputField
