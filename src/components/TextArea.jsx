import PropTypes from 'prop-types'
import '../styles/TextArea.css'

function TextArea({
  label = 'Text area label',
  value = '',
  name = '',
  width = 400,
  height = 100,
  onChange = () => {},
}) {
  width += 'px'
  height += 'px'

  const style = {
    width: width,
    maxWidth: width,
    minWidth: width,
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
  width: PropTypes.number,
  height: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TextArea
