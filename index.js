import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi("fca_live_4Ka3OKfnfQ97tWuSLuWtTDckmAk0Dh43C0hiy55Y");

export async function convertCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency
  });
  const multiplier = res.data[toCurrency];

  return multiplier * units;
}