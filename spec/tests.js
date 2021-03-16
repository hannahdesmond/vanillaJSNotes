// user can create a note
// const Note = require('../src/Noteapp.js')

it('has a title', function() {
  let note = new Note('Title', 'Body')
  expect(note.title).toEqual('Title')
})

it('has a body', function() {
  let note = new Note('Title', 'Body')
  expect(note.body).toEqual('Body')
})