const item = document.querySelector(".item");
const elements = document.querySelectorAll(".placeholder");
const rowElements = document.querySelectorAll(".col-header");

elements.forEach(element => {
    element.addEventListener("dragover", dragOver);
    element.addEventListener("dragenter", dragEnter);
    element.addEventListener("dragleave", dragLeave);
    element.addEventListener("drop", dragDrop);
});

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);

function dragStart(event){
    event.target.classList.add("hold");
    setTimeout(() => {
        event.target.classList.add("removed");
    }, 0);
}

function dragEnd(event){
    event.target.classList.remove("hold");
    event.target.classList.remove("removed");
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.target.classList.add("over");
}

function dragLeave(event) {
    event.target.classList.remove("over");
}

function dragDrop(event) {
    event.target.append(item);
    event.target.classList.remove("over");
}