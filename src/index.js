

class note {
    constructor(title, description, importance, duDate) {
      this.title = title;
      this.description = description;
      this.importance = importance;
    }
  }
  class noteItems {
    constructor(note) {
      note;
    }
    render() {
      const noteEl = document.createElement("li");
      noteEl.className = "note-item";
      noteEl.innerHTML = `
      <div >
      <h2>${this.note.title}</h2>
      <h3>${this.note.description}</h3>
      <button>delete</button>
      </div>
      `;
    }
  }
  class app {
    constructor(){
  
    this.notes = [];
    }
   noteGet() {
     const confirmation= document.getElementById("confirmAddNote")
       confirmation.addEventListener("click", () => {
        const noteName = document.getElementById("noteNameInput").value;
        const noteDescription = document.getElementById(
          "notDescriptionInput").value;
  
        this.notes.push(new note(noteName, noteDescription));
       return localStorage.setItem('allNotes',JSON.stringify(this.notes) )
      });
    }
  }
  const myApp=new app()
  myApp.noteGet();
  console.log('hello worl')