import './App.css'
import { useEffect, useState } from 'react'

const translations = {
  en: {
    brandName: 'Fournos Gkika',
    navHome: 'Home',
    navContact: 'Contact',
    home: {
      eyebrow: 'Local bakery in your neighborhood',
      title: 'Fresh bread, pastries, and coffee every day',
      lead: 'Fournos Gkika is a small family bakery focused on simple, high-quality products made daily with trusted ingredients.',
      visitUs: 'Visit us',
      highlightsTitle: "Today's highlights",
      highlightsLead: 'Fresh out of the oven:',
      highlights: ['Village bread', 'Spinach pies', 'Cinnamon rolls'],
      specialtiesTitle: 'Our specialties',
      specials: [
        {
          name: 'Country Sourdough',
          description: 'Slow-fermented loaf with a crisp crust and soft center.',
        },
        {
          name: 'Butter Croissant',
          description: 'Flaky, rich, and baked fresh from the oven every morning.',
        },
        {
          name: 'Sesame Koulouri',
          description: 'Traditional ring bread, perfect for breakfast on the go.',
        },
      ],
      whyTitle: 'Why people choose us',
      whyText:
        'We bake in small batches throughout the day, so products stay fresh. You can stop by for breakfast, grab bread for home, or order a tray for your office.',
      hoursTitle: 'Opening hours',
      hours: [
        { day: 'Every day', time: '06:30 - 20:30' },
      ],
    },
    contact: {
      title: 'Contact us',
      intro:
        'Stop by the bakery, call us for daily orders, or send us an email for catering requests.',
      addressLabel: 'Address',
      address: 'Dimokratias 41, Marathonas 19007',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      instagramLabel: 'Instagram',
      awardLabel: 'Recognition',
      ordersLabel: 'Orders',
      ordersText: 'Please call at least 24 hours in advance.',
      openMap: 'Open in Google Maps',
      mapTitle: 'Bakery location map',
    },
    footer: 'Fournos Gkika | Fresh bakery products made daily in Athens',
  },
  el: {
    brandName: 'Φούρνος Γκίκα',
    navHome: 'Αρχική',
    navContact: 'Επικοινωνία',
    home: {
      eyebrow: 'Τοπικός φούρνος στη γειτονιά σου',
      title: 'Φρέσκο ψωμί, σφολιάτες και καφές κάθε μέρα',
      lead: 'Ο Φούρνος Γκίκα είναι ένας μικρός οικογενειακός φούρνος με απλά, ποιοτικά προϊόντα που παρασκευάζονται καθημερινά.',
      visitUs: 'Επισκεφθείτε μας',
      highlightsTitle: 'Σημερινές προτάσεις',
      highlightsLead: 'Μόλις βγήκαν από τον φούρνο:',
      highlights: ['Χωριάτικο ψωμί', 'Σπανακόπιτες', 'Ρολάκια κανέλας'],
      specialtiesTitle: 'Τα προϊόντα μας',
      specials: [
        {
          name: 'Προζυμένιο Ψωμί',
          description: 'Αργή ωρίμανση, τραγανή κόρα και αφράτη ψίχα.',
        },
        {
          name: 'Κρουασάν Βουτύρου',
          description: 'Φυλλωτό, βουτυρένιο και φρεσκοψημένο κάθε πρωί.',
        },
        {
          name: 'Κουλούρι Θεσσαλονίκης',
          description: 'Παραδοσιακό κουλούρι με σουσάμι, ιδανικό για πρωινό.',
        },
      ],
      whyTitle: 'Γιατί μας προτιμούν',
      whyText:
        'Ψήνουμε σε μικρές παρτίδες όλη μέρα για μέγιστη φρεσκάδα. Μπορείτε να περάσετε για πρωινό, να πάρετε ψωμί για το σπίτι ή να κάνετε παραγγελία για το γραφείο.',
      hoursTitle: 'Ωράριο',
      hours: [
        { day: 'Καθημερινά', time: '06:30 - 20:30' },
      ],
    },
    contact: {
      title: 'Επικοινωνία',
      intro:
        'Περάστε από το κατάστημα, καλέστε μας για καθημερινές παραγγελίες ή στείλτε email για catering.',
      addressLabel: 'Διεύθυνση',
      address: 'Δημοκρατίας 41, Μαραθώνας 19007',
      phoneLabel: 'Τηλέφωνο',
      emailLabel: 'Email',
      instagramLabel: 'Instagram',
      awardLabel: 'Αναγνώριση',
      ordersLabel: 'Παραγγελίες',
      ordersText: 'Παρακαλούμε καλέστε τουλάχιστον 24 ώρες νωρίτερα.',
      openMap: 'Άνοιγμα στους Χάρτες Google',
      mapTitle: 'Χάρτης τοποθεσίας φούρνου',
    },
    footer: 'Φούρνος Γκίκα | Φρέσκα προϊόντα αρτοποιίας καθημερινά στην Αθήνα',
  },
}

