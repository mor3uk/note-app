const ck = require('chalk');
const fs = require('fs');

/**
 * Add note to the list
 * @param {string} title - a title of a note
 * @param {string} body - a body of a note
 */
const addNote = (title, body) => {
    const notes = loadNotes();

    let duplicatedNote = notes.find((note) => note.title === title);

    if (!duplicatedNote) {
        notes.push({
            title: title,
            body: body
        });
        
        saveNotes(notes);

        console.log(ck.bgGreen('New note added!'));
    } else {
        console.log(ck.bgRed(`A note \'${title}\' already exists!`));
    }
};

/**
 * Remove a title from the list
 * @param {string} title - a title of a note 
 */
const removeNote = (title) => {
    const notes = loadNotes();
    let duplicatedNotes = notes.filter((note) => title !== note.title);
    debugger
    if (notes.length != duplicatedNotes.length) {
        saveNotes(duplicatedNotes);
        console.log(ck.bgGreen(`Note \'${title}\' deleted!`));
    } else {
        console.log(ck.bgRed(`Note \'${title}\' does not exists!`));
    }
};

/**
 * Print every note
 */
const listNotes = () => {
    const notes = loadNotes();
    
    if (notes.length == 0) {
        console.log(ck.bgRed('No notes found!'));
    } else {
        console.log(ck.bgGreen('Your notes:'));

        for (let note of notes) {
            console.log(note.title);
        }
    }
};

/**
 * Look for a needed note and prints it
 * @param {string} title - title of a note
 */
const readNote = (title) => {
    const notes = loadNotes();
    
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(ck.bgBlue(`${note.title}:`));
        console.log(note.body);
    } else {
        console.log(ck.bgRed(`Note \`${title}\ not found!`));
    }
};

/**
 * Get notes list from the file
 */
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

/**
 * Save list to the file
 * @param {object} notes 
 */
const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('./notes.json', notesJSON);
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};