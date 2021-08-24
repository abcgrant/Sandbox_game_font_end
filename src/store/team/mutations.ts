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
  saveTeaminfo(state: State, teamForm: teamForm){
    state.teaminfo['gameID'] = teamForm['gameID'];
    state.teaminfo['teamName'] = teamForm['teamName'];
  },
  saveTeamFinance({teaminfo: {season1}}: State, purchasingForms: number){
    season1.finance.load = purchasingForms
  },
  saveTeamPurchasing({teaminfo: {season1}}: State, purchasingForms: Forms){
    season1.purchasing = purchasingForms
  },
  saveTeamhrm({teaminfo: {season1}}: State, hrmForms: Forms) {
    season1.hrm = hrmForms
  },
  saveTeamMarketing({teaminfo: {season1}}: State, marketingForms: Forms) {
    season1.marketing = marketingForms
  },
}