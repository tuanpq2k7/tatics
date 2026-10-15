import { PITCH, toPitch } from '../pitch'

function PitchMarkings() {
  const { left, top, width, height } = PITCH
  const right = left + width
  const bottom = top + height
  const midY = top + height / 2
  const cx = left + width / 2
  const penaltyH = 22
  const sixH = 8
  const penaltyW = 44
  const sixW = 24

  return (
    <g className="markings">
      {/* Outer boundary */}
      <rect x={left} y={top} width={width} height={height} rx="1.5" />

      {/* Halfway line */}
      <line x1={left} y1={midY} x2={right} y2={midY} />

      {/* Center circle & dot */}
      <circle cx={cx} cy={midY} r="12.5" />
      <circle cx={cx} cy={midY} r="1" className="spot" />

      {/* Opponent Penalty & 6-Yard Box */}
      <rect
        x={cx - penaltyW / 2}
        y={top}
        width={penaltyW}
        height={penaltyH}
      />
      <rect x={cx - sixW / 2} y={top} width={sixW} height={sixH} />
      <circle cx={cx} cy={top + 14.5} r="0.8" className="spot" />
      <path d={`M ${cx - 12.5} ${top + penaltyH} A 12.5 12.5 0 0 0 ${cx + 12.5} ${top + penaltyH}`} />

      {/* Own Penalty & 6-Yard Box */}
      <rect
        x={cx - penaltyW / 2}
        y={bottom - penaltyH}
        width={penaltyW}
        height={penaltyH}
      />
      <rect x={cx - sixW / 2} y={bottom - sixH} width={sixW} height={sixH} />
      <circle cx={cx} cy={bottom - 14.5} r="0.8" className="spot" />
      <path d={`M ${cx - 12.5} ${bottom - penaltyH} A 12.5 12.5 0 0 1 ${cx + 12.5} ${bottom - penaltyH}`} />

      {/* Corner arcs */}
      <path d={`M ${left} ${top + 3} A 3 3 0 0 0 ${left + 3} ${top}`} />
      <path d={`M ${right - 3} ${top} A 3 3 0 0 0 ${right} ${top + 3}`} />
      <path d={`M ${left} ${bottom - 3} A 3 3 0 0 1 ${left + 3} ${bottom}`} />
      <path d={`M ${right - 3} ${bottom} A 3 3 0 0 1 ${right} ${bottom - 3}`} />

      {/* Goals with net detail */}
      <rect className="goal-frame" x={cx - 10} y={top - 3} width={20} height={3} />
      <rect className="goal-frame" x={cx - 10} y={bottom} width={20} height={3} />
    </g>
  )
}

function TacticalChannels() {
  const { left, top, width, height } = PITCH
  const laneW = width / 5
  const thirdH = height / 3

  const channels = [
    { label: 'LEFT WING', x: left + laneW * 0.5 },
    { label: 'L-HALF SPACE', x: left + laneW * 1.5 },
    { label: 'CENTRE', x: left + laneW * 2.5 },
    { label: 'R-HALF SPACE', x: left + laneW * 3.5 },
    { label: 'RIGHT WING', x: left + laneW * 4.5 },
  ]

  return (
    <g className="tactical-channels" opacity="0.9">
      {/* 5 Vertical Lane Dividers (Juego de Posición) */}
      {[1, 2, 3, 4].map((i) => (
        <line
          key={`v-${i}`}
          x1={left + laneW * i}
          y1={top}
          x2={left + laneW * i}
          y2={top + height}
          className="channel-divider"
        />
      ))}

      {/* 3 Horizontal Thirds Dividers */}
      {[1, 2].map((i) => (
        <line
          key={`h-${i}`}
          x1={left}
          y1={top + thirdH * i}
          x2={left + width}
          y2={top + thirdH * i}
          className="third-divider"
        />
      ))}

      {/* Lane Labels at the top */}
      {channels.map((ch, idx) => (
        <text
          key={idx}
          x={ch.x}
          y={top + 4.5}
          textAnchor="middle"
          className="channel-label"
        >
          {ch.label}
        </text>
      ))}

      {/* Thirds labels along the right edge */}
      <text x={left + 2} y={top + thirdH * 0.5} className="third-label">ATTACKING THIRD</text>
      <text x={left + 2} y={top + thirdH * 1.5} className="third-label">MIDDLE THIRD</text>
      <text x={left + 2} y={top + thirdH * 2.5} className="third-label">DEFENSIVE THIRD</text>
    </g>
  )
}

