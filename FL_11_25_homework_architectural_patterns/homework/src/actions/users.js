export const SET_LIST_USERS = 'SET_LIST_USERS';
export const SET_USERS_DISPLAYED = 'SET_USERS_DISPLAYED';
export const SET_USERS_FILTERED = 'SET_USERS_FILTERED';
export const DELETE_USER = 'DELETE_USER';

/*
 * action creators
 */

export function setUsers(usersList) {
    return {type: SET_LIST_USERS, usersList};
}
export function setCountUsersDisplayed(countUsersDisplayed) {
    return {type: SET_USERS_DISPLAYED, countUsersDisplayed};
}
export function setUsersFiltered(usersFiltered) {
    return {type: SET_USERS_FILTERED, usersFiltered};
}
export function deleteUser(id) {
    return {type: DELETE_USER, id};
}
