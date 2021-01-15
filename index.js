/**
 * Picks random quote(s).
 * @param {number} amount
 * @param {{[minLength]: number, [maxLength]: number, [authorIsKnown]: boolean}} [options]
 * @returns {{quoteText: string, quoteAuthor: string}[]}
 */
module.exports = (amount = 1, options = {}) => {
    let quotes = options.authorIsKnown === true ? require("./quotes/withAuthor.json") : options.authorIsKnown === false ? require("./quotes/withoutAuthor.json") : require("./quotes/all.json");

    let start = 0;
    let end = quotes.length - 1;
    if(options.minLength) start = search(quotes, options.minLength < quotes[start].q.length ? quotes[start].q.length : options.minLength, true);
    if(options.maxLength) end = search(quotes, options.maxLength > quotes[end].q.length ? quotes[end].q.length : options.maxLength, false);

    return [...Array(amount)].map(_ => quotes[Math.floor(Math.random() * (end + 1 - start) + start)]);
}

const search = (arr, num, lowest) => {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let middle = Math.floor((start + end) / 2);

        if(arr[middle].q.length === num) {
            if(lowest) {
                while(arr[middle - 1] && arr[middle].q.length === arr[middle - 1].q.length) middle--;
            } else {
                while(arr[middle + 1] && arr[middle].q.length === arr[middle + 1].q.length) middle++;
            }
            return middle;
        } else if(arr[middle].q.length < num) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    throw new Error("The provided min/max length is out of boundaries.");
}
