import PropTypes from 'prop-types'
import '../../styles/editor/Input.css'

function InputField({
  label = 'Input field label',
  isRequired = false,
  placeholder = null,
  value = '',
  onChange = () => {},
}) {
  return (
    <div className='input-block'>
      <div>
        {label}
        {isRequired ? <span className='required'>required</span> : ''}
      </div>
      <input
        className={isRequired && value == '' ? 'empty-required-input' : null}
        placeholder={placeholder == null ? label : placeholder}
        title={placeholder == null ? label : placeholder}
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
  value: PropTypes.string,
  icon: PropTypes.object,
  onChange: PropTypes.func.isRequired,
}

export default InputField
