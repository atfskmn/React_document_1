import { useState } from 'react'
import type { MouseEvent } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [started, setStarted] = useState(false)

  const handleStart = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setStarted(true)
    const el = document.getElementById('get-started')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-root">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/">
            <img src={viteLogo} alt="logo" className="brand-logo" />
            <span className="brand-text">My Company</span>
          </a>
          <nav className="nav">
            <a href="#features">Özellikler</a>
            <a href="#pricing">Fiyatlandırma</a>
            <a href="#contact">İletişim</a>
            <a className="btn btn-primary" href="#get-started" onClick={handleStart} aria-pressed={started}> {started ? 'Başladı' : 'Başla'}</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-content">
              <h1>Modern, temiz ve duyarlı web tasarımı</h1>
              <p className="lead">Kitlelerinizi etkileyen, hızlı ve erişilebilir arayüzler oluşturun. Bu şablon küçük projeler ve prototipler için uygundur.</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#get-started" onClick={handleStart} aria-pressed={started}>{started ? 'Başladı' : 'Ücretsiz Başla'}</a>
                <a className="btn btn-ghost" href="#features">Daha fazla bilgi</a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="phone-mock">
                <div className="phone-screen">
                  <div className="phone-status-bar">
                    <span>9:41</span>
                    <div className="status-icons">
                      <span>📶</span>
                      <span>📡</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  <div className="phone-content">
                    <div className="app-icon-grid">
                      <div className="app-icon" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
                      <div className="app-icon" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
                      <div className="app-icon" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
                      <div className="app-icon" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}></div>
                      <div className="app-icon" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}></div>
                      <div className="app-icon" style={{background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'}}></div>
                      <div className="app-icon" style={{background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'}}></div>
                      <div className="app-icon" style={{background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'}}></div>
                    </div>
                    <div className="phone-card">
                      <div className="card-shimmer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features container">
          <h2>Özellikler</h2>
          <p className="section-sub">Kullanıcı dostu, performans odaklı ve kolay özelleştirilebilir.</p>
          <div className="features-grid">
            <article className="feature">
              <h3>Hızlı Başlangıç</h3>
              <p>Vite ile anında HMR ve hızlı geliştirme deneyimi.</p>
            </article>
            <article className="feature">
              <h3>Duyarlı Tasarım</h3>
              <p>Tüm cihazlarda mükemmel görünüm için mobil öncelikli yaklaşımlar.</p>
            </article>
            <article className="feature">
              <h3>Erişilebilirlik</h3>
              <p>Semantik HTML ve klavye dostu kontroller ile geniş erişim.</p>
            </article>
            <article className="feature">
              <h3>Kolay Özelleştirme</h3>
              <p>Renkler, tipografi ve düzen kolayca değiştirilebilir.</p>
            </article>
          </div>
        </section>

        <section id="get-started" className="cta container">
          <div className="cta-inner">
            <h2>Projeye hazır mısınız?</h2>
            <p>Başlamak için repoyu klonlayın, bağımlılıkları yükleyin ve geliştirme sunucusunu başlatın.</p>
            <pre className="cmd">git clone &lt;repo&gt; && npm install && npm run dev</pre>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} My Company — Tüm hakları saklıdır.</div>
          <nav className="footer-nav">
            <a href="#">Gizlilik</a>
            <a href="#">Kullanım Koşulları</a>
            <a href="#contact">İletişim</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
