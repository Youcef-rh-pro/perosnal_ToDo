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

eval("\nclass note {\n  constructor(title, description, importance, duDate) {\n    this.title = title;\n    this.description = description;\n    this.importance = importance;\n  }\n\n}\nclass noteItems {\n  render(element) {\n    const noteEl = document.createElement(\"div\");\n    // noteEl.className = \" card mb-3\";\n    noteEl.innerHTML = `\n   <div class=\"card bg-white m-2  text-dark mb-3\">\n  <div class=\"card-body\">\n    <h2 class=\"card-title\">${element.noteName}</h2>\n    <h3 class=\"card-text\">${element.noteDescription}</h3>\n    <button class=\"btn btn-danger\">Delete</button>\n  </div>\n</div>\n    `;\n    return noteEl\n}\n  \n  }\n\nclass noteList{\nupdate(){\n  const noteGrid =document.getElementById(\"noteGrid\")\n  noteGrid.innerHTML=''\n this.render(noteGrid)\n}\nrender(grid){\n const  getData= JSON.parse(localStorage.getItem('allNotes'))\n console.log(getData)\ngetData.forEach(element => {\n    const noteItem = new noteItems\n    grid.append(noteItem.render(element))\n  })\n}\n}\nclass app {\n\n  \n  noteGet() {\n    const  notes = [];\n    const mydata= new noteList \n     mydata.update()\n   const confirmation= document.getElementById(\"confirmAddNote\")\n   confirmation.addEventListener(\"click\", () => {\n     const noteDescription = document.getElementById(\"notDescriptionInput\").value;\n     const noteName = document.getElementById(\"noteNameInput\").value;\n   \n       \n     \n     notes.push({noteName, noteDescription});\n     $('#addNoteModal').modal('hide');\n     document.getElementById('noteNameInput').value = '';\n     document.getElementById('notDescriptionInput').value = '';\n     \n     mydata.update()\n    });\n    \n  }\n  noteAdd(){\n    const notes= this.noteGet\n      localStorage.setItem('allNotes',JSON.stringify(notes) )\n\n    }\n  }\n  const myApp=new app()\n  myApp.noteGet()\n\n const newNote = new note\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

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