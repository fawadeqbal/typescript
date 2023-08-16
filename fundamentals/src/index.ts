let sales = 123456789;
let course = 'TypeScript'
let is_published = true

let level;
//function
function render(doc: any) {
    console.log(doc)
}

//array
let numbers: number[] = [1, 2, 3]

// tuple
let user: [number, string] = [1, 'fawad']

// enum Pascal Notaion
const enum Size { Small = 1, Medium, Large }

let mySize: Size = Size.Medium

console.log(mySize)

//Functions 

function calculate(income: number): number {
    if (income < 50000) {
        return income * 1.2
    }
    return income * 1.3
}

// Objects
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "fawad",
    retire: (date: Date) => {
        console.log(date)
    }
}


