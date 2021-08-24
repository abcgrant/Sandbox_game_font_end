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
    register(username :string, password :string) :Promise<unknown>{
        return request(URL.REGISTER,'POST' ,{username, password})
    },
    login(username :string, password :string) :Promise<unknown>{
        return request(URL.LOGIN, 'POST', {username, password})
    },
    autoLogin(token :string) :Promise<unknown>{
        return request(URL.AUTOLOGIN, 'POST', {token})
    },
    logout(token :string) :Promise<unknown>{
        return request(URL.LOGOUT, 'POST', {token})
    },

    // team
    submit(token :string, gameID :string, teamName :string) :Promise<unknown>{
        return request(URL.SUBMIT, 'POST', {'token':token, 'gameID':gameID, 'teamName':teamName})
    },
    refreshAndSubmit(teaminfo: any) :Promise<unknown>{
        return request(URL.REFRESHANDSUBMIT, 'POST', teaminfo)
    }
}