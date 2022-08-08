function newBook(title, author) {
  return `
      <h4>${title}</h2>
      <h4>${author}</h2>
          <button type="submit" class="remove-book" id="remove-book">Remove</button>
      <hr>
      `;
}
function removeBookFromLocalStorage(e) {
  const title = e.target.previousElementSibling.previousElementSibling.innerHTML;
  const arr = JSON.parse(localStorage.getItem('book list'));
  const index = arr.findIndex((object) => object.title === title);

  arr.splice(index, 1);
  localStorage.setItem('book list', JSON.stringify(arr));
}

function removeFunctionality() {
  const removeButton = document.getElementsByClassName('remove-book');
  removeButton[removeButton.length - 1].onclick = (e) => {
    removeBookFromLocalStorage(e);
    e.target.parentNode.remove();
  };
}

const addButton = document.getElementById('add-button');
addButton.onclick = function () {
  /// /Create html for new book and add it to DOM/////
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const div = document.createElement('div');
  div.innerHTML = newBook(title, author);
  document.getElementById('book-list').appendChild(div);

  /// Add new book to local storage
  const book = {
    author,
    title,
  };
  const arr = JSON.parse(localStorage.getItem('book list'));
  arr.push(book);
  localStorage.setItem('book list', JSON.stringify(arr));

  /// Add remove functionality to new added book
  removeFunctionality();
};
