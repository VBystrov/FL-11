import CountOutput from './Count';
import {setCountUsersDisplayed} from '../../actions/users';

export default class CountComponent {
    constructor(store) {
        this.store = store;
        this.countOutput = new CountOutput();
        this.loadButton = document.getElementById('load');
        this.loadButton.addEventListener('click', this.loadMore.bind(this));
        this.store.subscribe(this.viewCount.bind(this));
    }
    viewCount() {
        this.countOutput.render(this.store.getState().countUsersDisplayed, this.store.getState().usersFiltered.length);
    }
    loadMore() {
        let countDisplayed = this.store.getState().countUsersDisplayed;
        let more = 5;
        let countTotal = this.store.getState().usersFiltered.length;
        let newCount;
        if (countDisplayed + more <= countTotal) {
            newCount = countDisplayed + more;
        } else {
            newCount = countTotal;
        }
        this.store.dispatch(setCountUsersDisplayed(newCount));
    }
}
