$(document).ready(function() {
  const $list = $('.list');
  const $input = $('#add-input');
  const $add = $('#add-submit');
  let idCounter = 1000;
  const todos = [];

  $add.click(addItem);
  function addItem() {
    let inputText = $input.val();
    todos.push({ id: idCounter, text: inputText, done: false });
    $list.appendItem(inputText, idCounter++);
  }

  function toggleCompletion(e) {
    e.target.classList.toggle('done');
    let itemId = e.target.parentNode.getAttribute('item_id');
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == itemId) {
        todos[i].done = !todos[i].done;
        break;
      }
    }
  }

  function removeItem(e) {
    let itemId = e.target.parentNode.getAttribute('item_id');
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == itemId) {
        todos.splice(i, 1);
        break;
      }
    }
    $('.item').remove(`[item_id=${itemId}]`);
  }

  (function($) {
    $.fn.appendItem = function(inputText, id) {
      let $item = $('<li></li>')
        .addClass('item')
        .attr('item_id', id);
      let $itemText = $('<span></span>')
        .addClass('item-text')
        .text(inputText);
      $itemText.click(toggleCompletion);
      let $itemRemove = $('<button></button>')
        .addClass('item-remove')
        .text('Remove')
        .click(removeItem);
      $item.append($itemText, $itemRemove);
      this.append($item);
      return this;
    };
  })(jQuery);
});