function HomePage({ onContactClick, t }) {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
          <p className="lead">{t.home.lead}</p>
          <button className="primary-btn" onClick={onContactClick} type="button">
            {t.home.visitUs}
          </button>
        </div>
        <div className="hero-panel">
          <h2>{t.home.highlightsTitle}</h2>
          <p>{t.home.highlightsLead}</p>
          <ul>
            {t.home.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>{t.home.specialtiesTitle}</h2>
        <div className="card-grid">
          {t.home.specials.map((item) => (
            <article className="card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section info">
        <div>
          <h2>{t.home.whyTitle}</h2>
          <p>{t.home.whyText}</p>
        </div>
        <div className="hours-card">
          <h3>{t.home.hoursTitle}</h3>
          <ul>
            {t.home.hours.map((slot) => (
              <li key={slot.day}>
                <span>{slot.day}</span>
                <strong>{slot.time}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

function ContactPage({ t }) {
  return (
    <section className="section contact-page">
      <div className="contact-details">
        <h1>{t.contact.title}</h1>
        <p>{t.contact.intro}</p>

        <div className="contact-list">
          <p>
            <strong>{t.contact.addressLabel}:</strong> {t.contact.address}
          </p>
          <p>
            <strong>{t.contact.phoneLabel}:</strong>{' '}
            <a href="tel:+302294067557">22940-67557</a>
          </p>
          <p>
            <strong>{t.contact.emailLabel}:</strong>{' '}
            <a href="mailto:fournosgkika@gmail.com">fournosgkika@gmail.com</a>
          </p>
          <p>
            <strong>{t.contact.instagramLabel}:</strong>{' '}
            <a
              href="https://www.instagram.com/gkikas_bakehouse/"
              rel="noreferrer"
              target="_blank"
            >
              @gkikas_bakehouse
            </a>
          </p>
          <p>
            <strong>{t.contact.awardLabel}:</strong>{' '}
            <a
              href="https://www.aetoitonartopoiion.eu/profile-3849-fournos-gkika"
              rel="noreferrer"
              target="_blank"
            >
              aetoitonartopoiion.eu
            </a>
          </p>
          <p>
            <strong>{t.contact.ordersLabel}:</strong> {t.contact.ordersText}
          </p>
        </div>

        <a
          className="primary-btn inline"
          href="https://maps.google.com/?q=Dimokratias+41+Marathonas+19007"
          rel="noreferrer"
          target="_blank"
        >
          {t.contact.openMap}
        </a>
      </div>

      <div className="map-wrap">
        <iframe
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Dimokratias%2041%20Marathonas%2019007&t=&z=16&ie=UTF8&iwloc=&output=embed"
          title={t.contact.mapTitle}
        />
      </div>
    </section>
  )
}

function App() {
  const [page, setPage] = useState('home')
  const [language, setLanguage] = useState('en')
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language === 'el' ? 'el' : 'en'
  }, [language])

  useEffect(() => {
    document.title = t.brandName
  }, [t.brandName])

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            FG
          </span>
          <div>
            <p className="brand-name">{t.brandName}</p>
          </div>
        </div>
        <div className="header-actions">
          <nav className="nav">
            <button
              className={page === 'home' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setPage('home')}
              type="button"
            >
              {t.navHome}
            </button>
            <button
              className={page === 'contact' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setPage('contact')}
              type="button"
            >
              {t.navContact}
            </button>
          </nav>
          <div className="lang-switch" aria-label="Language selector" role="group">
            <button
              className={language === 'en' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLanguage('en')}
              type="button"
            >
              EN
            </button>
            <button
              className={language === 'el' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLanguage('el')}
              type="button"
            >
              EL
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {page === 'home' ? (
          <HomePage onContactClick={() => setPage('contact')} t={t} />
        ) : (
          <ContactPage t={t} />
        )}
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
