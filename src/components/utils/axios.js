
import axios from 'axios'
import {REACT_APP_IP} from '@env'

export const url = 'http://195.2.71.115:1488';
console.log(url,'uuuuuuuuuuuuuu')


export const setAuthToken = (token) => {
    console.log(token, 'token')

    if(token){
        innerBackend.defaults.headers.common['auth-token'] = token;
    } 
}




export const innerBackend = axios.create ({
        baseURL: url,
        headers: {
            accept: 'application/json',
        
        }
       
    })





export const instance = axios.create({
    baseURL: url,
    headers: {
        accept: 'application/json',
      }})



