const ya = require('yargs');
const nt = require('./notes.js');

/**
 * Adding command 'add'
 */
ya.command({
    command: 'add',
    describe: 'adds a note',
    builder: {
        title: {
            describe: 'note description',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        nt.addNote(argv.title, argv.body);
    }
});

/**
 * Adding command 'remove'
 */
ya.command({
    command: 'remove',
    describe: 'removes a note',
    builder: {
        title: {
            describe: 'note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        nt.removeNote(argv.title);
    }
});

/**
 * Adding command 'list'
 */
ya.command({
    command: 'list',
    describe: 'lists notes',
    handler () {
        debugger
        nt.listNotes();
    }
});

/**
 * Adding command 'read'
 */
ya.command({
    command: 'read',
    describe: 'reads a note',
    builder: {
        title: {
            describe: 'note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        nt.readNote(argv.title);
    }
});

ya.parse();