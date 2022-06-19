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
}

module.exports = notesModel;