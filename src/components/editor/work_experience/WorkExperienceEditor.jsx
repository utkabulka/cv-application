import PropTypes from 'prop-types'
import { ReactSortable } from 'react-sortablejs'
import * as Keys from '../../../constants/Keys'
import AddButton from '../AddButton'
import WorkExperienceBlockEditor from './WorkExperienceBlockEditor'

// TODO: make one common component for EducationEditor, WorkExperienceEditor
function WorkExperienceEditor({
  workExperience = [],
  setWorkExperience = () => {},
  onWorkExperienceChanged = () => {},
  onWorkExperienceDeleted = () => {},
  onWorkExperienceAdded = () => {},
}) {
  return (
    <>
      <div className='editor-section'>
        <h1>Work experience</h1>
      </div>
      <ReactSortable
        list={workExperience}
        setList={setWorkExperience}
        handle='.handle'
      >
        {workExperience.map((workExperienceEntry) => (
          <WorkExperienceBlockEditor
            key={workExperienceEntry[Keys.ID]}
            workExperienceEntry={workExperienceEntry}
            onChange={onWorkExperienceChanged}
            onDeleted={onWorkExperienceDeleted}
          />
        ))}
      </ReactSortable>
      <AddButton onClick={onWorkExperienceAdded} />
    </>
  )
}
WorkExperienceEditor.propTypes = {
  workExperience: PropTypes.array.isRequired,
  setWorkExperience: PropTypes.func.isRequired,
  onWorkExperienceChanged: PropTypes.func.isRequired,
  onWorkExperienceDeleted: PropTypes.func.isRequired,
  onWorkExperienceAdded: PropTypes.func.isRequired,
}

export default WorkExperienceEditor
