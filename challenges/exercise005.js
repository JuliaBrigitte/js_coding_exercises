const findNextNumber = (nums, n) => {
    if (nums === undefined) throw new Error("nums is required");
    if (n === undefined) throw new Error("n is required");
    let returnValue = null;
    for (const [i, number] of nums.entries()) {
        let j = i + 1;
        if (number === n) {
            if (i < nums.length - 1) {
                returnValue = nums[j];
            }
        }
        if (returnValue) {
            return returnValue;
        }
    }
    return returnValue;
};

const count1sand0s = str => {
    if (str === undefined) throw new Error("str is required");
    let returnArray = {};
    returnArray["0"] = 0;
    returnArray["1"] = 0;
    [...str].forEach(char => {
        if (char === "0") {
            returnArray["0"] +=  1;
        }
        if (char === "1") {
            returnArray["1"] += 1;
        }
    })
    return returnArray;
};

function reverseWord(word) {
    if (word === undefined) throw new Error("word is required");
    return word.split("").reverse().join("");
}

const reverseNumber = n => {
    if (n === undefined) throw new Error("n is required");
    if (n) {
        let reservedNumberString = reverseWord(n.toString());
        return parseInt(reservedNumberString);
    }
    return n;
};

const sumArrays = arrs => {
    if (arrs === undefined) throw new Error("arrs is required");
    let result = 0;
    arrs.flat().forEach(number => result = result + number);
    return result;
};

const arrShift = arr => {
    if (arr === undefined) throw new Error("arr is required");
    if (arr.length > 1) {
        let lastElement = arr[arr.length - 1];
        arr[arr.length - 1] = arr[0];
        arr[0] = lastElement;
    }
    return arr;
};

const findNeedle = (haystack, searchTerm) => {
    if (haystack === undefined) throw new Error("haystack is required");
    if (searchTerm === undefined) throw new Error("searchTerm is required");
    let result = false;
    Object.keys(haystack).map(key => {
            let myString = haystack[key].toString().toLowerCase();
            if (myString.includes(searchTerm.toLowerCase())) {
                result = true
            }
        }
    );
    return result;
};

const getWordFrequencies = str => {
    if (str === undefined) throw new Error("str is required");
    let resultHash = {};
    if (str) {
        let wordArray = str.toLowerCase().match(/\b[\w']+\b/g);
        wordArray.forEach(word => {
            if (!resultHash[word]) {
                resultHash[word] = 1
            } else {
                resultHash[word] += 1
            }
        });
    }
    return resultHash;
};

module.exports = {
    findNextNumber,
    count1sand0s,
    reverseNumber,
    sumArrays,
    arrShift,
    findNeedle,
    getWordFrequencies
};
