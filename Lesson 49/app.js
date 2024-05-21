let exchangeRates = {
    USD: {
        YTL: 32.36,
        AZN: 1.7
    },
    YTL: {
        USD: 0.031,
        AZN: 0.053
    },
    AZN: {
        USD:0.59,
        YTL:  19.04
    }
};

function convertCurrency() {
let amount = parseFloat(document.getElementById('amountFrom').value);
let fromCurrency = document.getElementById('fromCurrency').value;
let toCurrency = document.getElementById('toCurrency').value;

if (fromCurrency === toCurrency) {
if (amount) {
    document.getElementById('amountTo').value = amount;
    document.getElementById('exchangeRate').textContent = '1 ' + fromCurrency + ' = 1 ' + toCurrency;
} else {
    document.getElementById('amountTo').value = '';
    document.getElementById('exchangeRate').textContent = '';
}
} else {
let exchangeRate = exchangeRates[fromCurrency][toCurrency];
let result = amount * exchangeRate;

document.getElementById('amountTo').value = result.toFixed(2);
updateExchangeRate(fromCurrency, toCurrency);
}
}

function updateExchangeRate(fromCurrency, toCurrency) {
    document.getElementById('exchangeRate').textContent = '1 ' + fromCurrency + ' = ' + exchangeRates[fromCurrency][toCurrency] + ' ' + toCurrency;
}

function changeCurrency() {
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    document.getElementById('fromCurrency').value = toCurrency;
    document.getElementById('toCurrency').value = fromCurrency;

    convertCurrency();
}