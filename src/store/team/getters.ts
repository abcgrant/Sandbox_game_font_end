import { State } from './state'

export default {
  teamStatus: (state: State): any => JSON.stringify({
      teamName: state.teaminfo.teamName,
      season1:{
        finance: {
          cash: state.teaminfo.season1.finance.cash,
          load: state.teaminfo.season1.finance.load,
          interest: state.teaminfo.season1.finance.interest,
        },
        purchasing:{
          A: state.teaminfo.season1.purchasing.A,
          B: state.teaminfo.season1.purchasing.B,
          C: state.teaminfo.season1.purchasing.C
        },
        hrm:{
          A: state.teaminfo.season1.hrm.A,
          B: state.teaminfo.season1.hrm.B,
          C: state.teaminfo.season1.hrm.C
        },
        marketing:{
          A: state.teaminfo.season1.marketing.A,
          B: state.teaminfo.season1.marketing.B,
          C: state.teaminfo.season1.marketing.C
        }
      },
    }),

}