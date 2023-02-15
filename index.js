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
    // Override default behavior of a form
    e.preventDefault();

    // Create a formData object to access values
    new FormData(form);
});

form.addEventListener('formdata', (e) => {
    const formData = e.formData;

    // Test to see if we are getting form data
    console.log(`${formData.get('title')}, ${formData.get('author')}, ${formData.get('pages')}, ${formData.get('description')}, ${formData.get('read')}`);
})

function addBookToLibrary() {

}
