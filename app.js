// var arrayOfBookName = [];
// var arrayOfIsbn = [];;
// var inputBar1 = document.getElementById("input-book-name");
// var inputBar2 = document.getElementById("input-isbn");
// var bookList = document.getElementById("book-list");
// var bookName = document.getElementById("book-name");
// var isbn = document.getElementById("isbn");
// var btnSubmit = document.getElementById("btn-submit");
// var btnUpdate = document.getElementById("btn-update");
// var backDrop = document.getElementById("back-drop");
// var updateBook = document.getElementById("update-book-name");
// var updateIsbn = document.getElementById("update-isbn");
// var updateBtn = document.getElementById("update-btn");
// var Index = 0;

// var todo = {
//   bookName : "name",
//   ISBN : "12134-34343-34434"
// }

// btnSubmit.addEventListener("click", (e) => {
//     if (inputBar1.value != "" && inputBar2.value != "") {
//         arrayOfBookName.push(inputBar1.value);
//         arrayOfIsbn.push(inputBar2.value);
//     } else {
//         alert("Fill in all fields!");
//     }
//     createUI();
//     inputBar1.value = "";
//     inputBar2.value = "";
// })

// createUI();

// updateBtn.addEventListener("click", (e) => {
//   Update(Index, updateBook.value);
//   Update(Index, updateIsbn.value);
//   backDrop.style.display = "none";
//   createUI();
// }) 

// function Update(index, value){
//   arrayOfBookName[index] = value;
//   arrayOfIsbn[index] = value;
// }

// function Delete(index) { 
//     let newArray1 = [];
//     for (let i = 0; i < arrayOfBookName.length; i++) {
//       if ( i != index ) {
//         newArray1.push(arrayOfBookName[i]);
//       }
//     }
//     arrayOfBookName = newArray1;
//     let newArray2 = [];
//     for (let i = 0; i < arrayOfIsbn.length; i++) {
//       if ( i != index ) {
//         newArray2.push(arrayOfIsbn[i]);
//       }
//     }
//     arrayOfIsbn = newArray2;
//   }

// function createUI() {
//     bookName.innerHTML = "";
//     isbn.innerHTML = "";
//     for (let i = 0; i < arrayOfBookName.length; i++) {
//         let rawData1 = `<div class="book-name">${arrayOfBookName[i]}</div>`;
//         bookName.innerHTML = bookName.innerHTML + rawData1;
//     }
//     for (let i = 0; i < arrayOfIsbn.length; i++) {
//         let rawData2 = `<div class="isbn">${arrayOfIsbn[i]}<button index="${i}" class="btn-delete">X</button><button index="${i}" class="btn-update">UPDATE</button></div>`;
//         isbn.innerHTML = isbn.innerHTML + rawData2;
//     }
// }

// bookList.addEventListener('click', (e) => {
//     if (e.target.classList.contains("btn-delete")) {
//       let index = +e.target.getAttribute("index");
//       Delete(index);
//       createUI();
//     }
//     if (e.target.classList.contains("btn-update")) {
//       let index = +e.target.getAttribute("index");
//       Index = +index;
//       backDrop.style.display = "flex";
//       updateBook.value = arrayOfBookName[+index];
//       updateIsbn.value = arrayOfIsbn[+index];
//       createUI();
//     }
// })

var arrayOfTodo = [];
var inputBar1 = document.getElementById("input-add");
var list = document.getElementById("list");
var wrapper = document.getElementById("wrapper");
var text = document.getElementById("text");
var addBtn = document.getElementById("add-btn");
var backDrop = document.getElementById("back-drop");
var updateList = document.getElementById("update-list");
var updateBtn = document.getElementById("update-btn");
var Index = 0;

addBtn.addEventListener("click", (e) => {
    if (inputBar1.value != "") {
        arrayOfTodo.push(inputBar1.value);

    } else {
        alert("Fill in all fields!");
    }
    createUI();
    inputBar1.value = "";
})

createUI();

updateBtn.addEventListener("click", (e) => {
    Update(Index, updateList.value);
    backDrop.style.display = "none";
    createUI();
}) 

function Update(index, value){
    arrayOfTodo[index] = value;
}


function Delete(index) { 
    let newArray1 = [];
    for (let i = 0; i < arrayOfTodo.length; i++) {
      if ( i != index ) {
        newArray1.push(arrayOfTodo[i]);
      }
    }
    arrayOfTodo = newArray1;
}

function createUI() {
    list.innerHTML = "";
    for (let i = 0; i < arrayOfTodo.length; i++) {
        let rawData1 = `<div id="wrapper">
        <div id="text">${arrayOfTodo[i]}</div>
        <div class="edit flex" index="${i}"><i class="fas fa-pencil-alt"></i></div>
        <div class="delete flex" index="${i}"><i class="fas fa-trash-alt"></i></div>
        </div>`;
        list.innerHTML = list.innerHTML + rawData1;
    }
}

list.addEventListener('click', (e) => {
    if (e.target.classList.contains("delete")) {
      let index = +e.target.getAttribute("index");
      Delete(index);
      createUI();
    }
    if (e.target.classList.contains("edit")) {
      let index = +e.target.getAttribute("index");
      Index = +index;
      backDrop.style.display = "flex";
      updateList.value = arrayOfTodo[+index];
      createUI();
    }
})







