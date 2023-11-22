import { SvgIcon } from '@mui/material'
import '../styles/InputField.css'

function InputField({
  label = 'Input field label',
  name = '',
  value = '',
  icon = null,
  fontSize = 16,
  onChange = () => {},
}) {
  const fieldStyle = {
    fontSize: fontSize + 'px',
  }
  return (
    <div className="input-field-wrapper">
      {icon != null ? <SvgIcon component={icon} /> : null}
      <input
        placeholder={label}
        title={label}
        name={name}
        value={value}
        style={fontSize === 16 ? null : fieldStyle}
        onChange={onChange}
      ></input>
    </div>
  )
}

InputField.defaultProps = {}

export default InputField
