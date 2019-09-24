import './styles/style.scss';

// ** Here you can pass store down to your components
// ** and initialize them, like in example below

import configureStore from './store';
import SearchComponent from './components/Search/SearchComponent';
import TableComponent from './components/Table/TableComponent';
import CountComponent from './components/Count/CountComponent';
import data from './data.js';
import {
    setUsers,
    setCountUsersDisplayed,
    setUsersFiltered
} from './actions/users';

const store = configureStore();
store.dispatch(setUsers(data));
store.dispatch(setCountUsersDisplayed(5));
store.dispatch(setUsersFiltered(store.getState().usersList));
const searchComponent = new SearchComponent(store);
const tableComponent = new TableComponent(store);
const countComponent = new CountComponent(store);
