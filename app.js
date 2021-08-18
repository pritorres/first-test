const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromEuroToYen = function (valueInEuro) {
    let valueInYen = valueInEuro * 127.9;
    return valueInYen;
}

const fromEuroToPound = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInPound = valueInEuro * 0.8;
    // retornamos el valor
    return valueInPound;
}

const dolaraeuro = function (valordedolar) {
    let valordeeuro = valordedolar / 1.2;
    return valordeeuro;

}

const fromDolarToYen = function (valueDollar) {
    // convertimos el valor a dolares
    let valoreneuros = dolaraeuro(valueDollar)
    let valorInYen = fromEuroToYen(valoreneuros)
    // retornamos el valor
    return valorInYen;
}

const fromYenToPound = function (valoryen) {
    let valueInEuro = valoryen / 127.9;
    let valordepound = fromEuroToPound(valueInEuro);

    return valordepound;

}

module.exports = { fromEuroToDollar, fromYenToPound, fromDolarToYen }