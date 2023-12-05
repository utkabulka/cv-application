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
          name={Keys.FULL_NAME}
          value={personalInformation[Keys.FULL_NAME]}
          onChange={onDetailsChanged}
        />
        <InputField
          label='Role'
          placeholder={`What is your desired role?`}
          isRequired={true}
          name={Keys.ROLE}
          value={personalInformation[Keys.ROLE]}
          onChange={onDetailsChanged}
        />
        <InputField
          label='Location'
          placeholder={`Where do you live?`}
          isRequired={true}
          name={Keys.LOCATION}
          icon={RoomIcon}
          value={personalInformation[Keys.LOCATION]}
          onChange={onDetailsChanged}
        />
        <InputField
          label='E-mail'
          placeholder={`Your e-mail`}
          name={Keys.EMAIL}
          icon={EmailIcon}
          value={personalInformation[Keys.EMAIL]}
          onChange={onDetailsChanged}
        />
        <InputField
          label='Phone number'
          placeholder={`Your phone number`}
          name={Keys.PHONE_NUMBER}
          icon={PhoneIcon}
          value={personalInformation[Keys.PHONE_NUMBER]}
          onChange={onDetailsChanged}
        />
        <InputField
          label='Website'
          placeholder={`Your website, if you have one`}
          name={Keys.WEBSITE}
          icon={HomeIcon}
          value={personalInformation[Keys.WEBSITE]}
          onChange={onDetailsChanged}
        />
      </div>
      <div className='editor-section'>
        <Header text='Summary' />
        <TextArea
          label='Your CV summary'
          value={summary}
          name={Keys.SUMMARY}
          height={160}
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
