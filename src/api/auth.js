import request from "@/helper/request";

const URL = {
    REGISTER: '/api/register/',
    LOGIN: '/api/login/',
    AUTOLOGIN: '/api/autoLogin/',
    LOGOUT: '/api/logout/',
}

export default {
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
}