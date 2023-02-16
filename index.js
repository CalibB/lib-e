const myLibrary = [];

function Book(title, author, pages, description, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.haveRead = haveRead;
}

// Get form values to be transferred into array

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  new FormData(form);
});

form.addEventListener("formdata", (e) => {
  const formData = e.formData;

  const bookArr = [];

  for (let value of formData.values()) {
    bookArr.push(value);
  }

  addBookToLibrary(bookArr);
  displayBooks();
});

function addBookToLibrary(formDataArray) {
  const newBook = new Book(
    formDataArray[0],
    formDataArray[1],
    formDataArray[2],
    formDataArray[3],
    formDataArray[4]
  );
  myLibrary.push(newBook);
}

const main = document.querySelector("main");

function displayBooks() {
  const book = document.createElement("div");
  const title = document.createElement("h1");
  const author = document.createElement("h3");
  const pages = document.createElement("p");
  const descrip = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const readInput = document.createElement("input");

  const image = document.createElement("img");
  image.setAttribute("src", "./assets/book-open-variant.svg");
  image.setAttribute("alt", "book icon");

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");

  readInput.setAttribute("type", "checkbox");
  readInput.setAttribute("name", "haveRead");

  let count = 0;

  for (let value of myLibrary) {
    title.textContent = value.title;
    author.textContent = `By ${value.author}`;
    pages.textContent = `${value.pages} pages`;
    descrip.textContent = value.description;
    book.dataset.index = count++;
    readInput.checked = value.haveRead;
  }

  readInput.addEventListener("input", () => {
    let position = readInput.parentNode.dataset.index;
    if (readInput.checked === true) {
      myLibrary[position].haveRead = true;
    } else {
      myLibrary[position].haveRead = false;
    }
  });

  deleteBtn.textContent = "Remove Book";
  deleteBtn.addEventListener("click", () => {
    myLibrary.splice(book.dataset.index, 1);
    main.removeChild(div2.parentNode);
  });

  book.appendChild(image);
  book.appendChild(div1);
  div1.appendChild(title);
  div1.appendChild(author);
  book.appendChild(pages);
  book.appendChild(descrip);
  book.appendChild(div2);
  div2.appendChild(readInput);
  div2.appendChild(deleteBtn);
  book.classList.add("book");

  main.appendChild(book);
}

const backBtn = document.querySelector(".back__btn");
const sidebarDiv = document.querySelector(".sidebar > div");
const sidebarBtn = document.querySelector(".sidebar > div > button");

form.style.display = "none";
backBtn.style.display = "none";

sidebarBtn.addEventListener("click", () => {
  sidebarDiv.style.display = "none";
  form.style.display = "flex";
  backBtn.style.display = "block";
});

backBtn.addEventListener("click", () => {
  form.style.display = "none";
  sidebarDiv.style.display = "flex";
  backBtn.style.display = "none";
});
