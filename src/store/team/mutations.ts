import { State } from './state'

interface teamForm {
  gameID: string;
  teamName: string;
}

interface Forms {
  A: number[],
  B: number[],
  C: number[]
}

export default {
  saveTeaminfo: (state: State, teamForm: teamForm): void => {
    state.teaminfo['gameID'] = teamForm['gameID'];
    state.teaminfo['teamName'] = teamForm['teamName'];
  },
  saveTeamFinance: ({teaminfo: {season1}}: State, purchasingForms: number): void => {
    season1.finance.load = purchasingForms
  },
  saveTeamPurchasing: ({teaminfo: {season1}}: State, purchasingForms: Forms): void => {
    season1.purchasing = purchasingForms
  },
  saveTeamhrm: ({teaminfo: {season1}}: State, hrmForms: Forms): void => {
    season1.hrm = hrmForms
  },
  saveTeamMarketing: ({teaminfo: {season1}}: State, marketingForms: Forms): void => {
    season1.marketing = marketingForms
  },
}