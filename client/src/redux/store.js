import {createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import todosReducers from './reducers/todosReducers';


const reducer = combineReducers({
    todos: todosReducers
});

const middleware = [thunk];

const store = createStore(
    reducer, applyMiddleware(...middleware)
)

export default store;