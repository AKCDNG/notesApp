class notesModel {

  constructor() {
    this.notesList = []
  }
  
  getNotes() {
    return this.notesList;
  }

  addNote(item) {
    this.notesList.push(item)
  }

  reset () {
    this.notesList = []
  }

  setNotes(notes) {
    notes.forEach(note => this.notesList.push(note))
  }
}

module.exports = notesModel;