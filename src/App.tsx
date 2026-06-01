import Home from './pages/home'
import InstallButton from './components/InstallButton'
import Icon from './components/Icon'
import './App.css'

function App() {
  return (
    <main className="app">
      <Home />
      <InstallButton />

      <a
        className="whatsapp-widget"
        href="https://chat.whatsapp.com/IJCerfG6uG4EBcP74MbenE"
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp Group"
      >
        <Icon name="chat" />
      </a>
    </main>
  )
}

export default App
