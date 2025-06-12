function addNote() {
  const container = document.getElementById("notes-container");

  const noteBox = document.createElement("div");
  noteBox.className = "note";


  noteBox.innerHTML = `
    <textarea placeholder="Write your note..."></textarea>
  `;

 
  container.insertBefore(noteBox, container.lastElementChild);
}