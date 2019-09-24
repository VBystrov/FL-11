import TableOutput from './Table';
import {deleteUser} from '../../actions/users';

export default class TableComponent {
    constructor(store) {
        this.store = store;
        this.tableOutput = new TableOutput(this.displayedListUsers);
        this.viewTable();
        this.table = document.getElementById('table');
        this.table.addEventListener('click', this.delete.bind(this));
        this.store.subscribe(this.viewTable.bind(this));
    }
    viewTable() {
        this.countUsersDisplayed = this.store.getState().countUsersDisplayed;
        this.displayedListUsers = this.store
            .getState()
            .usersFiltered.slice(0, this.countUsersDisplayed);
        this.tableOutput.render(this.displayedListUsers);
    }

    delete(e) {
        if (e.target.classList.contains('delete')) {
            let row = e.target;
            while (row && !row.classList.contains('row')) {
                row = row.parentElement;
            }
            this.store.dispatch(deleteUser(row.id));
        }
    }
}
