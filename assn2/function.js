const { clear } = require('console')
const fs = require('fs')
const addNum=(first ,second ) =>
{ 
    const calc = loadCalc()
    calc.push(
        {
            first : first,
            second: second,
            third:"+"    
        }
    )
    saveCalc(calc)
    return first+ second
}
const subNum=(first ,second ) =>
{ 
    const calc = loadCalc()
    calc.push(
        {
            first : first,
            second: second,
            third:"-"
            
        }
    )
    saveCalc(calc)
    return first-second
}
const multNum=(first ,second ) =>
{ 
    const calc = loadCalc()
    calc.push(
        {
            first : first,
            second: second,
            third:"*"
            
        }
    )
    saveCalc(calc)
    return first* second
}
const divNum=(first ,second ) =>
{ 
    const calc = loadCalc()
    calc.push(
        {
            first : first,
            second: second,
            third:"/"
            
        }
    )
    saveCalc(calc)
    return first/ second
}

const printHistory=()=>
{
    const calc = loadCalc()
    // console.log(calc.length)
    // for (i =0;i<calc.length;i++)
    // {
    //     console.log("hi")
    //     if (calc[0].third==="+")
    //     {
    //         console.log(calc[0].first+" + "+calc[0].second+" = "+ (calc[0].first+calc[0].second)) 
    //     }
    //     else if (calc[0].third==="-")
    //     {
    //         console.log(calc[0].first+" - "+calc[0].second+" = "+ (calc[0].first+calc[0].second))
    //     }
    //     else if (calc[0].third==="*")
    //     {
    //         console.log(calc[0].first+" * "+calc[0].second+" = "+ (calc[0].first+calc[0].second))
    //     }
    //     else if (calc[0].third==="/")
    //     {
    //         console.log(calc[0].first+" / "+calc[0].second+" = "+ (calc[0].first+calc[0].second))
    //     }
    //     console.log(calc.length)
    // }

    calc.forEach ((cal)=>
    {
        
        if (cal.third==="+")
        {
            console.log(cal.first+" + "+cal.second+" = "+ (cal.first+cal.second)) 
        }
        else if (cal.third==="-")
        {
            console.log(cal.first+" - "+cal.second+" = "+ (cal.first-cal.second)) 
        }
        else if (cal.third==="*")
        {
            console.log(cal.first+" * "+cal.second+" = "+ (cal.first*cal.second)) 
        }
        else if (cal.third==="/")
        {
            console.log(cal.first+" / "+cal.second+" = "+ (cal.first/cal.second)) 
        }
    })
}

const clearHistory=()=>
{
    const cal = []
    saveCalc(cal)
}


const saveCalc =  (calc) =>
{
     const dataJSON = JSON .stringify(calc)
     fs.writeFileSync('calc.json',dataJSON)
}
{

}
const loadCalc=  ()=>{
    try{
        const dataBuffer = fs.readFileSync('calc.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e)
    {
        return []
    }
    
 }


module.exports= {
    addNum : addNum,
    subNum : subNum,
    multNum: multNum,
    divNum:divNum,
    printHistory: printHistory,
    clearHistory:clearHistory
    }