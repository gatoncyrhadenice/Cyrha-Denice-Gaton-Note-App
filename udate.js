const fs = reqiure('fs')

const udate = function(note, oldNote){
    const oNote = JSON.parse(oldNote)

    const newNote = oNote.map(function(n,index){
        if(n.is == note.id) 
        {
            n.title =note.title
            n.body = note.body
        }
        return n
    })
    fs.writeFileSync('./note.txt', JSON.stringify(newNote))
}
module.exports = udate