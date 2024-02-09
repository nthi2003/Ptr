import axios from '../axiosConfig'
import axiosDefault from 'axios'

export const apiGetPrices = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/v1/price/all'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetAreas = () => new Promise(async (resolve, reject) => {
   try {
       const response = await axios({
           method: 'get',
           url: '/api/v1/area/all'
       })
       resolve(response)
   } catch (error) {
       reject(error)
   }
})
export const apiGetProvinces = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: '/api/v1/province/all'
   
        })
       
        resolve(response)
    } catch (error) {
        reject(error)
    }
 })
 export const apiGetTest = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('/api/v1/test/all');
            console.log(response);
            resolve(response);
        } catch (error) {
            console.error('Error in apiGetTest:', error);
            reject(error);
        }
    });
};