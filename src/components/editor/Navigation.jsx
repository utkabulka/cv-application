import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PrintIcon from '@mui/icons-material/Print'
import SchoolIcon from '@mui/icons-material/School'
import SettingsIcon from '@mui/icons-material/Settings'
import WorkIcon from '@mui/icons-material/Work'
import PropTypes from 'prop-types'
import * as NavigationButtons from '../../constants/NavigationButtons'
import '../../styles/editor/Navigation.css'
import NavigationButton from './NavigationButton'

function Navigation({ onNavigationClicked = () => {}, selectedTab = '' }) {
  return (
    <div className='navigation'>
      <NavigationButton
        icon={AccountCircleIcon}
        onClick={() =>
          onNavigationClicked(NavigationButtons.PERSONAL_INFORMATION)
        }
        isSelected={selectedTab == NavigationButtons.PERSONAL_INFORMATION}
      />
      <NavigationButton
        icon={WorkIcon}
        onClick={() => onNavigationClicked(NavigationButtons.WORK_EXPERIENCE)}
        isSelected={selectedTab == NavigationButtons.WORK_EXPERIENCE}
      />
      <NavigationButton
        icon={SchoolIcon}
        onClick={() => onNavigationClicked(NavigationButtons.EDUCATION)}
        isSelected={selectedTab == NavigationButtons.EDUCATION}
      />
      <NavigationButton
        icon={SettingsIcon}
        onClick={() => onNavigationClicked(NavigationButtons.SETTINGS)}
        isSelected={selectedTab == NavigationButtons.SETTINGS}
      />
      <NavigationButton
        icon={PrintIcon}
        onClick={() => onNavigationClicked(NavigationButtons.PRINT)}
      />
    </div>
  )
}
Navigation.propTypes = {
  onNavigationClicked: PropTypes.func.isRequired,
  selectedTab: PropTypes.string,
}

export default Navigation
