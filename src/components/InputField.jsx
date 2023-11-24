import { SvgIcon } from '@mui/material'
import PropTypes from 'prop-types'
import '../styles/InputField.css'

function InputField({
  label = 'Input field label',
  isRequired = false,
  placeholder = null,
  name = '',
  value = '',
  icon = null,
  onChange = () => {},
}) {
  return (
    <div className='input-field'>
      <div className='icon-wrapper'>
        {icon != null ? <SvgIcon component={icon} /> : null}
      </div>
      <div className='input-field-wrapper'>
        <div>{label}{isRequired ? <span className='required'>requried</span> : ''}</div>
        <input
          placeholder={placeholder == null ? label : placeholder}
          title={placeholder == null ? label : placeholder}
          name={name}
          value={value}
          onChange={onChange}
        ></input>
      </div>
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
