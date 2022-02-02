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
        <div class="edit flex" index="${i}"><i index="${i}" class="fas fa-pencil-alt"></i></div>
        <div class="delete flex" index="${i}"><i index="${i}" class="fas fa-trash-alt"></i></div>
        </div>`;
        list.innerHTML = list.innerHTML + rawData1;
    }
}

list.addEventListener('click', (e) => {
    if (e.target.classList.contains("delete") || e.target.classList.contains("fa-trash-alt")) {
      let index = +e.target.getAttribute("index");
      Delete(index);
      createUI();
    }
    if (e.target.classList.contains("edit") || e.target.classList.contains("fa-pencil-alt")) {
      let index = +e.target.getAttribute("index");
      Index = +index;
      backDrop.style.display = "flex";
      updateList.value = arrayOfTodo[+index];
      createUI();
    }
})







