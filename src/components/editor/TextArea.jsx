import PropTypes from 'prop-types'
import '../../styles/Editor.css'

function TextArea({
  label = 'Text area label',
  isRequired = false,
  placeholder = null,
  value = '',
  height = 80,
  onChange = () => {},
}) {
  height += 'px'

  const style = {
    height: height,
    minHeight: height,
  }

  return (
    <div className='input-block'>
      <div>
        {label}
        {isRequired ? <span className='required'>required</span> : ''}
      </div>
      <textarea
        className={isRequired && value == '' ? 'empty-required-input' : null}
        placeholder={placeholder == null ? label : placeholder}
        title={placeholder == null ? label : placeholder}
        value={value}
        onChange={onChange}
        style={style}
      />
    </div>
  )
}
TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  height: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TextArea
