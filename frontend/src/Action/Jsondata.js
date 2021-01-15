
import {GET_JSONFILE} from './types'

export const getInfo =()=> async dispatch =>{
    try {
        const res = await fetch('http://www.json-generator.com/api/json/get/bVfYzPxrGW?indent=2', {
        method: 'GET'
      })
      
      const jsonResult = await res.json()
      console.log('this is the result from action :' + jsonResult)
      dispatch({
          type:GET_JSONFILE,
          payload:jsonResult
      })
    } catch (err) {
        console.error(err.message)
    }
}