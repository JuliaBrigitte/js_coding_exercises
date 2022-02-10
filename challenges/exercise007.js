/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
    if (n === undefined) throw new Error("n is required");
    let sum = 0;
    let digitArray = Array.from(String(n), Number);
    digitArray.forEach(digit => sum = sum + digit);
    return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
    if (start === undefined) throw new Error("start is required");
    if (end === undefined) throw new Error("end is required");
    let returnArray = [];
    if (!step) step = 1;
    for (let arrayValue = start; arrayValue < end + 1; arrayValue = arrayValue + step) {
        returnArray.push(arrayValue);
    }
    return returnArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 * @param {String} date
 */
const getScreentimeAlertList = (users, date) => {
    if (users === undefined) throw new Error("users is required");
    if (date === undefined) throw new Error("date is required");
    let resultArray = [];
    users.forEach(user => {
            user["screenTime"].forEach(entry => {
                let screenTime = 0;
                if (entry["date"] === date) {
                    Object.values(entry["usage"]).forEach(
                        value => {
                            screenTime = screenTime + value;
                        }
                    );
                    if (screenTime > 100) {
                        resultArray.push(user['username']);
                    }
                }
            });
        }
    );
    return resultArray
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} hexStr
 */
const hexToRGB = hexStr => {
    if (hexStr === undefined) throw new Error("hexStr is required");
    hexStr = hexStr.substring(1);
    let arrayOfTwoChars = hexStr.match(/.{1,2}/g);
    let rgbColor = "rgb(";
    arrayOfTwoChars.forEach(elem => {
        rgbColor = rgbColor + parseInt(elem, 16) + ",";
    })
    rgbColor = rgbColor.substring(0, rgbColor.length - 1);
    rgbColor = rgbColor + ")";
    return rgbColor;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
    if (board === undefined) throw new Error("board is required");
    let winner = null;
    board.forEach(row => {
        let countX = 0;
        let count0 = 0;
        //check rows
        for (let i = 0; i < board.length; i++) {
            if (row[i] === "X") {
                countX++;
                count0 = 0;
            }
            if (row[0] === "0") {
                count0++;
                countX = 0;
            }
            if (count0 === 3) winner = "0";
            if (countX === 3) winner = "X";
        }
    });
    //check columns
    for (let j = 0; j < board.length; j++) {
        let countX = 0;
        let count0 = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i][j] === "X") {
                countX++;
                count0 = 0;
            }
            if (board[i][j] === "0") {
                count0++;
                countX = 0;
            }
            if (count0 === 3) winner = "0";
            if (countX === 3) winner = "X";
        }
    }
    return winner;
};

module.exports = {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
};
