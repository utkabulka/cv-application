import PropTypes from 'prop-types'
import * as Keys from '../../../constants/Keys'
import ExperienceBlockEditor from './ExperienceBlockEditor'

function ExperienceSectionEditor({ data = [], onChange = () => {} }) {
  return (
    <>
      {data.map((experience) => (
        <ExperienceBlockEditor
          key={experience[Keys.ID]}
          experience={experience}
          onChange={onChange}
        />
      ))}
    </>
  )
}
ExperienceSectionEditor.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ExperienceSectionEditor
