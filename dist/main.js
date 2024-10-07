/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Note {\n  constructor(title, description,id ,importance, duDate) {\n    this.id=id;\n    this.title = title;\n    this.description = description;\n    this.importance = importance;\n  }\n}\nclass NoteItems {\n  render(note) {\n    const noteEl = document.createElement(\"div\");\n    // noteEl.className = \" card mb-3\";\n    noteEl.innerHTML = `\n   <div class=\"card bg-white m-2  text-dark mb-3\">\n  <div class=\"card-body\">\n    <h2 class=\"card-title\">${note.title}</h2>\n    <h3 class=\"card-text\">${note.description}</h3>\n    <button class=\"btn btn-danger delete-btn\">Delete</button>\n  </div>\n</div>\n    `;\n    myApp.addDeleteEvent(noteEl, note);\n    return noteEl;\n  }\n}\n\nclass NoteList {\n  update() {\n    const noteGrid = document.getElementById(\"noteGrid\");\n    noteGrid.innerHTML = \"\";\n    this.render(noteGrid);\n  }\n  render(grid) {\n    const notes = JSON.parse(localStorage.getItem(\"allNotes\") || []);\n    if (notes.length === 0) {\n      const noNoteEl = document.createElement(\"div\");\n      // noteEl.className = \" card mb-3\";\n      noNoteEl.innerHTML = `\n <div class=\"card bg-white m-2  text-dark mb-3\">\n<div class=\"card-body\">\n  <h2 class=\"card-title\">theres no note</h2>\n  <h3 class=\"card-text\">add note by pressing add Note</h3>\n</div>\n</div>\n  `;\n      grid.append(noNoteEl);\n      return;\n    }\n\n    notes.forEach((note) => {\n      const noteItem = new NoteItems();\n      grid.append(noteItem.render(note));\n    \n    });\n  }\n}\n\nclass app {\n  constructor() {\n    this.notes = JSON.parse(localStorage.getItem(\"allNotes\") || []);\n  }\n\n  init() {\n    const noteList = new NoteList();\n    noteList.update();\n    const confirmation = document.getElementById(\"confirmAddNote\");\n    let id=0\n    confirmation.addEventListener(\"click\", () => {\n      const noteDescription = document.getElementById(\n        \"notDescriptionInput\"\n      ).value;\n      const noteName = document.getElementById(\"noteNameInput\").value;\n      id++\n      const newNote = new Note(noteName, noteDescription,id);\n      \n      this.notes.push(newNote);\n      this.updateLocalStorage();\n\n      $(\"#addNoteModal\").modal(\"hide\");\n      document.getElementById(\"noteNameInput\").value = \"\";\n      document.getElementById(\"notDescriptionInput\").value = \"\";\n\n      noteList.update();\n    });\n  }\n  updateLocalStorage() {\n    localStorage.setItem(\"allNotes\", JSON.stringify(this.notes));\n  }\n  // event for deletion called inside note items called with the current nteEl and the note objc\n addDeleteEvent(noteEl, clickedNote) {\n    // Select the delete button inside the note element\n    const deleteButton = noteEl.querySelector(\".delete-btn\");\n\n    // Add the event listener for the delete button\n    deleteButton.addEventListener(\"click\", () => {\n      noteEl.remove(); // Remove the note from the DOM\n      this.notes.splice(this.notes.findIndex(note=>note.id !== clickedNote.id),1)\n      this.updateLocalStorage()\n    });\n  } \n}\nconst myApp = new app();\nmyApp.init();\n\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;