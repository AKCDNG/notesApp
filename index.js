console.log('App is running');

const notesApi = require('./notesApi')
const notesModel = require('./notesModel');
const notesView = require('./notesView');

const api = new notesApi
const model = new notesModel
const view = new notesView(model, api)


view.displayNotesFromApi();

view.displayNotes()
