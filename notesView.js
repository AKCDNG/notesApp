class notesView {
  
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.noteInput = document.querySelector('#submit-note-button')

    this.noteInput.addEventListener('click', () => {
      const note = document.querySelector('#note-text').value;
      this.submitNote(note);
    })
  }

  submitNote(note) {
    this.model.addNote(note);
    this.displayNotes();
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
    this.model.reset();
  }

}

module.exports = notesView;