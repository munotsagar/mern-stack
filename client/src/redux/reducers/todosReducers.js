import { ADDNEW_TODO } from "../actions/const";

const todosReducers = (state = [], action) =>{
    switch(action.type){
        case ADDNEW_TODO:
            return[
                action.payload,
                ...state
            ]
        default:
            return state;
    }
}

export default todosReducers;