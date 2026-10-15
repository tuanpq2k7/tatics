import { useEffect, useMemo, useState } from 'react'
import Pitch from './components/Pitch'
import { getTeam, teams } from './data/teams'
import './App.css'

function StyleMeters({ styles }) {
  return (
    <section className="panel styles-panel">
      <div className="panel-header-row">
        <div>
          <p className="eyebrow section-index">04 <span>/</span> TACTICAL DNA</p>
          <h2>Team playstyle index</h2>
        </div>
        <p className="panel-lede">
          Core tactical habits measured by statistical and positional emphasis. Scores above 90 indicate fundamental non-negotiables.
        </p>
      </div>

      <div className="styles-grid">
        {styles.map((style, idx) => {
          const isHigh = style.score >= 90
          return (
            <div key={style.id} className={`style-card ${isHigh ? 'is-signature' : ''}`}>
              <div className="style-card-header">
                <div className="style-meta">
                  <span className="style-rank">#{String(idx + 1).padStart(2, '0')}</span>
                  <span className="style-name">{style.label}</span>
                </div>
                <div className="style-score-badge">
                  <span className="style-score-val">{style.score}</span>
                  <span className="style-score-unit">/100</span>
                </div>
              </div>

              <div className="meter-track" role="progressbar" aria-valuenow={style.score} aria-valuemin="0" aria-valuemax="100">
                <div
                  className="meter-bar"
                  style={{ width: `${style.score}%` }}
                />
              </div>

              <p className="style-note">{style.note}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function App() {
  const [teamId, setTeamId] = useState('barcelona-2010-11')
  const team = getTeam(teamId)
  const [phase, setPhase] = useState('inPossession')
  const [selectedId, setSelectedId] = useState(team.featuredPlayerId)
  const [showZones, setShowZones] = useState(true)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  // Auto-play phase transition loop
  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setPhase((prev) => (prev === 'inPossession' ? 'outOfPossession' : 'inPossession'))
    }, 4200)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  function chooseTeam(id) {
    const next = getTeam(id)
    setTeamId(id)
    setPhase('inPossession')
    setSelectedId(next.featuredPlayerId)
  }

  const selected = useMemo(
    () => team.players.find((player) => player.id === selectedId) ?? team.players[0],
    [team, selectedId],
  )
  const phaseData = team.phases[phase]
  const playerPhase = selected[phase]

  return (
    <div
      className="app"
      style={{
        '--accent': team.accent,
        '--kit': team.kit,
      }}
    >
      {/* Background ambient lighting keyed to team colors */}
      <div className="ambient-glow-primary" aria-hidden="true" />
      <div className="ambient-glow-secondary" aria-hidden="true" />
      <div className="tactical-grid-bg" aria-hidden="true" />

      {/* Top Header / Branding */}
      <header className="top">
        <div className="topbar">
          <div className="brand-group">
            <a className="brand" href="#top" aria-label="Touchline Tactical Index home">
              <span className="brand-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </span>
              <div className="brand-text">
                <span className="brand-title">TOUCHLINE</span>
                <span className="brand-subtitle">PRO TACTICAL DOSSIER // DECONSTRUCTED</span>
              </div>
            </a>
          </div>

          {/* Club Switcher Pills */}
          <div className="team-switch" role="tablist" aria-label="Select tactical profile">
            {teams.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === team.id}
                className={`team-btn ${item.id === team.id ? 'is-active' : ''}`}
                onClick={() => chooseTeam(item.id)}
              >
                <span
                  className="team-indicator-dot"
                  style={{ backgroundColor: item.accent }}
                  aria-hidden="true"
                />
                <span className="team-btn-name">{item.club}</span>
                <span className="team-btn-season">{item.season}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero" id="top">
          <div className="hero-copy">
            <div className="hero-eyebrow-row">
              <span className="status-pill">
                <span className="status-dot" /> VERIFIED ARCHIVE
              </span>
              <span className="eyebrow-sep">/</span>
              <span className="hero-era">{team.era.toUpperCase()}</span>
            </div>

            <h1 className="hero-title">
              {team.club} <span className="hero-season-tag">{team.season}</span>
            </h1>

            <div className="hero-meta-badges">
              <div className="meta-badge">
                <span className="meta-icon">👤</span>
                <span className="meta-label">MANAGER</span>
                <strong className="meta-value">{team.coach}</strong>
              </div>
              <div className="meta-badge">
                <span className="meta-icon">🏆</span>
                <span className="meta-label">HONOURS</span>
                <strong className="meta-value">{team.competitions}</strong>
              </div>
              <div className="meta-badge highlight">
                <span className="meta-icon">⚔</span>
                <span className="meta-label">SYSTEM</span>
                <strong className="meta-value">{team.formations.inPossession}</strong>
              </div>
            </div>

            <p className="headline">{team.headline}</p>
          </div>

          <div className="hero-stamp" aria-label="Tactical profile metadata">
            <div className="stamp-inner">
              <div className="stamp-header">
                <span className="stamp-badge">PRO DOSSIER</span>
                <span className="stamp-code">#TAC-{team.id === 'barcelona-2010-11' ? '010' : '019'}</span>
              </div>
              <div className="stamp-num-row">
                <strong className="stamp-big">{team.id === 'barcelona-2010-11' ? '01' : '02'}</strong>
                <span className="stamp-slash">/</span>
                <span className="stamp-total">02</span>
              </div>
              <div className="stamp-rule-bar" />
              <div className="stamp-footer">
                <span>SYSTEM ARCHITECTURE</span>
                <span className="stamp-accent">UEFA PRO ANALYSIS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Tactical Layout */}
      <main className="layout">
        {/* Left Column: Tactical Board */}
        <section className="board">
          <div className="board-head">
            <div className="board-title-group">
              <p className="eyebrow section-index">01 <span>/</span> TACTICAL SHAPE & DYNAMICS</p>
              <div className="shape-display">
                <h2>{phaseData.shape}</h2>
                <span className={`phase-tag ${phase}`}>
                  {phase === 'inPossession' ? 'ATTACKING PHASING' : 'DEFENSIVE BLOCK'}
                </span>
              </div>
            </div>

            {/* Tactical Controls Toolbar */}
            <div className="tactical-toolbar">
              {/* Possession Phase Switcher */}
              <div className="phase-toggle" role="tablist" aria-label="Tactical Phase">
                <button
                  type="button"
                  role="tab"
                  aria-selected={phase === 'inPossession'}
                  className={`toggle-btn ${phase === 'inPossession' ? 'is-active' : ''}`}
                  onClick={() => setPhase('inPossession')}
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                  </svg>
                  <span>Have ball</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={phase === 'outOfPossession'}
                  className={`toggle-btn ${phase === 'outOfPossession' ? 'is-active' : ''}`}
                  onClick={() => setPhase('outOfPossession')}
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Lose ball</span>
                </button>
              </div>

              {/* Utility Buttons: 5 Corridors & Auto-play */}
              <div className="utility-buttons">
                <button
                  type="button"
                  className={`util-btn ${showZones ? 'is-active' : ''}`}
                  onClick={() => setShowZones((v) => !v)}
                  title="Toggle 5 Positional Channels (Juego de Posición)"
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                    <line x1="15" y1="3" x2="15" y2="21" />
                  </svg>
                  <span>5 Corridors</span>
                </button>

                <button
                  type="button"
                  className={`util-btn ${isAutoPlay ? 'is-active is-playing' : ''}`}
                  onClick={() => setIsAutoPlay((v) => !v)}
                  title={isAutoPlay ? 'Pause auto-transition' : 'Auto transition between attacking & defending'}
                >
                  <span className="playback-icon">{isAutoPlay ? '❚❚' : '▶'}</span>
                  <span>{isAutoPlay ? 'Cycling' : 'Auto'}</span>
                </button>
              </div>
            </div>
          </div>

          <p className="idea">{phaseData.idea}</p>

          {/* Tactical Pitch Frame */}
          <div className="pitch-frame">
            <Pitch
              players={team.players}
              phase={phase}
              selectedId={selected.id}
              onSelect={setSelectedId}
              showZones={showZones}
            />
          </div>

          {/* Quick Lineup Strip (11 Starters) */}
          <div className="lineup-bar">
            <span className="lineup-label">STARTING XI</span>
            <div className="lineup-scroll">
              {team.players.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`lineup-chip ${p.id === selected.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedId(p.id)}
                >
                  <span className="chip-num">{p.number}</span>
                  <span className="chip-name">{p.shortName}</span>
                  {p.id === team.featuredPlayerId && <span className="chip-star" title="Tactical Anchor">★</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Board Footer Hints */}
          <div className="board-foot">
            <div className="hint-group">
              <span className="hint-icon">💡</span>
              <p className="hint">
                Click any player on pitch or lineup bar to inspect duties. Dashed lines trace active passing channels.
              </p>
            </div>
            <span className="live-indicator">
              <i /> INTERACTIVE VECTOR HUD
            </span>
          </div>
        </section>

        {/* Right Column: Player Dossier & Match Model */}
        <aside className="side">
          {/* Section 02: Player Dossier */}
          <section className="panel player-panel">
            <div className="panel-badge-row">
              <p className="eyebrow section-index">02 <span>/</span> PLAYER DOSSIER</p>
              {selected.id === team.featuredPlayerId && (
                <span className="star-badge">★ TACTICAL FULCRUM</span>
              )}
            </div>

            <div className="player-hero-card">
              <div className="num-badge">
                <span className="num-prefix">#</span>
                <span className="num-digits">{selected.number}</span>
              </div>
              <div className="player-identity">
                <h2 className="player-fullname">{selected.name}</h2>
                <div className="role-pill">
                  <span className="role-dot" />
                  <span className="role-text">{selected.role}</span>
                </div>
              </div>
            </div>

            <blockquote className="playstyle-quote">
              <span className="quote-mark">“</span>
              <p>{selected.playstyle}</p>
            </blockquote>

            {/* Tactical Connections / Passing Network */}
            <div className="tactical-connections">
              <div className="connections-header">
                <span className="connections-title">PRIMARY PASSING NETWORK</span>
                <span className="connections-count">{selected.links.length} TACTICAL LINKS</span>
              </div>
              <div className="connections-chips">
                {selected.links.map((linkId) => {
                  const target = team.players.find((p) => p.id === linkId)
                  if (!target) return null
                  return (
                    <button
                      key={linkId}
                      type="button"
                      className="connection-chip"
                      onClick={() => setSelectedId(target.id)}
                      title={`Inspect ${target.name}`}
                    >
                      <span className="conn-num">{target.number}</span>
                      <span className="conn-name">{target.shortName}</span>
                      <span className="conn-arrow">↗</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Phase Duties & Directives */}
            <div className="phase-directives-box">
              <div className="directives-header">
                <span className="phase-icon">{phase === 'inPossession' ? '⚡' : '🛡'}</span>
                <h3>{phase === 'inPossession' ? 'When in Possession' : 'When out of Possession'}</h3>
              </div>
              <p className="duty-lead">{playerPhase.duty}</p>
              <ul className="tasks-list">
                {playerPhase.tasks.map((task, idx) => (
                  <li key={idx}>
                    <span className="task-bullet">›</span>
                    <span className="task-text">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 03: Match Model Principles */}
          <section className="panel principles-panel">
            <p className="eyebrow section-index">03 <span>/</span> MATCH MODEL</p>
            <h2>{phaseData.label} Principles</h2>
            <ol className="principles-list">
              {phaseData.principles.map((item, idx) => (
                <li key={item.title} className="principle-card">
                  <div className="principle-num">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="principle-content">
                    <strong className="principle-title">{item.title}</strong>
                    <p className="principle-text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </main>

      {/* Section 04: Style Meters */}
      <StyleMeters styles={team.styles} />

      {/* Section 05: Scouting Notes & Masterclass Summary */}
      <section className="panel about-panel">
        <div className="about-header-row">
          <div>
            <p className="eyebrow section-index">05 <span>/</span> SCOUTING DOSSIER</p>
            <h2>Tactical Masterclass Analysis</h2>
          </div>
          <div className="about-crest-stamp">
            <span className="crest-initials">TL</span>
            <span className="crest-sub">INDEX</span>
          </div>
        </div>

        <div className="about-body">
          <div className="about-highlight-card">
            <h4>WHY STUDY THIS SYSTEM</h4>
            <p>{team.whyStudy}</p>
          </div>

          <div className="about-editorial-grid">
            <div className="editorial-col">
              <h4>TACTICAL SYNTHESIS</h4>
              <p>{team.summary}</p>
            </div>
            <div className="editorial-col">
              <h4>SQUAD ARCHITECTURE & TEACHING SHAPE</h4>
              <p>{team.xiNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-brand">TOUCHLINE TACTICAL INDEX</span>
            <span className="footer-sep">·</span>
            <span>HIGH PERFORMANCE COACHING SUITE</span>
          </div>
          <div className="footer-right">
            <span>CURATED FOR FOOTBALL ANALYSTS & TACTICIANS</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
