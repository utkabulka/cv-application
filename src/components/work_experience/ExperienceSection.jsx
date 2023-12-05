import PropTypes from 'prop-types'
import * as Keys from '../../constants/Keys'
import ExperienceBlock from './ExperienceBlock'

function ExperienceSection({ data = [], onChange = () => {} }) {
  return (
    <>
      {data.map((experience) => (
        <ExperienceBlock
          key={experience[Keys.ID]}
          experience={experience}
          onChange={onChange}
        />
      ))}
    </>
  )
}
ExperienceSection.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ExperienceSection
