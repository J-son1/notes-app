const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();

describe('NotesApi', () => {
  it('calls fetch and displays notes on the page', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['This note is coming from the server']
    }));

    api.loadNotes((response) => {
      expect(response.notes[0]).toBe('This note is coming from the server');
    });
  });
});
