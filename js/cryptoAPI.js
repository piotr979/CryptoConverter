class cryptoAPI {



    constructor(API) {
        this.API = API
    }

    async getAllCryptos(url) {


        const result = await fetch(url);
        const data = await result.json();



        return data;
    }

    async convertCurrency(fromCurrency, toCurrency, amount) {
        const result = await fetch(`https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY=c0c8e7ee-7768-4e2b-aad4-8faca9cd4e65&symbol=${fromCurrency}&amount=${amount}&convert=${toCurrency}`)
        const data = await result.json();
      
        
        return data;
    }

}