// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector('.btn');
// let notes = document.querySelectorAll(".input-box");

// function showNotes() {
//     notesContainer.innerHTML = localStorage.getItem("notes")
// }
// showNotes();

// function updateStorage() {
//     localStorage.setItem("notes", notesContainer.innerHTML);
// }


// createBtn.addEventListener("click", () => {
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className = 'input-box';
//     inputBox.setAttribute("contenteditable", "true");
//     img.src = "delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// })

// notesContainer.addEventListener('click', function (e) {
//     if (e.target.tagName === 'IMG') {
//         e.target.parentElement.remove()
//         updateStorage()
//     }
//     else if (e.target.tagName === "p") {
//         notes = document.querySelectorAll('.input-box')
//         notes.forEach(nt => {
//             nt.onkeyup = function () {
//                 updateStorage();
//             }
//         })
//     }
// })

// document.addEventListener("keydown", event => {
//     if (event.key === "Enter") {
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })



const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector('.btn');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = 'input-box';
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

    // Update the 'notes' collection after creating a new input-box
    notes = document.querySelectorAll('.input-box');
});

notesContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
