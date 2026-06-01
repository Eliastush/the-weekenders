import { useEffect, useState } from 'react'
import Icon from '../components/Icon'
import heroBanner from '../assets/hero_banner.jpeg'
import logo from '../assets/logo.png'
import elias from '../assets/elias.jpg'
import parkGroup from '../assets/park_group.jpg'
import snacksTable from '../assets/snacks_table.jpg'
import cityEscape from '../assets/city_escape.jpg'
import kenyaMap from '../assets/national_map_kenya.png'

const experiences: Array<{
  title: string
  description: string
  bullets: string[]
  icon: 'community' | 'spark' | 'target' | 'star' | 'rocket'
}> = [
  {
    title: 'Social Meetups',
    description:
      'Friendly weekend meetups designed to help members start conversations, build new connections, and enjoy local life together.',
    bullets: [
      'Brunch and coffee catchups',
      'Conversation circles',
      'Photo walks and introductions',
      'Community-led icebreakers',
    ],
    icon: 'community',
  },
  {
    title: 'Outdoor Adventures',
    description:
      'Fresh-air meetups that make the weekend feel open, relaxed and adventurous in safe public spaces.',
    bullets: [
      'Spring picnics at Uhuru Park',
      'Short nature walks',
      'Group games and movement',
      'Guided conversation spots',
    ],
    icon: 'spark',
  },
  {
    title: 'Networking Events',
    description:
      'Professional yet approachable gatherings for creators, entrepreneurs and weekend builders.',
    bullets: [
      'Soft introductions',
      'Idea sharing sessions',
      'Collaboration prompts',
      'Follow-up connection support',
    ],
    icon: 'target',
  },
  {
    title: 'Creative Sessions',
    description:
      'Intentional moments for inspiration, craft, and shared experiences with a local community vibe.',
    bullets: [
      'Pop-up workshops',
      'Storytelling circles',
      'Photo and art activations',
      'Relaxed social mixers',
    ],
    icon: 'star',
  },
]

const stats = [
  { value: '2.3K+', label: 'Kenya members' },
  { value: '95%', label: 'Repeat weekenders' },
  { value: '4.9/5', label: 'Community vibe score' },
]

