import {convertCurrency} from "cash-changer";

convertCurrency("USD", "EUR", 100).then((result) => {
  console.log(result);
});
