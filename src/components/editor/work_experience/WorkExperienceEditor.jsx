import PropTypes from 'prop-types'
import * as Keys from '../../../constants/Keys'
import Header from '../../Header'
import ExperienceBlockEditor from './ExperienceBlockEditor'

function WorkExperienceEditor({
  workExperience = [],
  onWorkExpreienceChanged = () => {},
}) {
  return (
    <>
      <div className='editor-section'>
        <Header text='Work experience' />
      </div>
      {workExperience.map((experience) => (
        <ExperienceBlockEditor
          key={experience[Keys.ID]}
          experience={experience}
          onChange={onWorkExpreienceChanged}
        />
      ))}
    </>
  )
}
WorkExperienceEditor.propTypes = {
  workExperience: PropTypes.array.isRequired,
  onWorkExpreienceChanged: PropTypes.func.isRequired,
}

export default WorkExperienceEditor
