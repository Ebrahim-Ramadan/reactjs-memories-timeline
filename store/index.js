import {createStore, combineReducers, applyMiddleware} from 'redux'
import { LIKESReducer } from './reducers/LIKESReducer'
import { BOOKMARKSReducer } from './reducers/BOOKMARKSReducer'
import { Followreducer } from './reducers/Follow-Reducer';
import {AuthReducer} from './reducers/Auth-reducer'
import thunk from 'redux-thunk';
const appReducers = combineReducers({
    likes: LIKESReducer,
    bookmark: BOOKMARKSReducer,
    follow: Followreducer,
    login: AuthReducer
})
export const store = createStore(appReducers, applyMiddleware(thunk))
