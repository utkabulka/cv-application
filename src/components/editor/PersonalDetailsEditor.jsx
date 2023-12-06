import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import RoomIcon from '@mui/icons-material/Room'
import PropTypes from 'prop-types'
import * as Keys from '../../constants/Keys'
import Header from '../Header'
import InputField from './InputField'
import TextArea from './TextArea'

function PersonalDetailsEditor({
  onInformationChanged: onDetailsChanged = () => {},
  onSummaryChanged = () => {},
  personalInformation = [],
  summary = '',
}) {
  return (
    <>
      <div className='editor-section'>
        <Header text='Personal details' />
      </div>
      <div className='editor-section'>
        <InputField
          label='Full name'
          placeholder={`What's your name?`}
          isRequired={true}
          value={personalInformation[Keys.FULL_NAME]}
          onChange={(e) => onDetailsChanged(Keys.FULL_NAME, e.target.value)}
        />
        <InputField
          label='Role'
          placeholder={`What is your desired role?`}
          isRequired={true}
          value={personalInformation[Keys.ROLE]}
          onChange={(e) => onDetailsChanged(Keys.ROLE, e.target.value)}
        />
        <InputField
          label='Location'
          placeholder={`Where do you live?`}
          isRequired={true}
          icon={RoomIcon}
          value={personalInformation[Keys.LOCATION]}
          onChange={(e) => onDetailsChanged(Keys.LOCATION, e.target.value)}
        />
        <InputField
          label='E-mail'
          placeholder={`Your e-mail`}
          icon={EmailIcon}
          value={personalInformation[Keys.EMAIL]}
          onChange={(e) => onDetailsChanged(Keys.EMAIL, e.target.value)}
        />
        <InputField
          label='Phone number'
          placeholder={`Your phone number`}
          icon={PhoneIcon}
          value={personalInformation[Keys.PHONE_NUMBER]}
          onChange={(e) => onDetailsChanged(Keys.PHONE_NUMBER, e.target.value)}
        />
        <InputField
          label='Website'
          placeholder={`Your website, if you have one`}
          icon={HomeIcon}
          value={personalInformation[Keys.WEBSITE]}
          onChange={(e) => onDetailsChanged(Keys.WEBSITE, e.target.value)}
        />{' '}
        <TextArea
          label='Summary'
          placeholder='Your CV summary'
          value={summary}
          height={180}
          onChange={onSummaryChanged}
        />
      </div>
    </>
  )
}
PersonalDetailsEditor.propTypes = {
  onInformationChanged: PropTypes.func.isRequired,
  onSummaryChanged: PropTypes.func.isRequired,
  personalInformation: PropTypes.object.isRequired,
  summary: PropTypes.string.isRequired,
}

export default PersonalDetailsEditor
