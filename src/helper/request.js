import axios from 'axios'
import Qs from 'qs'

// axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true

export default function request(url, type='GET', data={}){
    return new Promise((resolve, reject)=>{
        const option = {
            url,
            method: type,
            validateState(status){
                return (status >= 200 && status < 300) || status === 400
            }
        }
        if(type.toLocaleLowerCase() === 'get'){
            option.params = data
        }else{
            option.data = Qs.stringify(data)
        }
        axios(option).then(res=>{
            if(res.status === 200){
                resolve(res.data)
            }else{
                reject(res.data)
            }
        }).catch(err=>{
            console.log(err)
            console.log({msg:'网络异常'})
            reject({msg:'网络异常'})
        })
    })
}