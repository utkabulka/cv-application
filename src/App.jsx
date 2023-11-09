import InputField from './components/InputField'
import SectionHeader from './components/SectionHeader'
import './styles/App.css'

function App() {
  return (
    <>
      <div className='app-root'>
        <div className='editor'>
          <div className='editor-section'>
            <SectionHeader text='Personal details' />
            <form>
              <InputField label='Full name' />
              <InputField label='E-mail' />
              <InputField label='Phone number' />
              <InputField label='Address' />
            </form>
          </div>
          <div className='editor-section'>
          <SectionHeader text='Education' />
            <form>
              <InputField />
              <InputField />
              <InputField />
              <InputField />
            </form>
          </div>
        </div>
        <div className='cv-output'></div>
      </div>
    </>
  )
}

export default App
