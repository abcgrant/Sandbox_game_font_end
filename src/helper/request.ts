import axios from 'axios'
import Qs from 'qs'

axios.defaults.baseURL = `http://127.0.0.1:8000`
axios.defaults.withCredentials = true


export default function request(url: string, type='GET', data: any) :Promise<unknown>{
    return new Promise((resolve, reject)=>{
        const option = {
            url,
            method: type,
            params: {},
            data: {},

            validateState(status: number){
                return (status >= 200 && status < 300) || status === 400
            }
        }
        if(type.toLocaleLowerCase() === 'get'){
            option.params = data
        }else{
            if(typeof data === 'string'){
                option.data = Qs.stringify({data: data})

            }else {
                option.data = Qs.stringify(data)
            }
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