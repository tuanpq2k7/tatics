export const liverpool201920 = {
  id: 'liverpool-2019-20',
  club: 'Liverpool',
  season: '2019–20',
  era: 'Klopp gegenpress',
  coach: 'Jürgen Klopp',
  competitions: 'Premier League, Champions League, FIFA Club World Cup',
  featuredPlayerId: 'firmino',
  accent: '#c8102e',
  kit: '#1d3557',
  headline:
    'Win the ball high, attack in five seconds, and pin the opponent with both full-backs as wingers.',
  whyStudy:
    'This is the best next profile after Barcelona 2010–11. On paper both play 4-3-3 with a false 9. In reality Liverpool are the opposite engine: they hunt turnovers, go forward fast, and use Trent and Robertson as the width instead of waiting for positional superiority.',
  summary:
    'Klopp’s 2019–20 Liverpool treated the moment after winning the ball as the most important phase of the game. The front three pressed as a unit, the midfield jumped, and the full-backs already stood high so the first pass after a steal could become a 2-3-5 attack. If the press failed, Virgil van Dijk’s high line and Alisson’s sweeping still kept the team aggressive rather than dropping into a deep block.',
  xiNote:
    'Typical XI: Alisson; Alexander-Arnold, Gomez, van Dijk, Robertson; Henderson, Fabinho, Wijnaldum; Salah, Firmino, Mané. Gomez is used as the right centre-back of the title season; Matip often played the same job.',
  formations: {
    inPossession: '2-3-5 / 3-2-5',
    outOfPossession: '4-3-3 gegenpress',
  },
  styles: [
    {
      id: 'counterpress',
      label: 'Counter-press',
      score: 98,
      note: 'The attack starts by winning the ball back in the next pass, not by waiting in a block.',
    },
    {
      id: 'press',
      label: 'High press',
      score: 96,
      note: 'Front three plus the eights squeeze the opponent’s build-up from the first second.',
    },
    {
      id: 'vertical',
      label: 'Vertical attacks',
      score: 90,
      note: 'After a steal they look forward immediately — Salah, Mané, or a full-back in behind.',
    },
    {
      id: 'width',
      label: 'Play through the wings',
      score: 94,
      note: 'Trent and Robertson are the wingers. Salah and Mané attack the box from inside.',
    },
    {
      id: 'counter',
      label: 'Direct counter-attacks',
      score: 88,
      note: 'Turnovers in midfield become 5-second breaks into the channels.',
    },
    {
      id: 'possession',
      label: 'Possession',
      score: 62,
      note: 'They can keep the ball, but control comes from territory and pressure, not endless recycling.',
    },
    {
      id: 'positional',
      label: 'Positional play',
      score: 58,
      note: 'Lanes are occupied, but rotations are simpler than Guardiola’s interior play.',
    },
    {
      id: 'central',
      label: 'Overload the centre',
      score: 70,
      note: 'Firmino drops in, but the real overload is often the far-side full-back arriving late.',
    },
  ],
  phases: {
    inPossession: {
      label: 'In possession',
      shape: '2-3-5 with both full-backs high',
      idea: 'Pin the last line with five attackers. The centre-backs and Fabinho are the rest defence; everyone else is a threat to score.',
      principles: [
        {
          title: 'Full-backs are the width',
          text: 'Trent and Robertson push onto the last line. Salah and Mané come inside so the box is crowded and the cut-back is on.',
        },
        {
          title: 'False 9 as presser-creator',
          text: 'Firmino drops to link, not to recycle like Messi. His job is to bounce the ball into the runners and to be first to the second ball.',
        },
        {
          title: 'Trent as a right-sided playmaker',
          text: 'From deep or from the half-space he switches to Robertson, or plays the diagonal into Salah. The right-back is a primary passer, not only an overlap.',
        },
        {
          title: 'Rest defence of two plus one',
          text: 'Van Dijk, Gomez, and Fabinho stay connected. If one full-back is at the byline, an eight (often Henderson) tucks into a 3-2 rest defence.',
        },
      ],
    },
    outOfPossession: {
      label: 'Out of possession',
      shape: 'High 4-3-3, then a mid-block 4-3-3',
      idea: 'Hunt the ball as a pack. If the opponent plays through the first wave, the line stays high and Alisson covers the space behind.',
      principles: [
        {
          title: 'Gegenpress in a five-second window',
          text: 'The nearest three players attack the ball. The others step into passing lanes. They want the opponent facing their own goal.',
        },
        {
          title: 'Front three as the first wall',
          text: 'Salah and Mané curve onto the centre-backs. Firmino screens the pivot. The goalkeeper is pressed if he takes a touch too many.',
        },
        {
          title: 'Eights jump, six covers',
          text: 'Henderson and Wijnaldum leave their zone to press the next pass. Fabinho stays as the reference in front of the centre-backs.',
        },
        {
          title: 'Offside line, not a deep block',
          text: 'Van Dijk holds a very high line. Long balls are van Dijk’s and Alisson’s problem, not a reason to drop 30 metres.',
        },
      ],
    },
  },
  players: [
    {
      id: 'alisson',
      number: 1,
      name: 'Alisson Becker',
      shortName: 'Alisson',
      role: 'Sweeper-keeper',
      playstyle: 'Commanding shot-stopper who starts counters with his hands and covers the space behind a high line.',
      positions: { inPossession: { x: 50, y: 8 }, outOfPossession: { x: 50, y: 10 } },
      links: ['gomez', 'vandijk', 'fabinho'],
      inPossession: {
        duty: 'Play quickly into the full-backs or Fabinho. Avoid slow recycling that lets the opponent set a press.',
        tasks: [
          'Throw or roll into Trent and Robertson to skip a line',
          'Find Firmino if he drops into the first pocket',
          'Step out to receive only when the press is not set',
        ],
      },
      outOfPossession: {
        duty: 'Sweep behind van Dijk. Be a 1v1 goalkeeper on the break.',
        tasks: [
          'Read through balls over the high line',
          'Claim crosses so the counter can start immediately',
          'Organise the distance between the line and the six-yard box',
        ],
      },
    },
    {
      id: 'taa',
      number: 66,
      name: 'Trent Alexander-Arnold',
      shortName: 'Trent',
      role: 'Right-back / playmaker',
      playstyle: 'Range-passing full-back who creates like a No.10 from the right flank.',
      positions: { inPossession: { x: 88, y: 62 }, outOfPossession: { x: 82, y: 30 } },
      links: ['salah', 'henderson', 'gomez', 'firmino'],
      inPossession: {
        duty: 'Provide the width on the right and the switch of play. Often the most important passer after Fabinho.',
        tasks: [
          'Push high so Salah can attack the box',
          'Whip early crosses or cut-backs',
          'Switch to Robertson when the left side is 1v1',
        ],
      },
      outOfPossession: {
        duty: 'Recover into the back four, then press the left winger. Do not get caught watching the ball.',
        tasks: [
          'Sprint back before the counter hits Gomez’s channel',
          'Jump onto the opponent’s left winger',
          'Tuck in if Robertson is isolated on the far side',
        ],
      },
    },
    {
      id: 'gomez',
      number: 12,
      name: 'Joe Gomez',
      shortName: 'Gomez',
      role: 'Right centre-back',
      playstyle: 'Pacey, recovery defender who covers Trent’s space and defends 1v1 on the break.',
      positions: { inPossession: { x: 64, y: 22 }, outOfPossession: { x: 64, y: 24 } },
      links: ['alisson', 'taa', 'vandijk', 'fabinho'],
      inPossession: {
        duty: 'Hold the right side of the rest defence so Trent can stay high.',
        tasks: [
          'Split from van Dijk to open a lane for Fabinho',
          'Play simple into Henderson or Trent',
          'Step into midfield only if Fabinho is free to cover',
        ],
      },
      outOfPossession: {
        duty: 'Win races in behind and cover the channel Trent leaves.',
        tasks: [
          'Show runners onto van Dijk’s side',
          'Delay wide attackers until Trent recovers',
          'Compete on long balls into the right half-space',
        ],
      },
    },
    {
      id: 'vandijk',
      number: 4,
      name: 'Virgil van Dijk',
      shortName: 'Van Dijk',
      role: 'Left centre-back / line leader',
      playstyle: 'Dominant aerial stopper who sets the offside line and rarely dives into chaos.',
      positions: { inPossession: { x: 36, y: 22 }, outOfPossession: { x: 36, y: 24 } },
      links: ['alisson', 'robertson', 'gomez', 'fabinho'],
      inPossession: {
        duty: 'Be the calm rest-defence reference. Progress with a long diagonal only when the press is stretched.',
        tasks: [
          'Hold width with Gomez so Fabinho can receive',
          'Find Robertson or Mané with a switch',
          'Do not both centre-backs step at the same time',
        ],
      },
      outOfPossession: {
        duty: 'Own the high line. Win first contact and organise the offside trap.',
        tasks: [
          'Step up as a unit, not as an individual chase',
          'Win headers vs target strikers',
          'Cover Robertson if he presses onto a winger',
        ],
      },
    },
    {
      id: 'robertson',
      number: 26,
      name: 'Andrew Robertson',
      shortName: 'Robertson',
      role: 'Attacking left-back',
      playstyle: 'Relentless overlapper who gives Mané a 2v1 and delivers cut-backs from the byline.',
      positions: { inPossession: { x: 12, y: 62 }, outOfPossession: { x: 18, y: 30 } },
      links: ['mane', 'wijnaldum', 'vandijk', 'firmino'],
      inPossession: {
        duty: 'Be the left winger. Stretch the last line and hit the box from wide.',
        tasks: [
          'Overlap when Mané comes inside',
          'Cut back across the six-yard line',
          'Arrive for Trent’s switches',
        ],
      },
      outOfPossession: {
        duty: 'Recover at sprint speed, then press the right winger.',
        tasks: [
          'Get back inside van Dijk before the counter',
          'Show the winger outside or into Wijnaldum',
          'Track late runners into the far post',
        ],
      },
    },
    {
      id: 'fabinho',
      number: 3,
      name: 'Fabinho',
      shortName: 'Fabinho',
      role: 'Single pivot / destroyer',
      playstyle: 'Cover-shadow specialist who intercepts, fouls at the right moment, and keeps the rest defence honest.',
      positions: { inPossession: { x: 50, y: 36 }, outOfPossession: { x: 50, y: 40 } },
      links: ['vandijk', 'gomez', 'henderson', 'wijnaldum', 'alisson'],
      inPossession: {
        duty: 'Sit as the first passer behind the eights. Do not both he and a centre-back leave the middle empty.',
        tasks: [
          'Receive and play forward into Firmino or an eight',
          'Hold the 2-3 rest defence with the centre-backs',
          'Switch to the free full-back',
        ],
      },
      outOfPossession: {
        duty: 'Protect the box in front of van Dijk. Be the player who breaks the counter.',
        tasks: [
          'Cover the lane Firmino leaves when he presses',
          'Intercept or foul if the press is broken',
          'Win second balls from Alisson’s punches',
        ],
      },
    },
    {
      id: 'henderson',
      number: 14,
      name: 'Jordan Henderson',
      shortName: 'Henderson',
      role: 'Right eight / press captain',
      playstyle: 'Box-to-box leader who jumps onto the ball, covers Trent, and arrives for cut-backs.',
      positions: { inPossession: { x: 64, y: 50 }, outOfPossession: { x: 66, y: 50 } },
      links: ['fabinho', 'taa', 'salah', 'firmino'],
      inPossession: {
        duty: 'Connect Trent and Salah, then arrive in the box as the extra runner.',
        tasks: [
          'Tuck inside so Trent can stay wide',
          'Play wall passes with Firmino',
          'Attack the penalty spot on cut-backs',
        ],
      },
      outOfPossession: {
        duty: 'Lead the counter-press on the right. Jump, then recover into a 4-3-3.',
        tasks: [
          'Press the opponent’s left interior',
          'Cover inside if Trent is beaten',
          'Keep the midfield distances tight with Fabinho',
        ],
      },
    },
    {
      id: 'wijnaldum',
      number: 5,
      name: 'Georginio Wijnaldum',
      shortName: 'Wijnaldum',
      role: 'Left eight / ghost runner',
      playstyle: 'Quiet box-crasher who carries through pressure and arrives unmarked in the box.',
      positions: { inPossession: { x: 36, y: 50 }, outOfPossession: { x: 34, y: 50 } },
      links: ['fabinho', 'robertson', 'mane', 'firmino'],
      inPossession: {
        duty: 'Be the extra body in the left half-space and the late runner Salah’s side does not expect.',
        tasks: [
          'Carry out of the first press',
          'Link Robertson and Mané',
          'Arrive at the far post or penalty spot',
        ],
      },
      outOfPossession: {
        duty: 'Press the right interior and help Robertson on the cover.',
        tasks: [
          'Jump with Mané on the first press',
          'Drop next to Fabinho if they sit in a mid-block',
          'Track the opponent’s eight running beyond',
        ],
      },
    },
    {
      id: 'salah',
      number: 11,
      name: 'Mohamed Salah',
      shortName: 'Salah',
      role: 'Right inside forward',
      playstyle: 'Goal-scoring inverted winger who attacks the inside channel and finishes the press.',
      positions: { inPossession: { x: 76, y: 80 }, outOfPossession: { x: 76, y: 66 } },
      links: ['taa', 'henderson', 'firmino'],
      inPossession: {
        duty: 'Attack the box from the right inside channel. Let Trent own the touchline.',
        tasks: [
          'Run in behind the left-back / left centre-back',
          'Finish low across the keeper',
          'Combine with Firmino, then go again',
        ],
      },
      outOfPossession: {
        duty: 'Press the left centre-back and cut the pass into the full-back.',
        tasks: [
          'Curve the press toward the touchline trap',
          'Be first to a loose ball after Firmino’s jump',
          'Recover inside if Trent is high',
        ],
      },
    },
    {
      id: 'firmino',
      number: 9,
      name: 'Roberto Firmino',
      shortName: 'Firmino',
      role: 'False 9 / presser',
      playstyle: 'Link striker who drops, presses from the front, and plays the bounce pass for Salah and Mané.',
      positions: { inPossession: { x: 50, y: 68 }, outOfPossession: { x: 50, y: 62 } },
      links: ['salah', 'mane', 'henderson', 'wijnaldum'],
      inPossession: {
        duty: 'Leave the striker spot so centre-backs have no marker, then set the runners. He is a false 9 for chaos, not for tiki-taka.',
        tasks: [
          'Drop into the hole to bounce into Salah or Mané',
          'Spin in behind after the bounce',
          'Occupy both centre-backs with movement, not with standing between them',
        ],
      },
      outOfPossession: {
        duty: 'Start the press. Screen the pivot, then jump when a centre-back takes a bad touch.',
        tasks: [
          'Cut the pass into the holding midfielder',
          'Lead the five-second counter-press',
          'Win second balls on the edge of the box',
        ],
      },
    },
    {
      id: 'mane',
      number: 10,
      name: 'Sadio Mané',
      shortName: 'Mané',
      role: 'Left inside forward',
      playstyle: 'Explosive runner who presses like a midfielder and attacks the near post or the channel.',
      positions: { inPossession: { x: 24, y: 80 }, outOfPossession: { x: 24, y: 66 } },
      links: ['robertson', 'wijnaldum', 'firmino'],
      inPossession: {
        duty: 'Attack the box from the left inside. Combine with Robertson for 2v1s, then finish.',
        tasks: [
          'Run in behind the right-back',
          'Attack the near post on Trent crosses',
          'Carry 1v1 when the press has already stretched the back line',
        ],
      },
      outOfPossession: {
        duty: 'Press the right centre-back and be the first counter-presser on that side.',
        tasks: [
          'Show the opponent inside toward Wijnaldum',
          'Jump the moment the ball is lost near him',
          'Track the right-back if Robertson is caught upfield',
        ],
      },
    },
  ],
}
