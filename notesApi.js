class notesApi {
  loadNotes () {
    fetch('http://localhost:3000/notes')
    .then((response) => response.json()) // 1. convert JSON to JS object
    .then((data) => {
      // 2. `data` is now a full JS object, so we can access its properties  
      return(data)
    });
  }
}

module.exports = notesApi;