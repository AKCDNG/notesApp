class notesApi {
  async loadNotes() {
    try {
      const response = await fetch("http://localhost:3000/notes");
      const notes = await response.json();
      return notes;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = notesApi;