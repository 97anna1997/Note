const btn = document.getElementById('btn')
const newNotes = document.getElementById('newNotes')

btn.addEventListener("click", function () {
    const newNote = document.createElement("div");
    newNote.classList.add("noteItem");
    newNote.textContent = "New Note";

    document.body.appendChild(newNote);
});


function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}


