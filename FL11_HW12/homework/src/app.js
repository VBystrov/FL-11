window.addEventListener('load', function () {
  let todoItems = JSON.parse(localStorage.getItem('list'));
  let idCounter = JSON.parse(localStorage.getItem('idCounter'));
  const mainPage = document.getElementById('main');
  const addPage = document.getElementById('add');
  const modifyPage = document.getElementById('modify');
  const todoList = document.getElementsByClassName('todo')[0];
  const newTaskButton = document.getElementsByClassName('new-task')[0];
  const cancelAddButton = document.querySelector('#add .cancel');
  const saveAddButton = document.querySelector('#add .save');
  const inputTextAdd = document.querySelector('#add .input-text');
  const cancelModifyButton = document.querySelector('#modify .cancel');
  const saveModifyButton = document.querySelector('#modify .save');
  const inputTextModify = document.querySelector('#modify .input-text');
  const alert = document.getElementById('alert');
  const message = document.getElementById('message');

  if (!todoItems) {
    todoItems = [];
  }
  if (!idCounter) {
    idCounter = 1000;
  }
  window.addEventListener('hashchange', switchPage);
  newTaskButton.addEventListener('click', openAddPage);
  inputTextAdd.addEventListener('input', toggleAddButton);
  saveAddButton.addEventListener('click', addNewTask);
  cancelAddButton.addEventListener('click', closeAddPage);
  inputTextModify.addEventListener('input', toggleModifyButton);
  saveModifyButton.addEventListener('click', modifyTask);
  cancelModifyButton.addEventListener('click', closeModifyPage);
  location.hash = '';
  if (isChrome()) {
    alert.style.left = '50px';
  } else {
    alert.style.right = '50px';
  }
  if (todoItems.length === 0) {
    document.getElementsByClassName('notification')[0].classList.remove('hide');
  }
  for (let i = 0; i < todoItems.length; i++) {
    todoList.appendChild(createItemElement(todoItems[i]));
  }

  function switchPage() {
    if (location.hash === '') {
      mainPage.classList.remove('not-display');
      addPage.classList.add('not-display');
      modifyPage.classList.add('not-display');
    }
    if (location.hash === '#add') {
      addPage.classList.remove('not-display');
      mainPage.classList.add('not-display');
    }
    if (location.hash.substr(0, 7) === '#modify') {
      modifyPage.classList.remove('not-display');
      mainPage.classList.add('not-display');
    }
  }

  function openAddPage() {
    location.hash = 'add';
  }

  function closeAddPage() {
    inputTextAdd.value = '';
    saveAddButton.disabled = true;
    location.hash = '';
  }

  function addNewTask() {
    if (isDuplicate(inputTextAdd.value)) {
      showAlert('Error! You can\'t add already exist item');
    } else {
      let newItem = { isDone: false };
      newItem.id = idCounter++;
      newItem.description = inputTextAdd.value;
      let indexDoneItem = 0;
      for (; indexDoneItem < todoItems.length; indexDoneItem++) {
        if (todoItems[indexDoneItem].isDone) {
          break;
        }
      }
      todoItems.splice(indexDoneItem, 0, newItem);
      localStorage.setItem('list', JSON.stringify(todoItems));
      localStorage.setItem('idCounter', JSON.stringify(idCounter));
      insertElement(createItemElement(newItem), indexDoneItem);
      closeAddPage();
      document.getElementsByClassName('notification')[0].classList.add('hide');
    }
  }

  function createItemElement(newItem) {
    let newItemElement = document.createElement('div');
    newItemElement.className = 'item';
    newItemElement.id = newItem.id;
    let description = document.createElement('span');
    description.className = 'item-description';
    description.innerText = newItem.description;
    if (newItem.isDone) {
      let doneImage = document.createElement('img');
      doneImage.className = 'done-img';
      doneImage.src = 'assets/img/done-s.png';
      doneImage.alt = 'Done icon';
      doneImage.addEventListener('click', unFinishedItem);
      newItemElement.appendChild(doneImage);
      description.addEventListener('click', showModifyAlert);
    } else {
      let todoImage = document.createElement('img');
      todoImage.className = 'todo-img';
      todoImage.src = 'assets/img/todo-s.png';
      todoImage.alt = 'TODO icon';
      todoImage.addEventListener('click', finishedItem);
      newItemElement.appendChild(todoImage);
      description.addEventListener('click', openModifyPage);
    }
    newItemElement.appendChild(description);
    let removeImage = document.createElement('img');
    removeImage.className = 'remove-img';
    removeImage.src = 'assets/img/remove-s.jpg';
    removeImage.alt = 'remove icon';
    removeImage.addEventListener('click', removeItem)
    newItemElement.appendChild(removeImage);
    return newItemElement;
  }

  function toggleAddButton(event) {
    if (event.target.value === '') {
      saveAddButton.disabled = true;
    } else {
      saveAddButton.disabled = false;
    }
  }

  function toggleModifyButton(event) {
    if (event.target.value === '') {
      saveModifyButton.disabled = true;
    } else {
      saveModifyButton.disabled = false;
    }
  }

  function insertElement(item, index) {
    if (!index) {
      todoList.insertAdjacentElement('afterbegin', item);
    } else {
      todoList.children[index - 1].insertAdjacentElement('afterend', item);
    }
  }

  function removeItem(event) {
    let item = event.target;
    while (!item.classList.contains('item')) {
      item = item.parentElement;
    }
    todoList.removeChild(item);
    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === parseInt(item.id)) {
        todoItems.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('list', JSON.stringify(todoItems));
    if (todoItems.length === 0) {
      document.getElementsByClassName('notification')[0].classList.remove('hide');
    }
  }

  function openModifyPage(event) {
    let item = event.target;
    while (!item.classList.contains('item')) {
      item = item.parentElement;
    }
    location.hash = 'modify/' + item.id;
    inputTextModify.value = item.getElementsByClassName('item-description')[0].innerText;
  }

  function closeModifyPage() {
    location.hash = '';
    saveModifyButton.disabled = false;
  }

  function modifyTask() {
    if (isDuplicate(inputTextModify.value)) {
      showAlert('Error! You can\'t add already exist item');
    } else {
      let id = location.hash.slice(8);
      let item = document.getElementById(id);
      item.getElementsByClassName('item-description')[0].innerText = inputTextModify.value;
      let indexCurrentItem = 0;
      for (; indexCurrentItem < todoItems.length; indexCurrentItem++) {
        if (todoItems[indexCurrentItem].id === parseInt(id)) {
          todoItems[indexCurrentItem].description = inputTextModify.value;
          break;
        }
      }
      localStorage.setItem('list', JSON.stringify(todoItems));
      closeModifyPage();
    }
  }

  function finishedItem(event) {
    let item = event.target;
    while (!item.classList.contains('item')) {
      item = item.parentElement;
    }
    let indexCurrentItem = 0;
    for (; indexCurrentItem < todoItems.length; indexCurrentItem++) {
      if (todoItems[indexCurrentItem].id === parseInt(item.id)) {
        todoItems[indexCurrentItem].isDone = true;
        break;
      }
    }
    if (todoItems.length > indexCurrentItem + 1) {
      todoItems.push(todoItems[indexCurrentItem]);
      todoItems.splice(indexCurrentItem, 1);
      insertElement(todoList.children[indexCurrentItem], todoItems.length);
    }
    item.getElementsByClassName('item-description')[0].removeEventListener('click', openModifyPage);
    item.getElementsByClassName('item-description')[0].addEventListener('click', showModifyAlert);
    event.target.classList.remove('todo-img');
    event.target.classList.add('done-img');
    event.target.src = 'assets/img/done-s.png';
    event.target.alt = 'Done icon';
    event.target.removeEventListener('click', finishedItem);
    event.target.addEventListener('click', unFinishedItem);
    localStorage.setItem('list', JSON.stringify(todoItems));
  }

  function unFinishedItem(event) {
    let item = event.target;
    while (!item.classList.contains('item')) {
      item = item.parentElement;
    }
    let indexDoneItem = 0;
    for (; indexDoneItem < todoItems.length; indexDoneItem++) {
      if (todoItems[indexDoneItem].isDone) {
        break;
      }
    }
    let indexCurrentItem = 0;
    for (; indexCurrentItem < todoItems.length; indexCurrentItem++) {
      if (todoItems[indexCurrentItem].id === parseInt(item.id)) {
        todoItems[indexCurrentItem].isDone = false;
        break;
      }
    }
    if (indexCurrentItem > indexDoneItem) {
      let temp = todoItems[indexCurrentItem];
      todoItems.splice(indexCurrentItem, 1);
      todoItems.splice(indexDoneItem, 0, temp);
      insertElement(todoList.children[indexCurrentItem], indexDoneItem);
    }
    item.getElementsByClassName('item-description')[0].removeEventListener('click', showModifyAlert);
    item.getElementsByClassName('item-description')[0].addEventListener('click', openModifyPage);
    event.target.classList.remove('done-img');
    event.target.classList.add('todo-img');
    event.target.src = 'assets/img/todo-s.png';
    event.target.alt = 'TODO icon';
    event.target.removeEventListener('click', unFinishedItem);
    event.target.addEventListener('click', finishedItem);
    localStorage.setItem('list', JSON.stringify(todoItems));
  }

  function isDuplicate(newDescription) {
    let duplicate = false;
    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].description === newDescription) {
        duplicate = true;
        break;
      }
    }
    return duplicate;
  }

  function showAlert(text) {
    message.innerText = text;
    alert.classList.remove('not-display');
    setTimeout(() => { 
        alert.classList.add('not-display') 
      }, 2000);
  }

  function showModifyAlert() {
    showAlert('Error! You can\'t edit already done item');
  }
  function isChrome() {
    let isChromium = window.chrome;
    let vendorName = window.navigator.vendor;
    let isOpera = typeof window.opr !== 'undefined';
    let isIEedge = window.navigator.userAgent.indexOf('Edge') > -1;
    return isChromium !== null &&
      typeof isChromium !== 'undefined' &&
      vendorName === 'Google Inc.' &&
      isOpera === false &&
      isIEedge === false;
  }
});