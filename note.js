fs=require('fs');
yargs=require('yargs');
const notes = require('./noteapp.js');
var command=yargs.argv._[0];
var title=yargs.argv.title;
var body=yargs.argv.body;
// console.log(command,title,body);
if (command === "add") {
    if (!title || !body){console.log("Missing required arguments title,body")}
    else{
    notes.addingNote(title, body);
}
  } else if (command === "remove") {
    console.log("removing note");
    notes.removeNote(title);
  } else if (command === "read") {
    console.log("reading note");
    notes.readNote(title);
  } else if (command === "list") {
    notes.getAll();
  } else {
    console.log("Unknown command was used!");
  }