import axios from 'axios';
import { ADDNEW_TODO } from './const';
const APP_URL = 'http://localhost:8000'

export const addNewTodo = (data) => async(dispatch) =>{
    try{
        const res = await axios.post(`${APP_URL}/todos`, {data})
        dispatch({
            type:ADDNEW_TODO,
            payload: res.data
        })
    } catch (error) {
        console.log('Error while calling addNew API', error.message)
    }
}