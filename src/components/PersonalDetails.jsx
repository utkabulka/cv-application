import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import PhoneIcon from '@mui/icons-material/Phone'
import RoomIcon from '@mui/icons-material/Room'
import PropTypes from 'prop-types'
import * as Keys from '../constants/Keys'
import Header from './Header'
import InputField from './InputField'
import TextArea from './TextArea'

function PersonalDetails({
  onInformationChanged = () => {},
  onSummaryChanged = () => {},
  personalInformation = [],
  summary = '',
}) {
  return (
    <>
      <div className='editor-section'>
        <Header text='Personal details' />
        <InputField
          label='Full name'
          placeholder={`What's your name?`}
          isRequired={true}
          name={Keys.FULL_NAME}
          value={personalInformation[Keys.FULL_NAME]}
          onChange={onInformationChanged}
        />
        <InputField
          label='Role'
          placeholder={`What is your desired role?`}
          isRequired={true}
          name={Keys.ROLE}
          value={personalInformation[Keys.ROLE]}
          onChange={onInformationChanged}
        />
        <InputField
          label='Location'
          placeholder={`Where do you live?`}
          isRequired={true}
          name={Keys.LOCATION}
          icon={RoomIcon}
          value={personalInformation[Keys.LOCATION]}
          onChange={onInformationChanged}
        />
        <InputField
          label='Website'
          placeholder={`Your website, if you have one`}
          name={Keys.WEBSITE}
          icon={HomeIcon}
          value={personalInformation[Keys.WEBSITE]}
          onChange={onInformationChanged}
        />
        <InputField
          label='E-mail'
          placeholder={`Your e-mail`}
          name={Keys.EMAIL}
          icon={EmailIcon}
          value={personalInformation[Keys.EMAIL]}
          onChange={onInformationChanged}
        />
        <InputField
          label='Phone number'
          placeholder={`Your phone number`}
          name={Keys.PHONE_NUMBER}
          icon={PhoneIcon}
          value={personalInformation[Keys.PHONE_NUMBER]}
          onChange={onInformationChanged}
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
PersonalDetails.propTypes = {
  onInformationChanged: PropTypes.func.isRequired,
  onSummaryChanged: PropTypes.func.isRequired,
  personalInformation: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired,
}

export default PersonalDetails
