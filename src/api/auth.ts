import request from "@/helper/request.ts"

const URL = {
    // user
    REGISTER: '/api/register/',
    LOGIN: '/api/login/',
    AUTOLOGIN: '/api/autoLogin/',
    LOGOUT: '/api/logout/',
    // team
    SUBMIT: '/api/submit/',
    REFRESHANDSUBMIT: '/api/refreshAndSubmit/'
}

export default {
    // user
    register: (username :string, password :string) :Promise<unknown> => request(URL.REGISTER,'POST' ,{username, password}),
    login: (username :string, password :string) :Promise<unknown> => request(URL.LOGIN, 'POST', {username, password}),
    autoLogin: (token :string) :Promise<unknown> => request(URL.AUTOLOGIN, 'POST', {token}),
    logout: (token :string) :Promise<unknown> => request(URL.LOGOUT, 'POST', {token}),

    // team
    submit: (token :string, gameID :string, teamName :string) :Promise<unknown> =>  request(URL.SUBMIT, 'POST', {'token':token, 'gameID':gameID, 'teamName':teamName}),
    refreshAndSubmit : (teaminfo: any) => request(URL.REFRESHANDSUBMIT, 'POST', teaminfo)
}