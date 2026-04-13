const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
function displayBooks() {
  const bookContainer = document.getElementById("bookContainer");
  bookContainer.innerHTML = "";

  if (myLibrary.length === 0) {
    return; // Empty state handled by CSS
  }

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookCard");
    bookDiv.dataset.id = book.id;

    bookDiv.innerHTML = `
      <div>
        <h2>${book.title}</h2>
        <p>by ${book.author}</p>
        <p>${book.pages} pages</p>
        <div class="read-status ${book.read ? "read" : "unread"}">
          ${book.read ? "✓ Read" : "○ Not Read"}
        </div>
      </div>
      <div class="book-actions">
        <button class="read">${book.read ? "Mark Unread" : "Mark Read"}</button>
        <button class="remove">Remove</button>
      </div>
    `;

    bookContainer.appendChild(bookDiv);
  });
}

addBookToLibrary("Book 1", "Author 1", 100, true);
addBookToLibrary("Book 2", "Author 2", 200, false);
// addBookToLibrary("Book 3", "Author 3", 300, true);
// addBookToLibrary("Book 4", "Author 4", 400, true);
// addBookToLibrary("Book 5", "Author 5", 500, false);
// addBookToLibrary("Book 6", "Author 6", 600, true);

displayBooks();
function addHandler(e) {
  e.preventDefault();
  form0.classList.toggle("hidden");
}
const btnAddBook = document.querySelector("#addBook");
const form0 = document.querySelector("#form");
btnAddBook.addEventListener("click", addHandler);
