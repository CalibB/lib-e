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

})

function addBookToLibrary(formDataArray) {
    const newBook = new Book(formDataArray[0], formDataArray[1], formDataArray[2], formDataArray[3], formDataArray[4]);
    myLibrary.push(newBook);
};