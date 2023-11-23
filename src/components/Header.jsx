import PropTypes from 'prop-types'
import '../styles/Header.css'

function Header({ text = 'Header text' }) {
  return <h1>{text}</h1>
}
Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header
