/**
 * Generates random quote(s).
 * @param {number} amount
 * @param {{ [maxLength]: number, [minLength]: number, [authorIsKnown]: boolean }} [options]
 * @returns {{quoteText: string, quoteAuthor: string}[]}
 */
exports.quote = (amount = 1, options) => {
    let { quotes } = require("./quotes");

    if(options.maxLength) quotes = quotes.filter(e => e.quoteText.length <= options.maxLength);
    if(options.minLength) quotes = quotes.filter(e => e.quoteText.length >= options.minLength);
    if(options.authorIsKnown) quotes = quotes.filter(e => e.quoteAuthor.length > 0);
    if(options.authorIsKnown === false) quotes = quotes.filter(e => e.quoteAuthor.length === 0);

    return [...Array(amount)].map(_ => quotes[Math.floor(Math.random() * quotes.length)]);
}