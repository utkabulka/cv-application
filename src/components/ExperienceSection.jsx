import PropTypes from 'prop-types'
import InputField from './InputField'

function ExperienceSection({ data = [], onChange = () => {} }) {
  console.log(data)
  return (
    <>
      <InputField label='Job title' onChange={onChange} />
      <InputField label='Work place' onChange={onChange} />
    </>
  )
}
ExperienceSection.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ExperienceSection
