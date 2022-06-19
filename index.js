console.log('App is running');

const notesModel = require('./notesModel');

const notes = new notesModel
console.log(notes.getNotes())

