import PropTypes from 'prop-types'
import '../styles/TextArea.css'

function TextArea({
  label = 'Text area label',
  value = '',
  name = '',
  height = 80,
  onChange = () => {},
}) {
  height += 'px'

  const style = {
    height: height,
    minHeight: height,
  }

  return (
    <textarea
      value={value}
      placeholder={label}
      name={name}
      onChange={onChange}
      style={style}
    />
  )
}
TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  height: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TextArea
