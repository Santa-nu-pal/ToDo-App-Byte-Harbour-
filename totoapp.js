let inputelement = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

function clicked(){
    if (inputelement.value == "") {
        alert("Cannot add empty task!!");
    }
    else {
        let li = document.createElement("li");
        let deletbutton = document.createElement("button");
        deletbutton.innerText = "Delete"
        deletbutton.classList.add("deletebutton");
        li.innerText = inputelement.value;
        ul.appendChild(li);
        li.appendChild(deletbutton);
        inputelement.value = "";
    }
}
button.addEventListener("click", clicked);



inputelement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        clicked();
    }
});



ul.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){
let liparent=event.target.parentElement;
liparent.remove();
}
});