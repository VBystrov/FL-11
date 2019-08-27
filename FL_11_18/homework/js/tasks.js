window.addEventListener('load', function () {
  const userList = document.getElementsByClassName('users-list')[0];
  const loader = document.getElementById("loader");
  let userArray;
  setTimeout(() => loader.classList.add("loader_hidden"), 10000);
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      loader.classList.add("loader_hidden");
      userArray = json;
      for (let i = 0; i < json.length; i++) {
        addUser(json[i]);
      }
    });

  function addUser(newUser) {
    let newUserElement = document.createElement('div');
    newUserElement.className = 'user';
    newUserElement.id = newUser.id;
    let username = document.createElement('span');
    username.className = 'user__name';
    username.innerText = newUser.name;
    username.addEventListener("click", showPosts);
    newUserElement.appendChild(username);
    let editButton = document.createElement('button');
    editButton.className = 'user__edit-button';
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', editUser);
    newUserElement.appendChild(editButton);
    let saveButton = document.createElement('button');
    saveButton.className = 'user__save-button user__save-button_hidden';
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', saveUser);
    newUserElement.appendChild(saveButton);
    let deleteButton = document.createElement('button');
    deleteButton.className = 'user__delete-button';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteUser);
    newUserElement.appendChild(deleteButton);
    userList.appendChild(newUserElement);
  }

  function editUser(event) {
    let user = event.target;
    while (!user.classList.contains('user')) {
      user = user.parentElement;
    }
    let username = user.getElementsByClassName('user__name')[0];
    username.classList.add('user__name_hidden');
    user.getElementsByClassName('user__edit-button')[0].classList.add('user__edit-button_hidden');
    let editField = document.createElement('input');
    editField.value = username.innerText;
    editField.classList = 'user__edit-field';
    username.insertAdjacentElement('afterend', editField);
    user.getElementsByClassName('user__save-button')[0].classList.remove('user__save-button_hidden');
  }

  function saveUser(event) {
    let user = event.target;
    while (!user.classList.contains('user')) {
      user = user.parentElement;
    }
    let username = user.getElementsByClassName('user__name')[0];
    username.classList.remove('user__name_hidden');
    let editField = user.getElementsByClassName('user__edit-field')[0];
    username.innerText = editField.value;
    user.removeChild(editField);
    user.getElementsByClassName('user__edit-button')[0].classList.remove('user__edit-button_hidden');
    user.getElementsByClassName('user__save-button')[0].classList.add('user__save-button_hidden');
    let userIndex;
    for (let i = 0; i < userArray.length; i++) {
      if (userArray[i].id === parseInt(user.id)) {
        userIndex = i;
        break;
      }
    }
    userArray[userIndex].name = username.innerText;
    let myInit = {
      method: 'PUT',
      body: JSON.stringify(userArray[userIndex]),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };
    loader.classList.remove("loader_hidden");
    setTimeout(() => loader.classList.add("loader_hidden"), 10000);
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, myInit)
      .then(response => response.json())
      .then((json) => loader.classList.add("loader_hidden"));
  }

  function deleteUser(event) {
    let user = event.target;
    while (!user.classList.contains('user')) {
      user = user.parentElement;
    }
    loader.classList.remove("loader_hidden");
    setTimeout(() => loader.classList.add("loader_hidden"), 10000);
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then((json) => loader.classList.add("loader_hidden"));
    let userIndex;
    for (let i = 0; i < userArray.length; i++) {
      if (userArray[i].id === parseInt(user.id)) {
        userIndex = i;
        break;
      }
    }
    userArray.splice(userIndex, 1);
    userList.removeChild(user);
  }

  function showPosts(event) {
    let user = event.target;
    while (!user.classList.contains('user')) {
      user = user.parentElement;
    }
    var win = window.open(`./posts.html#${user.id}`, '_blank');
    win.focus();
  }
});
