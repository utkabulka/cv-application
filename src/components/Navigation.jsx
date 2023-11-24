import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PrintIcon from '@mui/icons-material/Print'
import SchoolIcon from '@mui/icons-material/School'
import SettingsIcon from '@mui/icons-material/Settings'
import WorkIcon from '@mui/icons-material/Work'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import * as NavigationTabs from '../constants/NavigationTabs'
import '../styles/Navigation.css'

function Navigation({ onNavigationClicked = () => {} }) {
  return (
    <div className='navigation'>
      <Button
        icon={AccountCircleIcon}
        onClick={onNavigationClicked(NavigationTabs.PERSONAL_INFORMATION)}
      />
      <Button
        icon={WorkIcon}
        onClick={onNavigationClicked(NavigationTabs.WORK_EXPERIENCE)}
      />
      <Button icon={SchoolIcon} />
      <Button icon={SettingsIcon} />
      <Button icon={PrintIcon} />
    </div>
  )
}
Navigation.propTypes = {
  onNavigationClicked: PropTypes.func.isRequired,
}

export default Navigation
