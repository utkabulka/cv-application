import '../styles/InputField.css'

function InputField({
  label = 'Input field label',
  name = '',
  value = '',
  onChange = () => {},
}) {
  return (
    <input
      className='input-field-text'
      placeholder={label}
      name={name}
      value={value}
      onChange={onChange}
    ></input>
  )
}

InputField.defaultProps = {}

export default InputField
