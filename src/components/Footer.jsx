import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <a
        href='https://github.com/utkabulka/cv-application'
        target='_blank'
        rel='noreferrer'
      >
        <div className='footer-wrapper'>
          <GitHubIcon />
          <p>Source code on GitHub</p>
        </div>
      </a>
    </div>
  )
}

export default Footer
