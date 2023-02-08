/* eslint-disable */
import axios from 'axios';
const url = "http://localhost:8010";

//for register user
export const RegisterUser  =  async(user)=>{
    try{
        return await axios.post(`${url}/registerUser`,user)
        
    }
    catch(err){
        console.log(err,"err in react api");
    }
}

//for login auth
export const loginAuth  =  async(user)=>{
    try{
        return await axios.post(`${url}/loginAuth`,user)
        
    }
    catch(err){
        console.log(err,"err in react api");
    }
}

//for get total drivers at main page
export const getTotalDrivers = async() => {
    try{
        return await axios.get(`${url}/allDrivers`)
    }
    catch(err){
        console.log(err,'err in react api');
    }
}
