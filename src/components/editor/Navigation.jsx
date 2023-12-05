import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PrintIcon from '@mui/icons-material/Print'
import SchoolIcon from '@mui/icons-material/School'
import SettingsIcon from '@mui/icons-material/Settings'
import WorkIcon from '@mui/icons-material/Work'
import PropTypes from 'prop-types'
import * as NavigationTabs from '../../constants/NavigationTabs'
import '../../styles/editor/Navigation.css'
import Button from './Button'

function Navigation({ onNavigationClicked = () => {}, selectedTab = '' }) {
  return (
    <div className='navigation'>
      <Button
        icon={AccountCircleIcon}
        onClick={() => onNavigationClicked(NavigationTabs.PERSONAL_INFORMATION)}
      />
      <Button
        icon={WorkIcon}
        onClick={() => onNavigationClicked(NavigationTabs.WORK_EXPERIENCE)}
      />
      <Button
        icon={SchoolIcon}
        onClick={() => onNavigationClicked(NavigationTabs.WORK_EXPERIENCE)}
      />
      <Button
        icon={SettingsIcon}
        onClick={() => onNavigationClicked(NavigationTabs.WORK_EXPERIENCE)}
      />
      <Button
        icon={PrintIcon}
        onClick={() => onNavigationClicked(NavigationTabs.WORK_EXPERIENCE)}
      />
    </div>
  )
}
Navigation.propTypes = {
  onNavigationClicked: PropTypes.func.isRequired,
  selectedTab: PropTypes.string,
}

export default Navigation
