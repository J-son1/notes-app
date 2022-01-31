const NotesModel = require("./notesModel");

let notesModel;
beforeEach(() => {
  model = new NotesModel();
});

describe("NotesModel", () => {
  it("starts with no notes", () => {
    expect(model.getNotes()).toEqual([]);
  });

  it("adds a note", () => {
    model.addNote('Buy bread');

    expect(model.getNotes()).toEqual(['Buy bread']);
  });

  it("returns multiple notes", () => {
    model.addNote('Buy bread');
    model.addNote('Go for a run');

    expect(model.getNotes()).toEqual(['Buy bread', 'Go for a run']);
  });

  it("resets the list of notes", () => {
    model.addNote('Buy bread');
    model.addNote('Go for a run');

    model.reset();

    expect(model.getNotes()).toEqual([]);
  });
});