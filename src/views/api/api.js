/* eslint-disable */

import axios from 'axios';
const url = "http://localhost:8010";



export const RegisterUser  =  async(user)=>{
    try{
        return await axios.post(`${url}/registerUser`,user)
        
    }
    catch(err){
        console.log(err,"err in react api");
    }
}

export const loginAuth  =  async(user)=>{
    try{
        return await axios.post(`${url}/loginAuth`,user)
        
    }
    catch(err){
        console.log(err,"err in react api");
    }
}
