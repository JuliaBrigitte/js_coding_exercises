const {
	sumDigits,
	createRange,
	getScreentimeAlertList,
	hexToRGB,
	findWinner
} = require("../challenges/exercise007");

//This function sumDigits takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
describe("Test function sumDigits", () => {
	test("Sum digits of 123", () => {
		expect(sumDigits(123)).toBe(6);
	});

	test("Sum digits of 77777", () => {
		expect(sumDigits(77777)).toBe(35);
	});

	test("Sum digits of 875", () => {
		expect(sumDigits(875)).toBe(20);
	});

	test("Sum digits of 12121212121212", () => {
		expect(sumDigits(12121212121212)).toBe(21);
	});

});

// This function createRange creates a range of numbers as an array. It received a start, an end and a step.
// Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
// Both the start and the end numbers are inclusive.
// Step is an optional parameter. If it is not provided, assume the step is 1.

describe("Test function createRange", () => {

	test("Start 3, End 11, step 2", () => {
		expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);
	});

	test("Start -3, End 11, step 2", () => {
		expect(createRange(-3,11,2)).toEqual([-3, -1, 1, 3, 5, 7, 9, 11]);
	});

	test("Start 1, End 5", () => {
		expect(createRange(1, 5)).toEqual([ 1, 2, 3, 4, 5]);
	});

	test("Start 0, End 20, step 5", () => {
		expect(createRange(0, 20, 5)).toEqual([ 0, 5, 10, 15, 20]);
	});

	test("Start 0, End 22, step 5", () => {
		expect(createRange(0, 20, 5)).toEqual([ 0, 5, 10, 15, 20]);
	});

});

/**
 * This function getScreentimeAlertListtakes an array of user objects and their usage in minutes of various applications.
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
describe("Test function getScreentimeAlertList", () => {

	let testArray=[
		{
			username: "beth_1234",
			name: "Beth Smith",
			screenTime: [
				{ date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
				{ date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
				{ date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
				{ date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
			]
		},
		{
			username: "sam_j_1989",
			name: "Sam Jones",
			screenTime: [
				{ date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
				{ date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
				{ date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
			]
		},
		{
		username: "user3",
		name: "User Three",
		screenTime: [
		{ date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} }
	]
},
	]
	test("Check 2019-05-04", () => {
		expect(getScreentimeAlertList(testArray, "2019-05-04")).toEqual(["beth_1234"]);
	});

	test("Check 2019-05-03", () => {
		expect(getScreentimeAlertList(testArray, "2019-05-04")).toEqual(["beth_1234"]);
	});

	test("Check 2019-05-02", () => {
		expect(getScreentimeAlertList(testArray, "2019-05-02")).toEqual(["beth_1234","user3"]);
	});

	test("Check 2019-05-04", () => {
		expect(getScreentimeAlertList(testArray, "2019-06-13")).toEqual([]);
	});

});

/**
 * This function hexToRGB will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16.
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 */
describe("Test function hexToRGB", () => {

	test("Convert red and blue", () => {
		expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
		expect(hexToRGB("#11ACFF")).toEqual("rgb(17,172,255)");
	});

});

/**
 * This function findWinner takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 */
describe("Test function createRange", () => {

	let testArray=[
		["X", "0", null],
		["X", null, "0"],
		["X", null, "0"]
	];
	test("Winner X", () => {
		expect(findWinner(testArray)).toBe("X");
	});
	let testArray2=[
		["0", "0", "0"],
		["X", "X", null],
		["X", null, null]
	];
	test("Winner 0", () => {
		expect(findWinner(testArray2)).toBe("0");
	});
	let testArray3=[
		[null, "0", null],
		["X", null, "0"],
		["X", null, "0"]
	];
	test("No Winner", () => {
		expect(findWinner(testArray3)).toBe(null);
	});
	let testArray4=[
		["0", "0", null, null],
		["0", null, "X", null],
		[null, null, "X", null],
		["0", null, "X", null]
	];
	test("Winner X", () => {
		expect(findWinner(testArray4)).toBe("X");
	});

});