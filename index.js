const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesApi = require("./notesApi");

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

// model.addNote('This is an example note');

console.log(model.getNotes());

// view.displayNotes();

api.loadNotes((notes) => {
  model.setNotes(notes);
  view.displayNotes();
});
