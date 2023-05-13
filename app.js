var ulParent = document.getElementById("ulParent");
var input = document.getElementById("todoInput");

function addTodo() {
    if (!input.value) {
        alert("Enter todo please!")
        return
    };

    var liElement = document.createElement("li");
    var liTxt = document.createTextNode(input.value);
    liElement.appendChild(liTxt);
    liElement.className = "list-group-item d-flex justify-content-between align-items-center border border-success border-top-0 border-end-0 border-start-0 bg-dark text-white";

    var div = document.createElement("div");
    div.className = "bg-transparent"
    var editBtn = document.createElement("button");
    var delBtn = document.createElement("button");
    
    editBtn.innerHTML = "Edit";
    editBtn.className = "btn btn-info ";
    delBtn.innerHTML = "Delete";
    delBtn.className = "btn btn-danger ms-3";

    editBtn.setAttribute("onclick","editTodo(this)");
    delBtn.setAttribute("onclick","deleteTodo(this)");

    div.appendChild(editBtn);
    div.appendChild(delBtn);

    liElement.appendChild(div);

    ulParent.appendChild(liElement);

    input.value = ""
};

function editTodo(el){

    var li = el.parentNode.parentNode
  
    var placeHolder = li.firstChild.nodeValue
    var editValue = prompt("Edit your task...", placeHolder)
  
    li.firstChild.nodeValue = editValue;

};

function deleteTodo(elem){
    elem.parentNode.parentNode.remove()

};
  
function deleteAll(){
    ulParent.innerHTML = ""

};