// const square = function(x)
// {
//     return x * x 

// }

// const square =(x) => 
// {
//     return x * x
// }
//const square = (x)=> x*x
const even ={

    name:'Birthday Party ',
    guestList :['anrew','arun','mike'],
    printGuestList(){
        console.log('Guewt list for ' + this.name)
        this.guestList.forEach((guest)=>{
                console.log(guest+" is attending "+ this.name)
        })
    }
}
even.printGuestList()