# quote-generator
Generates a random quote.

Usage:
```JavaScript
const { quote } = require("./quote-generator/index.js");
console.log(quote(amount, options));
```

For example:
```JavaScript
quote(); // 1 random quote
```
```JavaScript
quote(2, { minLength: 100 }); // 2 random quotes with the minimum length of 100
```

Options:
```JavaScript
options: {
  maxLength: number,
  minLength: number,
  authorIsKnown: boolean
}
```
