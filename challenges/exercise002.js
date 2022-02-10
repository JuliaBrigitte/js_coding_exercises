function getFillings(sandwich) {
    if (sandwich === undefined) throw new Error("ingredients is required");
    return sandwich["fillings"];
}

function isFromManchester(person) {
    if (person === undefined) throw new Error("person is required");
    return (person["city"] === 'Manchester');
}

function getBusNumbers(people) {
    if (people === undefined) throw new Error("people is required");
    // A bus can hold 40 people.
    return Math.ceil(people / 40);
}

function countSheep(arr) {
    if (arr === undefined) throw new Error("arr is required");
    let counter = 0;
    arr.forEach(item => {
        if (item === "sheep") {
            counter++
        }
    });
    return counter;
}

function hasMPostCode(person) {
    if (person === undefined) throw new Error("person is required");
    return (person["address"]["city"] === 'Manchester');
}

module.exports = {
    getFillings,
    isFromManchester,
    countSheep,
    getBusNumbers,
    hasMPostCode
};
