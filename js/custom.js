const APIkey = 'c0c8e7ee-7768-4e2b-aad4-8faca9cd4e65'

const amountMoney = document.getElementById('amountEntered');
const cryptoOptions = document.getElementById('cryptoOptions');
const textConversion = document.getElementById('result');

// attach Click to "Convert now" button
const convertButton = document.getElementById('convert');
convertButton.addEventListener('click', convertNow);

const params ='';




const cryptosListUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?listing_status=active&start=1&limit=100&CMC_PRO_API_KEY=${APIkey}`;

const myAPI = new cryptoAPI(APIkey);

// retrives list of cryptocurrencies
myAPI.getAllCryptos(cryptosListUrl)
.then(data => {
    console.log(data.data);
   data.data.forEach(value => {
    const element = document.createElement('option');
    element.innerHTML = value.symbol; 
    cryptoOptions.appendChild(element);

   });
})
.catch(error => {
    connectionError();
});


const currencySelect = document.getElementById('currency');



function convertNow(e) {
    e.preventDefault();
    const amount = amountMoney.value;
    if (amount == '') {
        textConversion.innerHTML = `<p>Please enter amount to exchange.</p>`;
    } else {
        const fromCurrency = document.getElementById('currency').value;
       
        const toCurrency = document.getElementById('cryptoOptions').value;
      

     
      

      myAPI.convertCurrency(fromCurrency,toCurrency,amount)
      .then(data => {
          const priceToConvert = data.data.quote;
         for (const name in priceToConvert) {
                if (priceToConvert.hasOwnProperty(name)) {
                    console.log(priceToConvert[name].price);

              
                textConversion.innerHTML = `<p>
                                ${amount} ${fromCurrency} is <span>${priceToConvert[name].price}</span> ${toCurrency} </p>`;
                }
         };
       
      }).catch(error => {
        connectionError();
      });
    
    }
}

function connectionError() {
    textConversion.innerHTML = `<p><span>Connection error.</span> Please try again.</p>`;
}