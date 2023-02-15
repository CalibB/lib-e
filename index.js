let myLibrary = [];

function Book(title, author, pages, description, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.haveRead = haveRead;
}

// Get form values to be transferred into array

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    new FormData(form);
});

form.addEventListener('formdata', (e) => {
    const formData = e.formData;

    let bookArr = [];

    for (let value of formData.values()) {
        bookArr.push(value);
    };

    addBookToLibrary(bookArr);
    displayBooks();

})

function addBookToLibrary(formDataArray) {
    const newBook = new Book(formDataArray[0], formDataArray[1], formDataArray[2], formDataArray[3], formDataArray[4]);
    myLibrary.push(newBook);
};

const main = document.querySelector('main');

function displayBooks() {
    const book = document.createElement('div');
    const title = document.createElement('h1');
    const author = document.createElement('h3');
    const pages = document.createElement('p');
    const descrip = document.createElement('p');
    const read = document.createElement('p');
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Remove Book';

    for (let value of myLibrary) {
        title.textContent = value.title;
        author.textContent = value.author;
        pages.textContent = value.pages;
        descrip.textContent = value.description;
        read.textContent = value.read;
    };

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(descrip);
    book.appendChild(read);
    book.appendChild(deleteBtn);

    

    main.appendChild(book);
};