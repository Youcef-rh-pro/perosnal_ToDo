
class note {
  constructor(title, description, importance, duDate) {
    this.title = title;
    this.description = description;
    this.importance = importance;
  }
render() {
    const noteEl = document.createElement("li");
    noteEl.className = "note-item";
    noteEl.innerHTML = `
    <div >
    <h2>${this.title}</h2>
    <h3>${this.description}</h3>
    <button>delete</button>
    </div>
    `;
    return noteEl
}}
class noteItems {
  render() {
    const noteEl = document.createElement("li");
    noteEl.className = "note-item";
    noteEl.innerHTML = `
    <div >
    <h2>${this.title}</h2>
    <h3>${this.description}</h3>
    <button>delete</button>
    </div>
    `;
    return noteEl
}
  
  }

class noteList{

render(notes){
//  const  getData= JSON.parse(localStorage.getItem('allNotes'))
const noteGrid =document.getElementById("noteGrid")
noteGrid.innerHTML=''
// const noteItem = new noteItems
  notes.forEach(element => {
    noteGrid.append(newNote.render(element))
  })
}
}
class app {

  
  noteGet() {
    
  const  notes = [];const mydata= new noteList 
   const confirmation= document.getElementById("confirmAddNote")
   confirmation.addEventListener("click", () => {
     const noteDescription = document.getElementById("notDescriptionInput").value;
     const noteName = document.getElementById("noteNameInput").value;
   
       
       notes.push({noteName, noteDescription});
       localStorage.setItem('allNotes',JSON.stringify(notes) )
     
        mydata.render(notes)
       $('#addNoteModal').modal('hide');
       document.getElementById('noteNameInput').value = '';
       document.getElementById('notDescriptionInput').value = '';
      });
      
     
    }
  }
  const myApp=new app()
  myApp.noteGet()
 const newNote = new note