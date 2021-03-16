// user can create a note
// const Note = require('../src/Noteapp.js')

it('can create a new note', function() {
  let note = new Note()
  expect(note.constructor.name).toEqual('Note')
})