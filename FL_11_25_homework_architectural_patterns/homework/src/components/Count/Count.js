export default class CountOutput {
    constructor() {
        this.countDisplayed = document.getElementById('count-displayed');
        this.countTotal = document.getElementById('count-total');
        this.loadButton = document.getElementById('load');
    }

    render(countDisplayed, countTotal) {
        this.countDisplayed.innerText = countDisplayed <= countTotal ? countDisplayed : countTotal;
        this.countTotal.innerText = countTotal;
        if (countDisplayed === countTotal) {
            this.loadButton.classList.add('hidden');
        } else {
            this.loadButton.classList.remove('hidden');
        }
    }
}
