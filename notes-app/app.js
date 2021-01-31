const chalk = require('chalk')
const { demandOption } = require('yargs')

const yargs = require('yargs')
const notes = require('./notes.js')


//customize yargs version
yargs.version('1.1.0')


//create add command 
yargs.command({
   command: 'add' ,
   describe: 'Add an new node' ,
   builder:{
        title:{
            describe: 'Note title',
            demandOption:true    ,   //demands title
            type:'string'   // demasns of title should be string
        },
        body:{
            describe: "note body",
            demandOption:true,
            type:'string'
        }
   },
   handler(argv) {
    notes.addNote(argv.title,argv.body)
    debugger
   }
})

//create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder:{
        title:
        {
            describe:' remove title',
            demandOption:true,
            type :'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }

})

//create list command
yargs.command({
    command:'list',
    describe:'list all notes ',
    handler(argv){
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'Print place holder read for now',
    builder:{
           title:{ describe:' read title',
            demandOption:true,
            type :'string'
    }
    },

    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse();


