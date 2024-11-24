# Cash Changer 💱

`Cash Changer` is a simple, fast, and reliable Node.js library for converting currencies using the [Free Currency API](https://freecurrencyapi.com/). With minimal setup, you can integrate this package to perform currency conversions in your application.

Find it out here: <https://www.npmjs.com/package/cash-changer>

---

## Features ✨

- 🚀 **Fast**: Fetch real-time exchange rates.
- 🧩 **Easy-to-Use**: Simple API for hassle-free integration.
- 🌍 **Wide Coverage**: Supports all major world currencies.
- 📡 **Accurate Data**: Powered by [Free Currency API](https://freecurrencyapi.com/).

---

## Installation 🔧

Install the package using npm:

```bash
npm install cash-changer
```

## Usage 📘

Here's how you can use Cash Changer in your project:

### 1. Import the Package

```javascript
import {convertCurrency} from "cash-changer";
```

### 2. Perform Currency Conversion

```javascript
convertCurrency("USD", "EUR", 100).then((result) => {
  console.log(result);
});
```

## API Reference 🌐

### `convertCurrency(fromCurrency, toCurrency, units)`

- **Description**: Converts a given amount from one currency to another using the latest exchange rates.
- **Parameters**:
  - `fromCurrency` (string): The base currency (e.g., `USD`).
  - `toCurrency` (string): The target currency (e.g., `EUR`).
  - `units` (number): The amount in the base currency.
- **Returns**: A `Promise<number>` representing the converted amount.

## Requirements 📋

- **Node.js**: v12 or higher  
  Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Contributing 🤝

We welcome contributions to make `Cash Changer` even better! If you have ideas, encounter bugs, or want to enhance the library, feel free to:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -m "Added feature-name"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

For major changes, please open an issue first to discuss what you’d like to change. Thank you for your support!

---

## License 📜

This project is licensed under the [Apache-2.0](./LICENSE).  
You are free to use, modify, and distribute this library as per the license terms. See the LICENSE file for details.

## Support ❤️

If you find this package helpful, consider giving it a ⭐ on Github.

---
