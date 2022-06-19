const notesModel = require('./notesModel');

describe("Notes", () => {
  it('returns an empty array when started', () => {
    const notes = new notesModel;
    expect(notes.getNotes()).toEqual([]);
  })

  it('Adds a note when addNote is called', () => {
    const notes = new notesModel;
    notes.addNote('Buy milk');
    expect(notes.getNotes()).toEqual(['Buy milk'])
  })
})
