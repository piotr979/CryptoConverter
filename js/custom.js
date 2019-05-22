const amountMoney = document.getElementById('amountEntered');


const currencySelect = document.getElementById('currency');

let currencyOption = document.createElement('option');
currencyOption.innerHTML = "USD";
//let currencyOptionText = document.createTextNode('USD');
//currencyOption.appendChild(currencyOptionText);
currencySelect.appendChild(currencyOption);

console.log(amountMoney);

