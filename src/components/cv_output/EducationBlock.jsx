import PropTypes from 'prop-types'
import * as Keys from '../../constants/Keys'
import '../../styles/CVOutput.css'

function EducationBlock({ educationEntry }) {
  return (
    <div className='block'>
      <h1>{educationEntry[Keys.DEGREE]}</h1>
      <h2>{educationEntry[Keys.SCHOOL]}</h2>
      <h2>{educationEntry[Keys.LOCATION]}</h2>
      {educationEntry[Keys.START_DATE] == '' ? null : (
        <p>
          From {educationEntry[Keys.START_DATE]} to{' '}
          {educationEntry[Keys.END_DATE] == ''
            ? 'present day'
            : educationEntry[Keys.END_DATE]}
        </p>
      )}
      <p>{educationEntry[Keys.SUMMARY]}</p>
    </div>
  )
}

EducationBlock.propTypes = {
  educationEntry: PropTypes.object.isRequired,
}

export default EducationBlock
