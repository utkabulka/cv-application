import PropTypes from 'prop-types'

function DateSelector({
  label = '',
  isRequired = false,
  value = '',
  onDatePicked,
}) {
  return (
    <div className='input-block'>
      <div>
        {label}
        {isRequired ? <span className='required'>required</span> : ''}
      </div>
      <input value={value} onChange={onDatePicked} type='date' />
    </div>
  )
}

DateSelector.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  onDatePicked: PropTypes.func,
}

export default DateSelector
