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

eval("\n\nclass note {\n    constructor(title, description, importance, duDate) {\n      this.title = title;\n      this.description = description;\n      this.importance = importance;\n    }\n  }\n  class noteItems {\n    constructor(note) {\n      note;\n    }\n    render() {\n      const noteEl = document.createElement(\"li\");\n      noteEl.className = \"note-item\";\n      noteEl.innerHTML = `\n      <div >\n      <h2>${this.note.title}</h2>\n      <h3>${this.note.description}</h3>\n      <button>delete</button>\n      </div>\n      `;\n    }\n  }\n  class app {\n    constructor(){\n  \n    this.notes = [];\n    }\n   noteGet() {\n     const confirmation= document.getElementById(\"confirmAddNote\")\n       confirmation.addEventListener(\"click\", () => {\n        const noteName = document.getElementById(\"noteNameInput\").value;\n        const noteDescription = document.getElementById(\n          \"notDescriptionInput\").value;\n  \n        this.notes.push(new note(noteName, noteDescription));\n       return localStorage.setItem('allNotes',JSON.stringify(this.notes) )\n      });\n    }\n  }\n  const myApp=new app()\n  myApp.noteGet();\n  console.log('hello worl')\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

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