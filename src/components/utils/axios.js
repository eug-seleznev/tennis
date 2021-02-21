
import axios from 'axios'
import {APP_IP} from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const url = '195.2.71.115:1488';
console.log(url,'uuuuuuuuuuuuuu')


export const setAuthToken = (token) => {
    console.log(token, 'token')

    if(token){
        innerBackend.defaults.headers.common['benis-token'] = token;
    } 
}


export const innerBackend = axios.create({
  baseURL: url,
  headers: {
    accept: 'application/json',
  },
});


export const instance = axios.create({
    baseURL: url,
    headers: {
        accept: 'application/json',
      }})



