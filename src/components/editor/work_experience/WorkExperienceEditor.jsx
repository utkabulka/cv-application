import AddCircleIcon from '@mui/icons-material/AddCircle'
import PropTypes from 'prop-types'
import * as Keys from '../../../constants/Keys'
import Header from '../../Header'
import ExperienceBlockEditor from './ExperienceBlockEditor'

function WorkExperienceEditor({
  workExperience = [],
  onWorkExpreienceChanged = () => {},
  onWorkExpreienceDeleted = () => {},
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
          onDeleted={onWorkExpreienceDeleted}
        />
      ))}
      <div className='editor-section add-element-button'>
        <button>
          <AddCircleIcon />
        </button>
      </div>
    </>
  )
}
WorkExperienceEditor.propTypes = {
  workExperience: PropTypes.array.isRequired,
  onWorkExpreienceChanged: PropTypes.func.isRequired,
  onWorkExpreienceDeleted: PropTypes.func.isRequired,
}

export default WorkExperienceEditor
