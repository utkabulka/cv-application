import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import * as Keys from '../../constants/Keys'

function EditorSectionControls({ targetObject, onDeleted = () => {} }) {
  return (
    <div className='editor-section-controls'>
      <div className='handle'>
        <DragHandleIcon />
      </div>
      <button
        className='editor-section-delete'
        onClick={() => {
          onDeleted(targetObject[Keys.ID])
        }}
      >
        <DeleteForeverIcon />
      </button>
    </div>
  )
}

export default EditorSectionControls
