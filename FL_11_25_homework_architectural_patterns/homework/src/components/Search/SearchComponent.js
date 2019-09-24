import {setUsersFiltered} from '../../actions/users';

export default class SearchComponent {
    constructor(store) {
        this.store = store;
        this.search = document.getElementById('search');
        this.searchInput = document.getElementById('search-input');
        this.searchInput.addEventListener('input', this.setUsersFiltered.bind(this));
    }
    setUsersFiltered() {
        let usersFiltered = this.store.getState().usersList.filter((user) => {
            return user.name.indexOf(this.searchInput.value) !== -1;
        });
        this.store.dispatch(setUsersFiltered(usersFiltered));
    }
}
