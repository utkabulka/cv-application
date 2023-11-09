import '../styles/InputField.css'

function InputField({ label = 'Input field label' }) {
  return (
    <>
      <div className="input-field">
        <h1 className='input-field-label'>{label}</h1>
        <input className='input-field-text'></input>
      </div>
    </>
  )
}

InputField.defaultProps = {}

export default InputField
