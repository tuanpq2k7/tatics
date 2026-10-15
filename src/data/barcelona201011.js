export const barcelona201011 = {
  id: 'barcelona-2010-11',
  club: 'FC Barcelona',
  season: '2010–11',
  era: 'Guardiola positional play',
  coach: 'Pep Guardiola',
  competitions: 'La Liga, Champions League, Copa del Rey',
  featuredPlayerId: 'messi',
  accent: '#a50044',
  kit: '#004d98',
  headline: 'Juego de posición: control the ball, occupy the lanes, and hunt it back immediately.',
  whyStudy:
    'The clearest modern lesson in positional play: same 4-3-3 on the teamsheet, a 3-4-3 / 2-3-5 on the pitch, and a false 9 who drops to create a midfield extra man.',
  summary:
    'Barcelona’s 2010–11 side treated the pitch as a set of positions, not just a 4-3-3 lineup. With the ball they stretched into a 3-4-3 / 2-3-5, using a false 9, interiors, and an overlapping right-back. Without it they pressed as a high 4-3-3, then dropped into a compact mid-block if the first wave failed.',
  xiNote:
    'Typical XI: Valdés; Alves, Piqué, Puyol, Abidal; Busquets, Xavi, Iniesta; Pedro, Messi, Villa. Positions are a teaching shape, not GPS traces from one match.',
  formations: {
    inPossession: '3-4-3 / 2-3-5',
    outOfPossession: '4-3-3',
  },
  styles: [
    {
      id: 'possession',
      label: 'Possession',
      score: 98,
      note: 'Keep the ball to control space, tempo, and the opponent’s shape.',
    },
    {
      id: 'positional',
      label: 'Positional play',
      score: 96,
      note: 'Occupy five vertical lanes and create triangles around the ball.',
    },
    {
      id: 'short',
      label: 'Short passing / tiki-taka',
      score: 95,
      note: 'One-touch combinations, third-man runs, and constant support.',
    },
    {
      id: 'press',
      label: 'High press',
      score: 90,
      note: 'Start the press from the front and squeeze the pitch.',
    },
    {
      id: 'counterpress',
      label: 'Counter-press',
      score: 88,
      note: 'Win it back in the first 5–6 seconds after a turnover.',
    },
    {
      id: 'width',
      label: 'Play through the wings',
      score: 72,
      note: 'Wingers hold the touchline so interiors can combine inside.',
    },
    {
      id: 'central',
      label: 'Overload the centre',
      score: 92,
      note: 'False 9 + Xavi + Iniesta + Busquets flood the middle.',
    },
    {
      id: 'counter',
      label: 'Direct counter-attacks',
      score: 28,
      note: 'They can break with Messi or Villa, but it is not the main plan.',
    },
  ],
  phases: {
    inPossession: {
      label: 'In possession',
      shape: '3-4-3 becoming 2-3-5',
      idea: 'Build from the back, occupy every lane, and attack with patience until a free man appears.',
      principles: [
        {
          title: 'Rest defence becomes a back three',
          text: 'Abidal tucks in with Piqué and Puyol. Alves is free to attack as a right winger. Busquets sits just ahead of the centre-backs as the first passer.',
        },
        {
          title: 'Five lanes',
          text: 'Pedro and Villa hold the wide lanes. Alves provides extra width on the right. Xavi and Iniesta occupy the half-spaces. Messi drops into the centre as a false 9.',
        },
        {
          title: 'Third man, not just triangles',
          text: 'Two players combine to free a third runner — often Messi receiving between the lines, or Villa arriving in the box from the left.',
        },
        {
          title: 'Draw the press, then play through it',
          text: 'They invite pressure on Valdés, Piqué, or Busquets, then skip a line with a short pass into Xavi, Iniesta, or Messi.',
        },
      ],
    },
    outOfPossession: {
      label: 'Out of possession',
      shape: 'High 4-3-3, then a compact 4-1-4-1',
      idea: 'Press high as a unit. If the opponent escapes, shrink the distances and protect the centre.',
      principles: [
        {
          title: 'Immediate counter-press',
          text: 'The nearest two or three players jump to the ball. Everyone else steps up to cut the next pass. The aim is to recover before the opponent can turn.',
        },
        {
          title: 'Messi screens the pivot',
          text: 'The false 9 does not chase blindly. He curves his press to block the holding midfielder while Villa and Pedro hunt the centre-backs.',
        },
        {
          title: 'Full-backs step, line stays high',
          text: 'Alves and Abidal squeeze onto the wingers. Piqué and Puyol hold a high line and play offside. Valdés sweeps behind.',
        },
        {
          title: 'If the press is beaten',
          text: 'They drop 10–15 metres, Busquets protects the box, and the wingers tuck into a 4-5-1 mid-block rather than sprinting into a long-ball counter as a first option.',
        },
      ],
    },
  },
  players: [
    {
      id: 'valdes',
      number: 1,
      name: 'Víctor Valdés',
      shortName: 'Valdés',
      role: 'Sweeper-keeper',
      playstyle: 'Calm distributor who starts attacks and covers the space behind a high line.',
      positions: { inPossession: { x: 50, y: 8 }, outOfPossession: { x: 50, y: 10 } },
      links: ['pique', 'puyol', 'busquets'],
      inPossession: {
        duty: 'Be the extra passer in build-up. Receive from centre-backs, split the press, or go long only if the press is set.',
        tasks: [
          'Open body and play to Piqué, Puyol, or Busquets',
          'Step off the line to receive under pressure',
          'Switch play if one full-back is free',
        ],
      },
      outOfPossession: {
        duty: 'Sweep behind the high defensive line and command crosses.',
        tasks: [
          'Read through balls over Piqué and Puyol',
          'Stay connected to the back four, not glued to the six-yard box',
          'Start the next attack quickly after a claim',
        ],
      },
    },
    {
      id: 'alves',
      number: 2,
      name: 'Dani Alves',
      shortName: 'Alves',
      role: 'Attacking right-back / extra winger',
      playstyle: 'High-energy overlapper who becomes a fourth attacker on the right.',
      positions: { inPossession: { x: 88, y: 58 }, outOfPossession: { x: 82, y: 30 } },
      links: ['pedro', 'xavi', 'pique', 'messi'],
      inPossession: {
        duty: 'Push onto the last line. Barcelona often attack 2-3-5 with Alves as the right-sided extra man.',
        tasks: [
          'Hold width when Pedro comes inside',
          'Combine with Xavi and Pedro in triangles',
          'Cut back or overlap — rarely sit as a flat back four',
        ],
      },
      outOfPossession: {
        duty: 'Sprint back into a 4-3-3, then press the opponent’s left winger.',
        tasks: [
          'Recover into the back four before the counter hits',
          'Jump onto the ball-side winger',
          'Tuck in if Abidal is isolated on the far side',
        ],
      },
    },
    {
      id: 'pique',
      number: 3,
      name: 'Gerard Piqué',
      shortName: 'Piqué',
      role: 'Ball-playing centre-back (right)',
      playstyle: 'Progressive passer who steps into midfield and defends a high line with timing.',
      positions: { inPossession: { x: 64, y: 24 }, outOfPossession: { x: 64, y: 24 } },
      links: ['valdes', 'alves', 'busquets', 'puyol'],
      inPossession: {
        duty: 'Break the first line of press with a carry or a pass into Xavi / Alves.',
        tasks: [
          'Split wide so Busquets can drop into the centre',
          'Find Messi or Xavi between the lines',
          'Cover the space Alves leaves on the right',
        ],
      },
      outOfPossession: {
        duty: 'Hold a high line, win first balls, and step into midfield if Busquets is drawn out.',
        tasks: [
          'Play the offside line with Puyol',
          'Compete in the air on long balls',
          'Delay runners until Alves recovers',
        ],
      },
    },
    {
      id: 'puyol',
      number: 5,
      name: 'Carles Puyol',
      shortName: 'Puyol',
      role: 'Stopper / leader (left centre-back)',
      playstyle: 'Aggressive, compact defender who organises the line and covers Iniesta’s and Abidal’s side.',
      positions: { inPossession: { x: 36, y: 24 }, outOfPossession: { x: 36, y: 24 } },
      links: ['valdes', 'abidal', 'busquets', 'pique'],
      inPossession: {
        duty: 'Be the secure option. Recycle the ball and cover Abidal if he steps up.',
        tasks: [
          'Offer Valdés a safe left-sided pass',
          'Keep the back three compact while Alves is high',
          'Rarely dribble into trouble — let Piqué progress',
        ],
      },
      outOfPossession: {
        duty: 'Win duels, cover Villa’s inside channel, and keep the line together.',
        tasks: [
          'Step into challenges on the edge of the box',
          'Talk the high line',
          'Protect the space if Abidal goes to press a winger',
        ],
      },
    },
    {
      id: 'abidal',
      number: 22,
      name: 'Éric Abidal',
      shortName: 'Abidal',
      role: 'Balancing left-back',
      playstyle: 'Conservative, intelligent full-back who lets Alves and Villa attack.',
      positions: { inPossession: { x: 14, y: 34 }, outOfPossession: { x: 18, y: 30 } },
      links: ['puyol', 'iniesta', 'villa', 'busquets'],
      inPossession: {
        duty: 'Tuck inside to make the back three. Width on the left comes from Villa, not from a constant overlap.',
        tasks: [
          'Stay connected to Puyol',
          'Step into midfield only when Iniesta has gone high',
          'Switch play to Alves if the right is empty',
        ],
      },
      outOfPossession: {
        duty: 'Defend the left channel 1v1 and keep the back four even.',
        tasks: [
          'Press the opponent’s right winger',
          'Do not get isolated behind Villa',
          'Show inside toward Busquets rather than onto the byline',
        ],
      },
    },
    {
      id: 'busquets',
      number: 16,
      name: 'Sergio Busquets',
      shortName: 'Busquets',
      role: 'Pivot / first passer',
      playstyle: 'Positional holding midfielder who orients the whole team with body shape and simple passes.',
      positions: { inPossession: { x: 50, y: 38 }, outOfPossession: { x: 50, y: 40 } },
      links: ['valdes', 'pique', 'puyol', 'xavi', 'iniesta'],
      inPossession: {
        duty: 'Drop between or just ahead of the centre-backs, receive, and play the first progressive pass.',
        tasks: [
          'Create a 3v2 in build-up',
          'Find Xavi or Iniesta facing forward',
          'Hold position so others can rotate',
        ],
      },
      outOfPossession: {
        duty: 'Shield the centre-backs, intercept, and be the rest-defence reference.',
        tasks: [
          'Cover the lane Messi leaves when he presses',
          'Foul or delay if the press is broken',
          'Win second balls from clearances',
        ],
      },
    },
    {
      id: 'xavi',
      number: 6,
      name: 'Xavi Hernández',
      shortName: 'Xavi',
      role: 'Right interior / metronome',
      playstyle: 'Tempo-setter who orients the team, plays one-touch, and occupies the right half-space.',
      positions: { inPossession: { x: 64, y: 52 }, outOfPossession: { x: 64, y: 50 } },
      links: ['busquets', 'alves', 'pedro', 'messi', 'iniesta'],
      inPossession: {
        duty: 'Receive between the opponent’s midfield and defence, then circulate until a gap opens.',
        tasks: [
          'Open passing lanes with body shape',
          'Link Alves and Pedro on the right',
          'Feed Messi dropping off the striker line',
        ],
      },
      outOfPossession: {
        duty: 'Jump onto the opponent’s left interior and keep the midfield three tight.',
        tasks: [
          'Press the ball-side pivot',
          'Stay connected to Busquets',
          'Do not get pulled to the touchline — that is Alves’s job',
        ],
      },
    },
    {
      id: 'iniesta',
      number: 8,
      name: 'Andrés Iniesta',
      shortName: 'Iniesta',
      role: 'Left interior / carrier',
      playstyle: 'Dribbler and combiner who breaks lines with carries more than Xavi does.',
      positions: { inPossession: { x: 36, y: 54 }, outOfPossession: { x: 36, y: 50 } },
      links: ['busquets', 'abidal', 'villa', 'messi', 'xavi'],
      inPossession: {
        duty: 'Receive in the left half-space, turn, and either combine with Villa or drive inside.',
        tasks: [
          'Attract two markers, then release Villa or Messi',
          'Carry through the first press',
          'Arrive late in the box on the left of Messi',
        ],
      },
      outOfPossession: {
        duty: 'Press the opponent’s right interior and help Abidal if the winger stays high.',
        tasks: [
          'Curved press to show the opponent inside',
          'Counter-press the moment the ball is lost near him',
          'Tuck into a midfield five if they drop into a block',
        ],
      },
    },
    {
      id: 'pedro',
      number: 17,
      name: 'Pedro',
      shortName: 'Pedro',
      role: 'Right winger / presser',
      playstyle: 'Unselfish wide forward who stretches the pitch, finishes cut-backs, and leads the press.',
      positions: { inPossession: { x: 80, y: 76 }, outOfPossession: { x: 76, y: 64 } },
      links: ['alves', 'xavi', 'messi'],
      inPossession: {
        duty: 'Hold the right touchline, then attack the box when Messi or Alves has the ball.',
        tasks: [
          'Stay high and wide to pin the left-back',
          'Make diagonal runs in behind',
          'Finish from cut-backs rather than dribble 1v1 all game',
        ],
      },
      outOfPossession: {
        duty: 'Press the left centre-back or left-back, then tuck in to protect Alves.',
        tasks: [
          'Curve the press toward the touchline trap',
          'Block the switch to the far side',
          'Drop next to Xavi if the team sits in a 4-5-1',
        ],
      },
    },
    {
      id: 'messi',
      number: 10,
      name: 'Lionel Messi',
      shortName: 'Messi',
      role: 'False 9',
      playstyle: 'Creator-finisher who drops into midfield, overloads the centre, and dribbles at the last line.',
      positions: { inPossession: { x: 52, y: 66 }, outOfPossession: { x: 50, y: 60 } },
      links: ['xavi', 'iniesta', 'pedro', 'villa', 'alves'],
      inPossession: {
        duty: 'Leave the striker spot so centre-backs have no one to mark. Receive between the lines, then finish or play the killer pass.',
        tasks: [
          'Drop into the hole to make a midfield +1',
          'Combine with Xavi and Iniesta in tight spaces',
          'Dribble at isolated centre-backs when they step out',
        ],
      },
      outOfPossession: {
        duty: 'Screen the opponent’s holding midfielder and start the press without chasing lost causes.',
        tasks: [
          'Cut the pass into the pivot',
          'Jump only when Villa or Pedro has already engaged',
          'Be the first counter-press body after a turnover in the final third',
        ],
      },
    },
    {
      id: 'villa',
      number: 7,
      name: 'David Villa',
      shortName: 'Villa',
      role: 'Left inside forward',
      playstyle: 'Goal-scoring winger who stays high, runs in behind, and finishes Messi’s chances.',
      positions: { inPossession: { x: 20, y: 78 }, outOfPossession: { x: 24, y: 64 } },
      links: ['iniesta', 'abidal', 'messi'],
      inPossession: {
        duty: 'Provide the in-behind threat that the false 9 does not. Stay high on the left so Messi can drop.',
        tasks: [
          'Pin the right-back, then run inside onto Messi’s pass',
          'Finish from the penalty spot and far post',
          'Give Abidal an outlet instead of demanding overlaps',
        ],
      },
      outOfPossession: {
        duty: 'Press the right centre-back and recover into a left-sided 4-5-1.',
        tasks: [
          'Show the opponent inside toward Iniesta',
          'Do not let the right-back receive free',
          'Sprint back if Alves is caught high on the other side',
        ],
      },
    },
  ],
}
