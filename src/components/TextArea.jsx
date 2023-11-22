import '../styles/TextArea.css'

function TextArea({
  label = 'Text area label',
  value = 'Default value',
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
    <textarea placeholder={label} name={name} onChange={onChange} style={style}>
      {value}
    </textarea>
  )
}

export default TextArea
