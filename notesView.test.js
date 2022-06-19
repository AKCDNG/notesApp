/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const notesView = require('./notesView');
 const notesModel = require('./notesModel');
 
 describe('A test for my web page', () => {
 
   // We can use the beforeEach() hook 
   // to set the jest `document` HTML before each test
   beforeEach(() => {
     document.body.innerHTML = fs.readFileSync('./index.html');
   });
 
   it('displays a title', () => {
     // 1. Arrange - instantiate our View class
     const model = new notesModel();
     const view = new notesView(model);
     model.addNote('1 note here');
     model.addNote('another note there');
 
     // 2. Act - call any method that modifies the page
     // this method `displayTitle` would dynamically
     // set a <h1> title on the page with the given content
     view.displayNotes();
 
     // 3. Assert - we assert the page contains what it should.
     // Usually, you will use `.querySelector` (and friends)
     // here, and assert the text content, the number of elements,
     // or other things that make sense for your test.
     expect(document.querySelectorAll('div.note').length).toEqual(2);
   });

   it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new notesModel();
    const view = new notesView(model);
  
    // 1. Fill the input
    const input = document.querySelector('#note-text');
    input.value = 'My new amazing test note';
  
    // 2. Click the button
    const button = document.querySelector('#submit-note-button');
    button.click();
  
    // 3. The note should be on the page
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
  });

  it('clear the list of previous notes before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new notesModel();
    const view = new notesView(model);
    model.addNote('one');
    model.addNote('two');
  
    view.displayNotes();
    view.displayNotes();
  
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

 });