import request from "@/helper/request";

const URL = {
    // user
    REGISTER: '/api/register/',
    LOGIN: '/api/login/',
    AUTOLOGIN: '/api/autoLogin/',
    LOGOUT: '/api/logout/',
    // team
    SUBMIT: '/api/submit/'
}

export default {
    // user
    register(username, password){
        return request(URL.REGISTER,'POST' ,{username, password})
    },
    login(username, password){
        return request(URL.LOGIN, 'POST', {username, password})
    },
    autoLogin(token){
        return request(URL.AUTOLOGIN, 'POST', {token})
    },
    logout(token){
        return request(URL.LOGOUT, 'POST', {token})
    },

    // team
    submit(token, gameID, teamName){
        return request(URL.SUBMIT, 'POST', {'token':token, 'gameID':gameID, 'teamName':teamName})
    }
}