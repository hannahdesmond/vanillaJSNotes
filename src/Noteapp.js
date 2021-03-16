class Note {
  constructor(title, body) {
    this.title = title
    this.body = body
  }
}

var submit = document.getElementsByName('submit')[0]

submit.addEventListener("click", function() {
  var title = document.getElementsByName("title")[0]
  var content = document.getElementsByName("content")[0]
  var note = new Note(title.value, content.value) 
})