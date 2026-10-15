import { barcelona201011 } from './barcelona201011'
import { liverpool201920 } from './liverpool201920'

export const teams = [barcelona201011, liverpool201920]

export function getTeam(id) {
  return teams.find((team) => team.id === id) ?? teams[0]
}
