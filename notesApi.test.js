const notesApi = require('./notesApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('Notes API class', () => {
  it('calls fetch and loads notes', async () => {
    const api = new notesApi();
    fetch.mockResponseOnce(JSON.stringify({
      note: 'This note is coming from the server',
    }));

    api.loadNotes('This note is coming from the server', (note) => {
      expect(note).toBe('This note is coming from the server');
    });
  });
});