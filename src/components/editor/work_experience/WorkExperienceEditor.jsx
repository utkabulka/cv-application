import PropTypes from 'prop-types'
import { ReactSortable } from 'react-sortablejs'
import * as Keys from '../../../constants/Keys'
import Header from '../../Header'
import AddButton from '../AddButton'
import WorkExperienceBlockEditor from './WorkExperienceBlockEditor'

function WorkExperienceEditor({
  workExperience = [],
  setWorkExperience = () => {},
  onWorkExpreienceChanged = () => {},
  onWorkExpreienceDeleted = () => {},
  onWorkExpreienceAdded = () => {},
}) {
  return (
    <>
      <div className='editor-section'>
        <Header text='Work experience' />
      </div>
      <ReactSortable list={workExperience} setList={setWorkExperience} handle='.handle'>
        {workExperience.map((experience) => (
          <WorkExperienceBlockEditor
            key={experience[Keys.ID]}
            experience={experience}
            onChange={onWorkExpreienceChanged}
            onDeleted={onWorkExpreienceDeleted}
          />
        ))}
      </ReactSortable>
      <AddButton onClick={onWorkExpreienceAdded} />
    </>
  )
}
WorkExperienceEditor.propTypes = {
  workExperience: PropTypes.array.isRequired,
  setWorkExperience: PropTypes.func.isRequired,
  onWorkExpreienceChanged: PropTypes.func.isRequired,
  onWorkExpreienceDeleted: PropTypes.func.isRequired,
  onWorkExpreienceAdded: PropTypes.func.isRequired,
}

export default WorkExperienceEditor
