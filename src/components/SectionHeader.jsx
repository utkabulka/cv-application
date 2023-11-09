import '../styles/SectionHeader.css'

function SectionHeader({text = 'Section header'}) {
  return <h1 className='section-header'>{text}</h1>
}

export default SectionHeader