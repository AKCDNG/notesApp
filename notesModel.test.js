const notesModel = require('./notesModel');

describe("Notes", () => {
  it('returns an empty array when started', () => {
    const notes = new notesModel;
    expect(notes.getNotes()).toEqual([]);
  })
})