export default function Home() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    // Event date: July 5, 2026 14:00 (2:00PM)
    const eventDate = new Date('2026-07-05T14:00:00')

    function update() {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      if (distance <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((distance / (1000 * 60)) % 60)
      const seconds = Math.floor((distance / 1000) % 60)

      setCountdown({ days, hours, minutes, seconds })
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <header className="landing-header">
        <div className="page-shell nav-shell">
          <a className="brand" href="#hero">
            <img src={logo} alt="The Weekenders" className="brand-logo" />
            <div>
              <p className="brand-name">The Weekenders</p>
              <p className="brand-sm">Official Kenyan weekend community</p>
            </div>
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav-links ${mobileNavOpen ? 'open' : ''}`}>
            <div className="nav-tag">BETA</div>
            <button className="nav-close" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation">
              ×
            </button>
            <a href="#about" onClick={() => setMobileNavOpen(false)}>
              About
            </a>
            <a href="#experience" onClick={() => setMobileNavOpen(false)}>
              Experience
            </a>
            <a href="#featured-event" onClick={() => setMobileNavOpen(false)}>
              Event
            </a>
            <a href="#contact" onClick={() => setMobileNavOpen(false)}>
              Contact
            </a>
          </nav>
          <div className="nav-cta">
            <div className="header-contact">+254 720 633 477</div>
            <a
              className="btn btn-nav"
              href="https://chat.whatsapp.com/IJCerfG6uG4EBcP74MbenE"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Group
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Nationwide (Kenya) community</span>
              <h1 className="hero-title">
                Meet people. Share experiences. Keep memories.
              </h1>
              <p className="hero-description">
                The Weekenders brings people across Kenya together for weekend experiences that feel warm,
                real and easy to join.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#featured-event">
                  View Spring Picnic
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact Elias
                </a>
              </div>

              <p className="hero-tagline">
                Community-led, beginner-friendly weekends with local people and simple plans.
              </p>
            </div>

            <div className="hero-panel">
              <div className="hero-card">
                <div className="hero-card-top">
                  <span className="badge">Nationwide community</span>
                  <span className="pill">
                    <Icon name="calendar" className="icon-sm" label="Open to Kenya" />
                    Open to Kenya
                  </span>
                </div>
                <h2>Spring Picnic at Uhuru Park</h2>
                <p>
                  An official community picnic gathering with food, conversation, and soft activities.
                  Open to everyone across Kenya.
                </p>
                <div className="hero-card-row">
                  <span>Payment via POCHI-Mpesa</span>
                  <span>Send KES 150 to 0720633477</span>
                </div>
                <a className="btn btn-card" href="#featured-event">
                  Learn more
                </a>
                <img className="hero-media" src={heroBanner} alt="community outdoors" />
              </div>
            </div>
          </div>
        </section>

        <section className="section founder-note">
          <div className="page-shell">
            <div className="founder-card">
              <div className="founder-photo">
                <img src={elias} alt="Founder Elias" />
                <div className="founder-caption">FOUNDERS NOTE</div>
              </div>
              <div className="founder-copy">
                <h3>Elias Mutugi</h3>
                <p>
                  The Weekenders is a trusted Kenyan community for intentional weekend experiences.
                  We bring people together in safe, welcoming settings where every meetup feels organized,
                  professional and effortless.
                </p>
                <p>
                  Join us for calm spring picnics, community weekends and gatherings that are built to
                  feel real, reliable and memorable.
                </p>
                <div className="founder-signature">— Elias Mutugi, Founder</div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="page-shell">
            <div className="section-intro">
              <span className="eyebrow">Image preview</span>
              <h2>More moments from The Weekenders</h2>
            </div>
            <div className="gallery-grid">
              <article className="gallery-card">
                <img src={heroBanner} alt="Group outdoors at park" />
                <div>
                  <h3>Spring gatherings</h3>
                  <p>Relaxed outdoor moments with friends and community members.</p>
                </div>
              </article>
              <article className="gallery-card">
                <img src={parkGroup} alt="Community at Uhuru Park" />
                <div>
                  <h3>Park meetups</h3>
                  <p>Weekenders coming together for calm, organized experiences.</p>
                </div>
              </article>
              <article className="gallery-card">
                <img src={snacksTable} alt="Refreshments" />
                <div>
                  <h3>Good food & fellowship</h3>
                  <p>Sharing meals and conversations that build lasting connections.</p>
                </div>
              </article>
              <article className="gallery-card">
                <img src={cityEscape} alt="Nature escape" />
                <div>
                  <h3>Weekend escapes</h3>
                  <p>Finding peace and new perspectives in nature and open spaces.</p>
                </div>
              </article>
              <article className="gallery-card">
                <img src={elias} alt="Founder Elias" />
                <div>
                  <h3>Founder & community</h3>
                  <p>Elias building trusted spaces for genuine connections.</p>
                </div>
              </article>
              <article className="gallery-card">
                <img src={kenyaMap} alt="Kenya nationwide" />
                <div>
                  <h3>Nationwide presence</h3>
                  <p>The Weekenders spans across Kenya, connecting members everywhere.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="page-shell">
            <div className="section-intro">
              <span className="eyebrow">Official community profile</span>
              <h2>The Weekenders is Kenya’s official weekend lifestyle community.</h2>
            </div>
            <div className="about-copy">
              <p>
                The Weekenders is a Kenyan-based lifestyle community that curates weekend
                experiences for young professionals, creatives, entrepreneurs and students.
                We build real-life connection through carefully organized social, outdoor and
                networking events.
              </p>
              <p>
                We are not just an events group — we are a professional community where safety,
                consistency and meaningful interaction matter.
              </p>
              <ul className="about-list">
                <li>Community first: people and relationships are central.</li>
                <li>Safe experiences: planned with clear payment and official details.</li>
                <li>Accessible weekends: open to all of Kenya.</li>
                <li>Reliable delivery: regular Spring Picnic and weekend programming.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="page-shell">
            <div className="section-intro">
              <span className="eyebrow">Community experiences</span>
              <h2>Weekend moments created for connection.</h2>
            </div>
            <div className="feature-grid">
              {experiences.map((item) => (
                <article key={item.title} className="feature-card">
                  <span className="feature-icon">
                    <Icon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className="experience-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-event" className="section featured-event-section">
          <div className="page-shell featured-grid">
            <div className="feature-copy">
              <span className="eyebrow">Featured event</span>
              <h2>Spring Picnic at Uhuru Park</h2>
              <p>
                A formal spring picnic at Uhuru Park for Kenya’s weekend community. This event is open, professional and easy to join.
              </p>
              <ol className="event-list">
                <li>📍 Location: Uhuru Park</li>
                <li>📅 Date: July 5, 2026</li>
                <li>⏰ Time: 2:00 PM</li>
                <li>💵 Payment: KES 150 via POCHI-Mpesa to 0720633477</li>
                <li>✅ Open slots — everyone is welcome</li>
              </ol>
            </div>

            <div className="feature-card event-panel">
              <span className="event-pill">Spring Picnic</span>
              <h3>Official Uhuru Park community picnic</h3>
              <p>
                Join a calm, organized picnic with food, soft activities and a welcoming crowd.
              </p>
              <div className="event-meta">
                <div>
                  <Icon name="location" className="icon-sm" />
                  <span>Uhuru Park</span>
                </div>
                <div>
                  <Icon name="calendar" className="icon-sm" />
                  <span>July 5, 2026 — 2:00 PM</span>
                </div>
                <div>
                  <Icon name="calendar" className="icon-sm" />
                  <span>Countdown: {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s</span>
                </div>
              </div>
              <div className="event-stats">
                <div>
                  <strong>12</strong>
                  <span>New members last week</span>
                </div>
                <div>
                  <strong>4.9/5</strong>
                  <span>Community vibe score</span>
                </div>
              </div>
              <a
                className="btn btn-primary btn-large"
                href="https://chat.whatsapp.com/IJCerfG6uG4EBcP74MbenE"
                target="_blank"
                rel="noreferrer"
              >
                Join the WhatsApp Group
              </a>
            </div>
          </div>
        </section>

        <section id="community" className="section social-proof-section">
          <div className="page-shell social-grid">
            <div className="social-copy">
              <span className="eyebrow">Nationwide (Kenya)</span>
              <h2>Growing Kenya community. Real people. Real connections.</h2>
              <p>
                Our members are professionals, creators, students and weekend seekers who want
                experiences that feel effortless and welcoming. Mix with members from across Kenya,
                discover upcoming experiences and leave with a better plan for your next weekend.
              </p>
            </div>
            <div className="proof-cards">
              {stats.map((stat) => (
                <div key={stat.label} className="proof-card">
                  <p className="proof-value">{stat.value}</p>
                  <p className="proof-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="page-shell contact-card">
            <div>
              <span className="eyebrow">Contact & official details</span>
              <h2>Connect with The Weekenders</h2>
              <p>
                For event questions, payment confirmation, and official community support,
                contact Elias directly via WhatsApp or email.
              </p>
              <ul className="contact-list">
                <li><strong>Phone / WhatsApp:</strong> +254 720 633 477</li>
                <li><strong>Payment details:</strong> KES 150 via POCHI-Mpesa to 0720633477</li>
                <li><strong>WhatsApp group:</strong> <a href="https://chat.whatsapp.com/IJCerfG6uG4EBcP74MbenE" target="_blank" rel="noreferrer">Join the community</a></li>
                <li><strong>Email:</strong> theweekenderske@gmail.com</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="page-footer">
          <div className="page-shell footer-shell footer-official">
            <div>
              <p className="footer-brand">The Weekenders</p>
              <p className="footer-copy">
                Official Kenyan weekend community for curated social and outdoor experiences.
                Created to connect people, build trust, and help members enjoy memorable weekends.
              </p>
              <div className="footer-social">
                <a href="https://www.tiktok.com/@theweekenderske" target="_blank" rel="noreferrer" className="social-link">TikTok @theweekenderske</a>
              </div>
            </div>
            <div className="footer-info">
              <p><strong>Registered community:</strong> The Weekenders</p>
              <p><strong>Contact:</strong> +254 720 633 477</p>
              <p><strong>Email:</strong> theweekenderske@gmail.com</p>
            </div>
          </div>
          <div className="footer-legal">
            <p>All event payments are processed via POCHI-Mpesa. Refunds are managed according to event policy.</p>
            <p>Copyright © 2026 The Weekenders. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
