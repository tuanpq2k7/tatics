const PITCH = { left: 6, top: 6, width: 88, height: 138 }

export function toPitch(x, y) {
  return {
    cx: PITCH.left + (x / 100) * PITCH.width,
    cy: PITCH.top + PITCH.height - (y / 100) * PITCH.height,
  }
}

export { PITCH }
