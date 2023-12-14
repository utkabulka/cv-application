import PropTypes from 'prop-types'
import * as Keys from '../../constants/Keys'
import '../../styles/CVOutput.css'

function EducationBlock({ educationEntry }) {
  return <div className='block'>{educationEntry[Keys.DEGREE]}</div>
}

export default EducationBlock
