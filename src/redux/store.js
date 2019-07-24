import {createStore,combineReducers} from "redux";

function reducer1(state = {name: '111', age: 123}, action) {
    switch (action.type) {
        case 'set_name':
            return {
                ...state,
                name: action.name
            }
            break;
        default:
            return{
                ...state
            }
    }
}
function reducer2(state = {name: '22222', age: 103}, action) {
    switch (action.type) {
        case 'set_name':
            return {
                ...state,
                name: action.name
            }
            break;
        default:
            return{
                ...state
            }
    }
}

let rootReducers = combineReducers({
    coolie:reducer1,
    adimt:reducer2,
})

const store=createStore(rootReducers);
export default store;













