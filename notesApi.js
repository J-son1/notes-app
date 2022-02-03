class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(res => res.json())
      .then(data => {
        callback(data);
      });
  }
}

module.exports = NotesApi;
