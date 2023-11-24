import PropTypes from 'prop-types'

function CVOutput(personalInformation = []) {
  return (
    <div className='cv-output'>
      <div className='personal'></div>
    </div>
  )
}
CVOutput.propTypes = {
  personalInformation: PropTypes.array.isRequired,
}

export default CVOutput
