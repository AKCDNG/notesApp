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

  async createNote(note) {
    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: note }),
      });
      const notes = await response.json();
      return notes;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = notesApi;