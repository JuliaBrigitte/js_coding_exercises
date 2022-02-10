function findSmallNums(nums) {
    if (!nums) throw new Error("nums is required");
    let returnArray = [];
    nums.forEach(number => {
        if (number < 1) {
            returnArray.push(number)
        }
    });
    return returnArray;
}

function findNamesBeginningWith(names, char) {
    if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");
    let returnArray = [];
    names.forEach(name => {
        if (name.substr(0, 1) === char) {
            returnArray.push(name)
        }
    });
    return returnArray;
}

function findVerbs(words) {
    if (!words) throw new Error("words is required");
    let returnArray = [];
    words.forEach(word => {
        if (word.substr(0, 3) === 'to ') {
            returnArray.push(word)
        }
    });
    return returnArray
}

function getIntegers(nums) {
    if (!nums) throw new Error("nums is required");
    let returnArray = [];
    nums.forEach(number => {
        if (Number.isInteger(number)) {
            returnArray.push(number)
        }
    });
    return returnArray
}

function getCities(users) {
    if (!users) throw new Error("users is required");
    let returnArray = [];
    users.forEach(city => {
        if (city["data"]["city"]["displayName"]) {
            returnArray.push(city["data"]["city"]["displayName"])
        }
    });
    return returnArray
}

function getSquareRoots(nums) {
    if (!nums) throw new Error("nums is required");
    let returnArray = [];
    nums.forEach(number => {
        if (number) {
            returnArray.push(Math.round((Math.sqrt(number)) * 100) / 100)
        }
    });
    return returnArray;
}

function findSentencesContaining(sentences, str) {
    if (!sentences) throw new Error("sentences is required");
    if (!str) throw new Error("str is required");
    let returnArray = [];
    sentences.forEach(sentence => {
        if (sentence.toLowerCase().includes(str.toLowerCase())) {
            returnArray.push(sentence)
        }
    });
    return returnArray;
}

function getLongestSides(triangles) {
    if (!triangles) throw new Error("triangles is required");
    let returnArray = [];
    triangles.forEach(triangle => {
        if (triangle) {
            triangle.sort((a, b) => b - a);
            returnArray.push(triangle[0]);
        }
    });
    return returnArray
}

module.exports = {
    findSmallNums,
    findNamesBeginningWith,
    findVerbs,
    getIntegers,
    getCities,
    getSquareRoots,
    findSentencesContaining,
    getLongestSides
};
