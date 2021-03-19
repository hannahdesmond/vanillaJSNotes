class Note {
  constructor(body, id) {
    this.body = body
    this.id = id
  }
}

var noteId = 1
var notesContainer = document.querySelector('#notes-container')

var submit = document.getElementById('bttn')

submit.addEventListener("click", function(event) {
  event.preventDefault();
  var content = document.getElementsByName("content")[0]
  var note = new Note(content.value, noteId)
  noteId++
  let notes = getNoteFromStorage()
  notes.push(note)
  createNoteHTML(note)
  localStorage.setItem("notes",JSON.stringify(notes));
})

var clear = document.getElementById('clear')

clear.addEventListener("click", function() {
  event.preventDefault()
  clearNotes()
  window.location.reload(true)
})

displayNotes()
showFullNote()

function displayNotes() {
  let notes = getNoteFromStorage()
  if(notes.length > 0) {
    noteId = notes[notes.length - 1].id
    noteId++
  } else {
    noteId = 1
  }
  notes.forEach(function(item){
    createNoteHTML(item)
  })
}

function createNoteHTML(note) {
  var div = document.createElement('div') // create a new element
  div.classList.add('notes-class') // assign that element a class -> the argument
  div.setAttribute('id', note.id)
  div.innerHTML = `
    <a href="#${note.id}">${note.body.substring(0, 20)}</a>
  `
  notesContainer.appendChild(div)

}

function getNoteFromStorage() {
  return localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []
}

function showFullNote() {
  window.addEventListener("hashchange", showFullNoteFromLink);
}

function showFullNoteFromLink() {
  showNote(getNoteId(window.location))
}

function getNoteId(location) {
  return parseInt(location.hash.split("#")[1]);
}

function clearNotes() {
  notes = []
  localStorage.setItem("notes",JSON.stringify(notes));
}

function showNote(noteId) {
  var notes = getNoteFromStorage();
  var note = notes.filter((item) => {
    return item.id === noteId
  });
  document.getElementById('notes-display').innerHTML = `${emojify(note)}`
}

function emojify(note) {
  fetch('https://makers-emojify.herokuapp.com/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text: `${note[0].body}`
      })
    })
    .then((response) => {
      return response.json()
    }).then(jsonresponse => { document.getElementById('notes-display').innerHTML = `${jsonresponse.emojified_text}`})
  }
