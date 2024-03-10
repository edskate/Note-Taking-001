// app.js
function saveNote() {
    const noteInput = document.getElementById("noteInput").value;
    if (noteInput.trim() !== "") {
        const noteList = document.getElementById("noteList");
        const li = document.createElement("li");
        li.textContent = noteInput;
        noteList.appendChild(li);
        // You can save the note to the server or local storage here
    }
}

