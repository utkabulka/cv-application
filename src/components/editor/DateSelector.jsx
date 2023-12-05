import PropTypes from 'prop-types'

function DateSelector({ label = '', isRequired = false }) {
  return (
    <div className='input-block'>
      <div>
        {label}
        {isRequired ? <span className='required'>required</span> : ''}
      </div>
      <input type='date' />
    </div>
  )
}

DateSelector.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
}

export default DateSelector
