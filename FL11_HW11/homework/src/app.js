let rootNode = document.getElementById('root');
let input = document.getElementsByClassName('input-action')[0];
let addButton = document.getElementsByClassName('icon-add')[0];
let itemContainer = document.getElementsByClassName('items-container')[0];
let dragItem; 
itemContainer.addEventListener('dragover', doDragOver);
itemContainer.addEventListener('drop', doDrop);
input.addEventListener('input', toggleAddItem);

function createItem(inputText) {
  let item = document.createElement('div');
  item.className = 'item';
  let iconCheckbox = document.createElement('i');
  iconCheckbox.className = 'material-icons icon-checkbox-blank enabled';
  iconCheckbox.innerHTML = 'check_box_outline_blank';
  iconCheckbox.addEventListener('click', fillCheckbox);
  item.appendChild(iconCheckbox);
  let p = document.createElement('p');
  p.className = 'item-text';
  p.innerHTML = inputText;
  item.appendChild(p);
  let iconEdit = document.createElement('i');
  iconEdit.className = 'material-icons icon-edit enabled';
  iconEdit.innerHTML = 'edit';
  iconEdit.addEventListener('click', editItem);
  item.appendChild(iconEdit);
  let iconDelete = document.createElement('i');
  iconDelete.className = 'material-icons icon-delete enabled';
  iconDelete.innerHTML = 'delete';
  iconDelete.addEventListener('click', deleteItem)
  item.appendChild(iconDelete);
  return item;
}

function drag(event){
  event.dataTransfer.setData('text/html', event.target.outerHTML);
  dragItem = event.target;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.dropEffect = 'move';
}
function doDragOver(event){
  event.preventDefault();
}
function doDrop(event){
  event.preventDefault();
  let data = event.dataTransfer.getData('text/html');
  let insertItem = document.createElement('div');
  let insertAfter;
  for(let i=0; i<event.path.length;i++){
    if(event.path[i].classList.contains('item')){
      insertAfter = event.path[i];
      break;
    }
  }
  insertAfter.insertAdjacentElement('afterend', insertItem);
  insertItem.outerHTML = data;
  insertItem=insertAfter.nextSibling;
  insertItem.draggable = true;
  insertItem.addEventListener('dragstart', drag);
  insertItem.getElementsByClassName('icon-checkbox-blank')[0].addEventListener('click', fillCheckbox);
  insertItem.getElementsByClassName('icon-edit')[0].addEventListener('click', editItem);
  insertItem.getElementsByClassName('icon-delete')[0].addEventListener('click', deleteItem);
  itemContainer.removeChild(dragItem);
}

function addItem() {
  let newItem = createItem(input.value);
  newItem.draggable = true;
  newItem.addEventListener('dragstart', drag);
  itemContainer.appendChild(newItem);
  if(itemContainer.childElementCount >= 10){
    addButton.removeEventListener('click', addItem);
    addButton.classList.remove('enabled');
    addButton.classList.add('disabled');
    let notif=document.getElementsByClassName('notification')[0];
    notif.style.visibility = 'visible';
    input.disabled = true;
  }
}

function editItem(event){
  let item = event.target.parentElement;
  let icons = item.getElementsByClassName('material-icons');
  for(let i = 0; i < icons.length; i++){
    icons[i].classList.add('hide');
  }
  item.getElementsByClassName('item-text')[0].classList.add('hide');
  let inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.className = 'edit-text';
  inputText.value = item.getElementsByClassName('item-text')[0].innerHTML;
  item.appendChild(inputText);
  let iconSave = document.createElement('i');
  iconSave.className = 'material-icons icon-save enabled';
  iconSave.innerHTML = 'save';
  iconSave.addEventListener('click', saveItem);
  item.appendChild(iconSave);
}

function saveItem(event){
  let item = event.target.parentElement;
  let inputText = item.getElementsByClassName('edit-text')[0];
  item.getElementsByClassName('item-text')[0].innerHTML = inputText.value;
  let iconSave = item.getElementsByClassName('icon-save')[0];
  item.removeChild(inputText);
  item.removeChild(iconSave);
  let hided = item.getElementsByClassName('hide');
  while(hided.length>0){
    hided[0].classList.remove('hide');
  }
}

function deleteItem(event){
  let item = event.target.parentElement;
  itemContainer.removeChild(item);
  if(itemContainer.childElementCount === 9){
    addButton.addEventListener('click', addItem);
    addButton.classList.remove('disabled');
    addButton.classList.add('enabled');
    document.getElementsByClassName('notification')[0].style.visibility = 'hidden';
    input.disabled = false;
  }
}

function fillCheckbox(event) {
  event.target.classList.remove('icon-checkbox-blank');
  event.target.classList.remove('enabled');
  event.target.classList.add('icon-checkbox-filled');
  event.target.innerHTML = 'check_box';
  event.target.removeEventListener('click', fillCheckbox);
}

function toggleAddItem() {
  if (input.value === '') {
    addButton.removeEventListener('click', addItem);
    addButton.classList.remove('enabled');
    addButton.classList.add('disabled');
  } else {
    addButton.addEventListener('click', addItem);
    addButton.classList.remove('disabled');
    addButton.classList.add('enabled');
  }
}

