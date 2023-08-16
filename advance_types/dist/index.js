"use strict";
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let quantity = 100;
function greet(name) {
    if (typeof name === 'string')
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(null);
//# sourceMappingURL=index.js.map