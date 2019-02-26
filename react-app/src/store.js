import {createStore} from 'redux';
import reducer from './reducer';
let initialState ={
    count:10
};
let store =createStore(reducer,initialState);
export default store;