import { useEffect, useState } from 'react'
import Icon from './Icon'
import logo from '../assets/logo.png'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
}

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const handler = (event: Event) => {
      const e = event as BeforeInstallPromptEvent
      e.preventDefault()
      setDeferredPrompt(e)
    }

    const installed = () => setShowBanner(false)

    const handlePopstate = () => {
      const navigatorStandalone = (window.navigator as any).standalone
      if (navigatorStandalone || window.matchMedia('(display-mode: standalone)').matches) {
        window.close()
      }
    }

    window.addEventListener('beforeinstallprompt', handler as EventListener)
    window.addEventListener('appinstalled', installed)
    window.addEventListener('popstate', handlePopstate)
    window.history.pushState({ page: 'home' }, '', window.location.href)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener)
      window.removeEventListener('appinstalled', installed)
      window.removeEventListener('popstate', handlePopstate)
    }
  }, [])

  const installApp = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
    setShowBanner(false)
  }

  if (!showBanner) return null

 return (
  <div className="install-banner-container">
    <div className="install-banner">
      <img src={logo} alt="The Weekenders logo" className="install-logo" />

      <div className="install-content">
        <span className="install-title">
          The Weekenders <span className="beta-badge">App</span>
        </span>
        <span className="install-subtitle">
          Meet people. Share experiences. Create memories.
        </span>
      </div>

      <button
        className="install-icon-button"
        onClick={installApp}
        type="button"
        aria-label="Install app"
      >
        <Icon name="download" className="install-icon" />
      </button>

      <button
        className="install-close"
        onClick={() => setShowBanner(false)}
        type="button"
        aria-label="Close popup"
      >
        <Icon name="close" className="install-close-icon" />
      </button>
    </div>
  </div>
)
}
