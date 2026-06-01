import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
}

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const handler = (event: Event) => {
      const e = event as BeforeInstallPromptEvent
      e.preventDefault()
      setDeferredPrompt(e)
    }

    const installed = () => setDeferredPrompt(null)

    window.addEventListener('beforeinstallprompt', handler as EventListener)
    window.addEventListener('appinstalled', installed)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener)
      window.removeEventListener('appinstalled', installed)
    }
  }, [])

  const installApp = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    setDeferredPrompt(null)
  }

  if (!deferredPrompt) return null

  return (
    <div className="install-banner-container">
      <div className="install-banner">
        <div className="install-logo">
          <div>THE</div>
          <div>WEEKENDERS</div>
        </div>
        <div className="install-content">
          <p className="install-app-name">Install The Weekenders</p>
          <p className="install-subtitle">theweekenderske.com</p>
        </div>
        <button className="install-button" onClick={installApp} type="button">
          Install
        </button>
      </div>
    </div>
  )
}
