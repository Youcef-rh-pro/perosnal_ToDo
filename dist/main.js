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

eval("\n\nclass note {\n    constructor(title, description, importance, duDate) {\n      this.title = title;\n      this.description = description;\n      this.importance = importance;\n    }\n  }\n  class noteItems {\n    constructor(note) {\n      note;\n    }\n    render() {\n      const noteEl = document.createElement(\"li\");\n      noteEl.className = \"note-item\";\n      noteEl.innerHTML = `\n      <div >\n      <h2>${this.note.title}</h2>\n      <h3>${this.note.description}</h3>\n      <button>delete</button>\n      </div>\n      `;\n    }\n  }\n  class noteList{\n\n  }\n  class app {\n    constructor(){\n    this.notes = [];\n    }\n   noteGet() {\n     const confirmation= document.getElementById(\"confirmAddNote\")\n     const noteDescription = document.getElementById(\"notDescriptionInput\").value;\n     const noteName = document.getElementById(\"noteNameInput\").value;\n       confirmation.addEventListener(\"click\", () => {\n     \n     \n        const addNoteModalElement = document.getElementById('addNoteModal');\n\n    const addNoteModal = new bootstrap.Modal(addNoteModalElement);\n    addNoteModal.hide();\n\n        this.notes.push(new note(noteName, noteDescription));\n       return localStorage.setItem('allNotes',JSON.stringify(this.notes) )\n      });\n  \n    }\n  }\n  const myApp=new app()\n  myApp.noteGet()\n  const getData= JSON.parse(localStorage.getItem('allNotes'))\n  console.log(getData)\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

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