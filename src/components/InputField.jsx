import { SvgIcon } from '@mui/material'
import PropTypes from 'prop-types'
import '../styles/InputField.css'

function InputField({
  label = 'Input field label',
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
        <div>{label}</div>
        <input
          placeholder={label}
          title={label}
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
  name: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.object,
  onChange: PropTypes.func.isRequired,
}

export default InputField
