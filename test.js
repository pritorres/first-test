
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("one yen should be 0.005 pound", function() {
    const {fromYenToPound }= require('./app.js')
    expect (fromYenToPound (1000)).toBe(6.254886630179828);
})

test("one dolar should be 106.1 yens", function() {
    const {fromDolarToYen }= require('./app.js')
    expect (fromDolarToYen (3)).toBe(319.75);
})

