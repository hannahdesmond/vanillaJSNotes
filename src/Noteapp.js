class Note {
  constructor(title, body) {
    this.title = title
    this.body = body
  }
}

var submit = document.getElementById('bttn')

submit.addEventListener("click", function(event) {
  event.preventDefault();
  var title = document.getElementsByName("title")[0]
  var content = document.getElementsByName("content")[0]
  var note = new Note(title.value, content.value) 
  let notes = []
  notes.push(note)
  localStorage.setItem("notes",JSON.stringify(notes));
  displayNotes();
})

function displayNotes() {
  if (localStorage.getItem("notes") !== null) {
     notes = JSON.parse(localStorage.getItem("notes"));
     
     var content = notes.forEach(element => {
       return element.title
     })

     // retrieve each title, content, combine into one string, but have <br> in between

     document.getElementById("notes-container").innerHTML = "Somewhere over the rainbow"
     
    }
}