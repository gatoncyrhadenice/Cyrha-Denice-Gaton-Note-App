const add = require('./add')
const read = require('./read')
const present = require('./present')
//get user input
const cmd = process.argv

var note ={}
if (cmd[2] == 'add'){
    //Build Object
    note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    //get old note value
    var oldNote = read()
    //add note to note
    add(note,oldNote)
}
if (cmd[2] == 'read') {
    present(read())
}