

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
  class noteList{
  data=[]
  render(){
   const  getData= JSON.parse(localStorage.getItem('allNotes'))
this.data.push(getData)
    console.log(this.data)
  }
  }
  class app {
    constructor(){
    this.notes = [];
    }
   noteGet() {
     const confirmation= document.getElementById("confirmAddNote")
     const noteDescription = document.getElementById("notDescriptionInput").value;
     const noteName = document.getElementById("noteNameInput").value;
       confirmation.addEventListener("click", () => {
     
         $('#addNoteModal').modal('hide');
         
         //  document.getElementById('noteNameInput').value = '';
         // document.getElementById('notDescriptionInput').value = '';
         this.notes.push(new note(noteName, noteDescription));
        return localStorage.setItem('allNotes',JSON.stringify(this.notes) )
      });
  
    }
  }
  const myApp=new app()
  myApp.noteGet()
const mydata= new noteList
mydata.render()