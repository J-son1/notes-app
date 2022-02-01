const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const model = new NotesModel();
model.addNote('This is an example note');

console.log(model.getNotes());

const view = new NotesView(model);

view.displayNotes();
