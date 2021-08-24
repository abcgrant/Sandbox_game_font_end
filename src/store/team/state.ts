export const state = {
  teaminfo: {
    gameID: '',
    teamName: '',
    season1: {
      finance: {
        cash: 300,
        load: 200,
        interest: null,
      },
      purchasing:{
        A:[0, 0, 0],
        B:[0, 0, 0],
        C:[0, 0, 0]
      },
      hrm:{
        A:[0, 0],
        B:[0, 0],
        C:[0, 0]
      },
      marketing:{
        A:[0],
        B:[0],
        C:[0]
      }
    },
    season2: {
      finance: {
        cash: 0,
        load: 0,
        interest: 0,
      },
      purchasing:{
        A:[],
        B:[],
        C:[]
      },
      hrm:{
        A:[],
        B:[],
        C:[]
      },
      marketing:{
        A:[],
        B:[],
        C:[]
      }
    },
    season3: {
      finance: {
        cash: 0,
        load: 0,
        interest: 0,
      },
      purchasing:{
        A:[],
        B:[],
        C:[]
      },
      hrm:{
        A:[],
        B:[],
        C:[]
      },
      marketing:{
        A:[],
        B:[],
        C:[]
      }
    },
    season4: {
      finance: {
        cash: 0,
        load: 0,
        interest: 0,
      },
      purchasing:{
        A:[],
        B:[],
        C:[]
      },
      hrm:{
        A:[],
        B:[],
        C:[]
      },
      marketing:{
        A:[],
        B:[],
        C:[]
      }
    }
  }
}

export type State = typeof state