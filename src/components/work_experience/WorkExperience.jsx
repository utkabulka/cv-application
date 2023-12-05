import PropTypes from 'prop-types'
import * as Keys from '../../constants/Keys'
import Header from '../Header'
import ExperienceBlock from './ExperienceBlock'

function WorkExperience({
  workExperience = [],
  onWorkExpreienceChanged = () => {},
}) {
  return (
    <>
      <div className='editor-section'>
        <Header text='Work experience' />
      </div>
      {workExperience.map((experience) => (
        <ExperienceBlock
          key={experience[Keys.ID]}
          experience={experience}
          onChange={onWorkExpreienceChanged}
        />
      ))}
    </>
  )
}
WorkExperience.propTypes = {
  workExperience: PropTypes.array.isRequired,
  onWorkExpreienceChanged: PropTypes.func.isRequired,
}

export default WorkExperience
