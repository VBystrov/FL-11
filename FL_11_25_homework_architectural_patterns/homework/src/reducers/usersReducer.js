export const usersReducer = (state = {}, action) => {
    switch (action.type) {
    case 'SET_LIST_USERS':
        return {
            ...state,
            usersList: action.usersList
        };
    case 'SET_USERS_DISPLAYED':
        return {
            ...state,
            countUsersDisplayed: action.countUsersDisplayed
        };
    case 'SET_USERS_FILTERED':
        let newCountUsersFiltered = state.countUsersDisplayed;
        if (newCountUsersFiltered >= action.usersFiltered.length) {
            newCountUsersFiltered = action.usersFiltered.length;
        } else {
            if (newCountUsersFiltered < 5) {
                newCountUsersFiltered = 5;
            }
        }
        return {
            ...state,
            usersFiltered: action.usersFiltered,
            countUsersDisplayed: newCountUsersFiltered
        };
    case 'DELETE_USER':
        let newUsersFiltered = state.usersFiltered.filter((user) => {
            return user.id != action.id;
        });
        let newCountUsersDisplayed = state.countUsersDisplayed;
        if (newCountUsersDisplayed > newUsersFiltered.length) {
            newCountUsersDisplayed = newUsersFiltered.length;
        }
        let newUsersList = state.usersList.filter((user) => {
            return user.id != action.id;
        });
        return {
            ...state,
            usersList: newUsersList,
            usersFiltered: newUsersFiltered,
            countUsersDisplayed: newCountUsersDisplayed
        };
    default:
        return state;
    }
};
