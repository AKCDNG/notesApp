console.log('App is running');

const notesModel = require('./notesModel');
const notesView = require('./notesView');

const notes = new notesModel
const view = new notesView(notes)

console.log(notes.getNotes())

notes.addNote('This is an example note');
view.displayNotes();
