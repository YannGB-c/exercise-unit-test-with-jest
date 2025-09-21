const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEurols = {
    "JPY": 156.5, //japan yen
    "USD": 1.07, // us dollar
    "GBP":0.87, //british pound
}

const fromEuroToDollar = function(valueinEuro) {
    let valueinDollar = valueinEuro * 1.07;
    return valueinDollar
}



const fromDollarToYen = function(valueinDollar){
    let valueinYen = valueinDollar * 156.5;
    return valueinYen
}



const fromYenToPound = function(valueinYen){
    let valueinPound = valueinYen * 0.87;
    return valueinPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};