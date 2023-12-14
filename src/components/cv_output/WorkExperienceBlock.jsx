import PropTypes from 'prop-types'
import * as Keys from '../../constants/Keys'
import '../../styles/CVOutput.css'

function WorkExperienceBlock({ workExperienceEntry }) {
  return (
    <div className='block'>
      <h1>{workExperienceEntry[Keys.JOB_TITLE]}</h1>
      <h2>{workExperienceEntry[Keys.WORK_COMPANY]}</h2>
      {workExperienceEntry[Keys.START_DATE] == '' ? null : (
        <p>
          From {workExperienceEntry[Keys.START_DATE]} to{' '}
          {workExperienceEntry[Keys.END_DATE] == ''
            ? 'present day'
            : workExperienceEntry[Keys.END_DATE]}
        </p>
      )}
      <p>{workExperienceEntry[Keys.SUMMARY]}</p>
    </div>
  )
}

WorkExperienceBlock.propTypes = {
  workExperienceEntry: PropTypes.object.isRequired,
}

export default WorkExperienceBlock
