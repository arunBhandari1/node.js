const fs = require('fs')
const book ={
    title:'Ego is the enemy',
    author:'Ryan Holiday'
}



const dataBuffer = fs.readFileSync("1-json.json") // read files buffer which is in machine code
const dataJSON = dataBuffer.toString()              // coverts it to string
const user = JSON.parse(dataJSON)                   //converts it to object
user .name="Bulk"
user.age=64

const userJSON = JSON.stringify(user)             // converts object to strng
fs.writeFileSync('1-json.json',userJSON)        // writes string to object
