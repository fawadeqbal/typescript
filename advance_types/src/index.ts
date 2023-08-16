// Aliases

type Employee = {
    readonly id:number,
    name:string,
    retire: (date: Date)=> void
}

let employee : Employee ={
    id:1,
    name: 'Mosh',
    retire: (date:Date)=>{
        console.log(date)
    }
}

//Union type

function kgToLbs (weight: number|string):number{
    if(typeof weight === 'number'){
        return weight*2.2;
    }else{
        return parseInt(weight)*2.2
    }
}

//Literals exact

type Quantity = 50 | 100

let quantity : Quantity =100

type Metric = 'cm' | 'inch'

//nullable

function greet(name:string | null){
    if(typeof name === 'string')
    console.log(name.toUpperCase())
    else
    console.log("Hola!")
}

greet(null)



