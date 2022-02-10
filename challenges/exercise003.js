function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");
    let resultArray = [];
    nums.forEach(number => {
        resultArray.push(number * number)
    });
    return resultArray;
}

function capitalize(word) {
    if (word === undefined) throw new Error("word is required");
    return word[0].toUpperCase() + word.substr(1);
}

function camelCaseWords(words) {
    if (words === undefined) throw new Error("words is required");
    let result = "";
    let counter = 1;
    words.forEach(word => {
        if (counter === 1) {
            result = word
        } else {
            result = result + capitalize(word)
        }
        counter++
    });
    return result;
}

function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");
    let subjectArray = [];
    people.forEach(person => subjectArray.push(...person["subjects"]));
    return subjectArray.length;
}

function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    let ingredientIncluded = false;
    menu.forEach(item => item["ingredients"].forEach(ingredientItem => {
        if (ingredient === ingredientItem) {
            ingredientIncluded = true;
        }
    }))
    return ingredientIncluded;
}

function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    let arr1Hash = [];
    let arr2Hash = [];
    let resultArray = [];
    arr1.forEach(number => arr1Hash[number] = true);
    arr2.forEach(number => {
        if (arr1Hash[number]) {
            if (!arr2Hash[number]) {
                resultArray.push(number);
                arr2Hash[number] = true
            }
        }
    });
    resultArray.sort();
    return resultArray;
}

module.exports = {
    getSquares,
    camelCaseWords,
    getTotalSubjects,
    checkIngredients,
    duplicateNumbers
};
