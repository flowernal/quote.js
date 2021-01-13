# quote.js
npm library for picking random quotes with options.
There are 4066 quotes.

Installation:
```
npm i --save quote.js
```

Usage:
```JavaScript
const quote = require("quote.js");
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
options = {
  minLength: number,
  maxLength: number,
  authorIsKnown: boolean
}
```
