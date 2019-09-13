const fs = require("fs");

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json"));
  } catch (err) {
    return [];
  }
};
var addingNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var double = notes.filter(note => note.title === title);
  if (double.length === 0) {
   
    notes.push(note);
    fs.writeFileSync("notes.json", JSON.stringify(notes));
    logNote(note);
  } else {
    console.log("Title already exists.");
  }
};
var removeNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title !== title);
  fs.writeFileSync("notes.json", JSON.stringify(filteredNotes));
};
var readNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note =>note.title === title);
  logNote(filteredNotes[0]);
};
var getAll = () => {
  var numb=0;
  var notes = fetchNotes();
  notes.map((note,i) =>{ logNote(note);numb=numb+i});
};
var logNote = note => {
  console.log("-----------");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  
  addingNote,
  removeNote,
  readNote,
  getAll
};
