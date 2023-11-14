import '../styles/InputField.css'

function InputField({
  label = 'Input field label',
  name = '',
  value = '',
  fontSize = 16,
  onChange = () => {},
}) {
  const fieldStyle = {
    fontSize: fontSize + 'px',
  }
  return (
    <input
      placeholder={label}
      title={label}
      name={name}
      value={value}
      style={fontSize === 16 ? null : fieldStyle}
      onChange={onChange}
    ></input>
  )
}

InputField.defaultProps = {}

export default InputField
