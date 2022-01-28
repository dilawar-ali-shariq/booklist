var arrayOfBookName = [];
var arrayOfIsbn = [];;
var inputBar1 = document.getElementById("input-book-name");
var inputBar2 = document.getElementById("input-isbn");
var bookList = document.getElementById("book-list");
var bookName = document.getElementById("book-name");
var isbn = document.getElementById("isbn");
var btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", (e) => {
    if (inputBar1.value != "" && inputBar2.value != "") {
        arrayOfBookName.push(inputBar1.value);
        arrayOfIsbn.push(inputBar2.value);
    } else {
        alert("Fill in all fields!");
    }
    createUI();
    inputBar1.value = "";
    inputBar2.value = "";
})

createUI();

function Delete(index) { 
    let newArray1 = [];
    for (let i = 0; i < arrayOfBookName.length; i++) {
      if ( i != index ) {
        newArray1.push(arrayOfBookName[i]);
      }
    }
    arrayOfBookName = newArray1;
    let newArray2 = [];
    for (let i = 0; i < arrayOfIsbn.length; i++) {
      if ( i != index ) {
        newArray2.push(arrayOfIsbn[i]);
      }
    }
    arrayOfIsbn = newArray2;
  }

function createUI() {
    bookName.innerHTML = "";
    isbn.innerHTML = "";
    for (let i = 0; i < arrayOfBookName.length; i++) {
        let rawData1 = `<div class="book-name">${arrayOfBookName[i]}</div>`;
        bookName.innerHTML = bookName.innerHTML + rawData1;
    }
    for (let i = 0; i < arrayOfIsbn.length; i++) {
        let rawData2 = `<div class="isbn">${arrayOfIsbn[i]}<button index="${i}" class="btn-delete">X</button><button index="${i}" class="btn-update">UPDATE</button></div>`;
        isbn.innerHTML = isbn.innerHTML + rawData2;
    }
}

bookList.addEventListener('click', (e) => {
    if (e.target.classList.contains("btn-delete")) {
      let index = +e.target.getAttribute("index");
      Delete(index);
      createUI();
    }
})









