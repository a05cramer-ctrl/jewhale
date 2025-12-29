import { useState } from 'react'
import './App.css'
import whaleImage from './fb72db54-468c-4e3f-a88f-564908b877f8.png'

function App() {
  const [copied, setCopied] = useState(false)
  const contractAddress = '3U6Qys1xzoDnX5Ab7R3Annm9pH7E65VsDmUFbZ8fpump'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="app">
      {/* Background Stars */}
      <div className="background-stars">
        <div className="star star-1">✡</div>
        <div className="star star-2">✡</div>
        <div className="star star-3">✡</div>
        <div className="star star-4">✡</div>
        <div className="star star-5">✡</div>
        <div className="star star-6">✡</div>
        <div className="star star-7">✡</div>
        <div className="star star-8">✡</div>
        <div className="star star-9">✡</div>
        <div className="star star-10">✡</div>
      </div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">JEWhale</h1>
            <p className="hero-subtitle">Wisdom. Water. Wealth.</p>
            <div className="hero-cta">
              <button className="cta-button primary">Buy $JEWHALE</button>
              <button className="cta-button secondary">Read the Scrolls</button>
            </div>
          </div>
          <div className="hero-image-container">
            <img src={whaleImage} alt="JEWhale Mascot" className="hero-image" />
            <div className="floating-accent accent-1"></div>
            <div className="floating-accent accent-2"></div>
            <div className="floating-accent accent-3"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <p className="about-text">
              JEWhale is a memecoin inspired by patience, tradition, and very large holders.
            </p>
            <p className="about-text">
              We believe in long-term thinking, calm conviction, and letting the whale do what whales do.
            </p>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="tokenomics">
        <div className="container">
          <h2 className="section-title">JEWhale Economics</h2>
          <div className="tokenomics-grid">
            <div className="tokenomics-card">
              <h3>Total Supply</h3>
              <p className="tokenomics-value">1,000,000,000</p>
              <p className="tokenomics-label">$JEWHALE</p>
            </div>
            <div className="tokenomics-card">
              <h3>Tax</h3>
              <p className="tokenomics-value">0%</p>
            </div>
            <div className="tokenomics-card">
              <h3>Liquidity</h3>
              <p className="tokenomics-value">Locked</p>
            </div>
            <div className="tokenomics-card">
              <h3>Ownership</h3>
              <p className="tokenomics-value">Renounced</p>
            </div>
          </div>
          <p className="tokenomics-caption">Reviewed. Counted twice.</p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap">
        <div className="container">
          <h2 className="section-title">The Journey</h2>
          <div className="roadmap-phases">
            <div className="roadmap-phase">
              <div className="phase-icon">1</div>
              <h3>Foundation</h3>
            </div>
            <div className="roadmap-phase">
              <div className="phase-icon">2</div>
              <h3>Community</h3>
            </div>
            <div className="roadmap-phase">
              <div className="phase-icon">3</div>
              <h3>Growth</h3>
            </div>
            <div className="roadmap-phase">
              <div className="phase-icon">4</div>
              <h3>Longevity</h3>
            </div>
            <div className="roadmap-phase">
              <div className="phase-icon">5</div>
              <h3>Whale Status</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-watermark"></div>
        <div className="footer-content">
          <div className="contract-address">
            <span className="ca-label">CA:</span>
            <code className="ca-address" onClick={copyToClipboard} title="Click to copy">
              {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
            </code>
            {copied && <span className="ca-copied">Copied!</span>}
          </div>
          <div className="social-icons">
            <a href="https://x.com/JEWhalee" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
