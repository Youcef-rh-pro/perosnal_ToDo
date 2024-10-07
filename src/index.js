class Note {
  constructor(title, description,id ,importance, duDate) {
    this.id=id;
    this.title = title;
    this.description = description;
    this.importance = importance;
  }
}
class NoteItems {
  render(note) {
    const noteEl = document.createElement("div");
    // noteEl.className = " card mb-3";
    noteEl.innerHTML = `
   <div class="card bg-white m-2  text-dark mb-3">
  <div class="card-body">
    <h2 class="card-title">${note.title}</h2>
    <h3 class="card-text">${note.description}</h3>
    <button class="btn btn-danger delete-btn">Delete</button>
  </div>
</div>
    `;
    myApp.addDeleteEvent(noteEl, note);
    return noteEl;
  }
}

class NoteList {
  update() {
    const noteGrid = document.getElementById("noteGrid");
    noteGrid.innerHTML = "";
    this.render(noteGrid);
  }
  render(grid) {
    const notes = JSON.parse(localStorage.getItem("allNotes") || []);
    if (notes.length === 0) {
      const noNoteEl = document.createElement("div");
      // noteEl.className = " card mb-3";
      noNoteEl.innerHTML = `
 <div class="card bg-white m-2  text-dark mb-3">
<div class="card-body">
  <h2 class="card-title">theres no note</h2>
  <h3 class="card-text">add note by pressing add Note</h3>
</div>
</div>
  `;
      grid.append(noNoteEl);
      return;
    }

    notes.forEach((note) => {
      const noteItem = new NoteItems();
      grid.append(noteItem.render(note));
    
    });
  }
}

class app {
  constructor() {
    this.notes = JSON.parse(localStorage.getItem("allNotes") || []);
  }

  init() {
    const noteList = new NoteList();
    noteList.update();
    const confirmation = document.getElementById("confirmAddNote");
    let id=0
    confirmation.addEventListener("click", () => {
      const noteDescription = document.getElementById(
        "notDescriptionInput"
      ).value;
      const noteName = document.getElementById("noteNameInput").value;
      id++
      const newNote = new Note(noteName, noteDescription,id);
      
      this.notes.push(newNote);
      this.updateLocalStorage();

      $("#addNoteModal").modal("hide");
      document.getElementById("noteNameInput").value = "";
      document.getElementById("notDescriptionInput").value = "";

      noteList.update();
    });
  }
  updateLocalStorage() {
    localStorage.setItem("allNotes", JSON.stringify(this.notes));
  }
  // event for deletion called inside note items called with the current nteEl and the note objc
 addDeleteEvent(noteEl, clickedNote) {
    // Select the delete button inside the note element
    const deleteButton = noteEl.querySelector(".delete-btn");

    // Add the event listener for the delete button
    deleteButton.addEventListener("click", () => {
      noteEl.remove(); // Remove the note from the DOM
      this.notes.splice(this.notes.findIndex(note=>note.id !== clickedNote.id),1)
      this.updateLocalStorage()
    });
  } 
}
const myApp = new app();
myApp.init();
//TO DO add project logic that dynamicly work with local storage each project with its own storage
// use init with passing the project name dynamicly