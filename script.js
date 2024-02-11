const addBtn = document.querySelector('#add-btn');

const myLibrary = [];

class Book{
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

Book.prototype.changeRead = function() {
    this.read = !this.read;
}

function changeRead(index) {
    myLibrary[index].changeRead();
    console.log(myLibrary)
    appendToDom();
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    appendToDom();
}

function appendToDom() {
    const libraryDiv = document.querySelector('#library');
    libraryDiv.innerHTML = '';
    
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookDiv = document.createElement('div');
        bookDiv.setAttribute('class', 'book-div');
        bookDiv.innerHTML = `
            <div class='card-head'>
                <h3 class='title'>${book.title}</h3>
                <h5 class='author'>${book.author}</h5>
            </div>
            <div class='card-body'>
                <p> ${book.pages} pages</p>
                <p class='read-status'>${book.read ? 'Read' : 'Not Read Yet'}</p>
                <button class='change-read' onclick='changeRead(${i})'>Change Read Status</button>
                <button class='remove-btn' onclick='removeBook(${i})'>Remove</button>
            </div>`;
        libraryDiv.appendChild(bookDiv);
    }
}

addBtn.addEventListener('click', function(e) {
    e.preventDefault();
    addBookToLibrary();
})

function removeBook(index) {
    myLibrary.splice(index, 1);
    appendToDom();
}