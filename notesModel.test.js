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

  it('Adds multiple notes correctly', () => {
    const notes = new notesModel;
    notes.addNote('Buy milk');
    notes.addNote('Hang out the washing');
    expect(notes.getNotes()).toEqual(['Buy milk', 'Hang out the washing']);
  })

  it('Resets the list to empty when reset method is called', () => {
    const notes = new notesModel;
    notes.addNote('Buy milk');
    notes.addNote('Hang out the washing');
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  })
})