export default function Pitch({ players, phase, selectedId, onSelect, showZones = false }) {
  const selected = players.find((player) => player.id === selectedId)
  const selectedPoint = selected ? toPitch(selected.positions[phase].x, selected.positions[phase].y) : null

  return (
    <div className="pitch-canvas-wrapper">
      <svg
        className="pitch"
        viewBox="0 0 100 150"
        role="img"
        aria-label="Tactical football pitch showing team formation and player positions"
      >
        <defs>
          {/* Pitch grass subtle gradient */}
          <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#144b2a" />
            <stop offset="50%" stopColor="#1c5d36" />
            <stop offset="100%" stopColor="#134727" />
          </linearGradient>

          {/* Goal Net Pattern */}
          <pattern id="goalNet" width="2" height="2" patternUnits="userSpaceOnUse">
            <path d="M 0 2 L 2 0 M 0 0 L 2 2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.2" />
          </pattern>

          {/* Active Player Glow Filter */}
          <filter id="activeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="2.2" floodColor="var(--accent)" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Pitch Turf Base */}
        <rect x="0" y="0" width="100" height="150" rx="4" fill="url(#grassGrad)" />

        {/* Mow Stripes (alternating grass texture) */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((stripe) => (
          <rect
            key={stripe}
            x={PITCH.left}
            y={PITCH.top + (stripe * PITCH.height) / 8}
            width={PITCH.width}
            height={PITCH.height / 8}
            fill={stripe % 2 === 0 ? 'rgba(255,255,255,0.035)' : 'transparent'}
          />
        ))}

        {/* Optional Juego de Posición 5-Channel Overlay */}
        {showZones && <TacticalChannels />}

        {/* Pitch Lines & Markings */}
        <PitchMarkings />

        {/* Goal nets */}
        <rect
          x={PITCH.left + PITCH.width / 2 - 10}
          y={PITCH.top - 3}
          width={20}
          height={3}
          fill="url(#goalNet)"
        />
        <rect
          x={PITCH.left + PITCH.width / 2 - 10}
          y={PITCH.top + PITCH.height}
          width={20}
          height={3}
          fill="url(#goalNet)"
        />

        {/* Orientation Indicators */}
        <g className="pitch-orientation">
          <text className="end-label opponent" x="50" y="4.2" textAnchor="middle">
            ▲ ATTACK DIRECTION · OPPONENT GOAL ▲
          </text>
          <text className="end-label own" x="50" y="148.8" textAnchor="middle">
            ▼ DEFENSIVE BASE · OWN GOAL ▼
          </text>
        </g>

        {/* Tactical Passing Network Links */}
        {selected &&
          selected.links.map((linkId) => {
            const target = players.find((player) => player.id === linkId)
            if (!target) return null
            const from = selectedPoint
            const to = toPitch(target.positions[phase].x, target.positions[phase].y)
            return (
              <g key={linkId} className="tactical-link-group">
                {/* Glow underlay */}
                <line
                  className="link-glow"
                  x1={from.cx}
                  y1={from.cy}
                  x2={to.cx}
                  y2={to.cy}
                />
                {/* Main animated link */}
                <line
                  className="link-core"
                  x1={from.cx}
                  y1={from.cy}
                  x2={to.cx}
                  y2={to.cy}
                />
                {/* Pulse node along vector */}
                <circle
                  className="link-pulse-node"
                  cx={(from.cx + to.cx) / 2}
                  cy={(from.cy + to.cy) / 2}
                  r="0.8"
                />
              </g>
            )
          })}

        {/* Player Markers */}
        {players.map((player) => {
          const { cx, cy } = toPitch(player.positions[phase].x, player.positions[phase].y)
          const isSelected = player.id === selectedId
          const badgeW = Math.max(14, player.shortName.length * 1.8 + 4.5)
          const badgeH = 4.2

          return (
            <g
              key={player.id}
              className={`marker ${isSelected ? 'is-selected' : ''}`}
              transform={`translate(${cx} ${cy})`}
              style={{
                transform: `translate(${cx}px, ${cy}px)`,
                transition: 'transform 0.65s cubic-bezier(0.2, 0.95, 0.25, 1)',
              }}
              onClick={() => onSelect(player.id)}
              role="button"
              tabIndex="0"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  onSelect(player.id)
                }
              }}
              aria-label={`${player.number} ${player.name}, ${player.role}`}
            >
              {/* Radar pulse wave for selected player */}
              {isSelected && <circle className="marker-radar-wave" r="8.5" />}

              {/* Marker Rings */}
              <circle
                className="marker-ring"
                r={isSelected ? 6.5 : 5.4}
                filter={isSelected ? 'url(#activeGlow)' : undefined}
              />
              <circle className="marker-disc" r="4.3" />

              {/* Jersey Number */}
              <text className="marker-number" textAnchor="middle" dy="1.45">
                {player.number}
              </text>

              {/* Player Name Badge Pill */}
              <g className="marker-badge-container" transform="translate(0, 7.8)">
                <rect
                  className="marker-badge-bg"
                  x={-badgeW / 2}
                  y={-badgeH / 2}
                  width={badgeW}
                  height={badgeH}
                  rx={badgeH / 2}
                />
                <text className="marker-name" textAnchor="middle" dy="0.95">
                  {player.shortName}
                </text>
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
