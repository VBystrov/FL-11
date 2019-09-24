export default class TableOutput {
    constructor() {
        this.table = document.getElementById('table-body');
    }
    emptyTable() {
        this.table.innerHTML = '';
    }
    render(list) {
        this.emptyTable();
        if (list.length > 0) {
            list.forEach((item) => {
                let row = this.createTableRow(item);
                this.table.appendChild(row);
            });
        } else {
            const row = document.createElement('tr');
            let message = document.createElement('td');
            message.innerText = 'No users are found';
            message.classList.add('message');
            message.setAttribute('colspan', '7');
            row.appendChild(message);
            this.table.appendChild(row);
        }
    }
    createTableRow(item) {
        const row = document.createElement('tr');
        row.classList.add('row');
        row.id = item.id;
        const photo = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.picture;
        photo.appendChild(img);
        const name = document.createElement('td');
        name.innerText = item.name;
        const adress = document.createElement('td');
        adress.innerText = item.location;
        const email = document.createElement('td');
        email.innerText = item.email;
        const phoneNumber = document.createElement('td');
        phoneNumber.innerText = item.phone;
        const timezone = document.createElement('td');
        timezone.innerText = item.timezone;
        const actions = document.createElement('td');
        const deleteButton = document.createElement('input');
        deleteButton.type = 'button';
        deleteButton.value = 'Remove';
        deleteButton.classList.add('delete');
        actions.appendChild(deleteButton);
        row.append(photo, name, adress, email, phoneNumber, timezone, actions);
        return row;
    }
}
