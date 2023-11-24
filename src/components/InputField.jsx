import PropTypes from 'prop-types'
import '../styles/InputField.css'

function InputField({
  label = 'Input field label',
  isRequired = false,
  placeholder = null,
  name = '',
  value = '',
  onChange = () => {},
}) {
  return (
    <div className='input-field'>
      <div>
        {label}
        {isRequired ? <span className='required'>required</span> : ''}
      </div>
      <input
        className={isRequired && value == '' ? 'empty-required-input' : null}
        placeholder={placeholder == null ? label : placeholder}
        title={placeholder == null ? label : placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.object,
  onChange: PropTypes.func.isRequired,
}

export default InputField
