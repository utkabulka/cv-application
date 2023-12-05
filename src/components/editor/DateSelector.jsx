import PropTypes from 'prop-types'

function DateSelector({
  label = '',
  isRequired = false,
  value = '',
  name = '',
  onDatePicked = () => {},
}) {
  return (
    <div className='input-block'>
      <div>
        {label}
        {isRequired ? <span className='required'>required</span> : ''}
      </div>
      <input type='date' value={value} name={name} onChange={onDatePicked} />
    </div>
  )
}

DateSelector.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  onDatePicked: PropTypes.func,
}

export default DateSelector
