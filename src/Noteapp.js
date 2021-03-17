class Note {
  constructor(title, body, id) {
    this.title = title
    this.body = body
    this.id = id
  }
}

var noteId = 1
var notesContainer = document.querySelector('#notes-container')

var submit = document.getElementById('bttn')

submit.addEventListener("click", function(event) {
  event.preventDefault();
  var title = document.getElementsByName("title")[0]
  var content = document.getElementsByName("content")[0]
  var note = new Note(title.value, content.value, noteId)
  noteId++
  let notes = []
  notes.push(note)
  createNoteHTML(note)
  localStorage.setItem("notes",JSON.stringify(notes));
})

function createNoteHTML(note) {
  var div = document.createElement('div') // create a new element
  div.classList.add('notes-class') // assign that element a class -> the argument
  div.setAttribute('id', note.id)
  div.innerHTML = `
    <a href="#${note.id}">${note.body.substring(0, 20)}</a>
  `
  notesContainer.appendChild(div)

}
