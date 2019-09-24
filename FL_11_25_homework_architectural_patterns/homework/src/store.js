import {createStore} from 'redux';
import {usersReducer} from './reducers/usersReducer';

export default function configureStore(initialState = {}) {
    return createStore(usersReducer, initialState);
}
