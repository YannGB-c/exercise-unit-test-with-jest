const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23',() => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function(){
    
    //importo la funcion desde app.js
    const {fromEuroToDollar} = require('./app.js');

    //uso la funcion como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    //si 1 euro son 1.07 dolares, entonces 3.5 euros deben ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    //hago mi comparacion en la prueba 
    expect(fromEuroToDollar(3.5)).toBe(3.745)
})

test ("one dollar should be a 156.5", function(){
    const {fromDollarToYen} = require('./app.js')
    const Yen = fromDollarToYen(4);
    const expected = 4 * 156.5;
    expect(fromDollarToYen(4)).toBe(626);
})

test ("one yen should be a 0.87", function(){
    const {fromYenToPound} = require("./app.js")
    const pounds = fromYenToPound(5);
    const expected = 5 * 0.87;
    expect(fromYenToPound(5)).toBe(4.35)

})