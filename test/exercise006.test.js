const {
	sumMultiples,
	isValidDNA,
	getComplementaryDNA,
	isItPrime,
	createMatrix,
	areWeCovered
} = require("../challenges/exercise006");

//This function sumMultiples will receive an array of numbers and should return the sum
//of any numbers which are a multiple of 3 or 5
describe("Test function sumMultiples", () => {
	test("returns 3 if only 3 is in array", () => {
		expect(sumMultiples([3])).toBe(3);
	});

	test("returns 5 if only 5 is in array", () => {
		expect(sumMultiples([5])).toBe(5);
	});

	test("returns 16, add all 3 and 5", () => {
		expect(sumMultiples([3,3,5,5])).toBe(16);
	});

	test("returns 16, add all 3 and 5 disregards other numbers", () => {
		expect(sumMultiples([3,4,3,7,5,1,5])).toBe(16);
	});

	test("returns 6 for multiple of 3", () => {
		expect(sumMultiples([6])).toBe(6);
	});

	test("returns 10 for multiple of 5", () => {
		expect(sumMultiples([10])).toBe(10);
	});

	test("returns 130 for longer input array", () => {
		expect(sumMultiples([13,20,5,17,8,91,105,1,2,1,7,14])).toBe(130);
	});

	test("returns 106 for longer input array", () => {
		expect(sumMultiples([5,10,15,25,3,6,9,12,21,7,17,137])).toBe(106);
	});

});

// This function isValidDNA will receive a string of characters and should return true/false depending on whether
// it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.

describe("Test function isValidDNA", () => {
	test("String Julia returns false", () => {
		expect(isValidDNA('Julia')).toBe(false);
	});

	test("String CGTA returns true", () => {
		expect(isValidDNA('CGTA')).toBe(true);
	});

	test("String AAAGGGCCCGTGTGTCGTA returns true", () => {
		expect(isValidDNA('AAAGGGCCCGTGTGTCGTA')).toBe(true);
	});

	test("String AABAGGGCCCGTGTGTCGTA returns false", () => {
		expect(isValidDNA('AABAGGGCCCGTGTGTCGTA')).toBe(true);
	});

});

//This function getComplementaryDNA will receive a valid DNA string (see above) and should return a string of the complementary base pairs.
// In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".

describe("Test function getComplementaryDNA", () => {
	test("String ACTG returns TGAC", () => {
		expect(getComplementaryDNA('ACTG')).toBe('TGAC');
	});

	test("String TGAC returns ACTG", () => {
		expect(getComplementaryDNA('TGAC')).toBe('ACTG');
	});

	test("String TGTG returns TGTG", () => {
		expect(getComplementaryDNA('TGTG')).toBe('TGTG');
	});

	test("String TGTGTGAC returns ACTGTGTG", () => {
		expect(getComplementaryDNA('TGTGTGAC')).toBe('ACTGTGTG');
	});

	test("String ACTGTGTG returns TGTGTGAC", () => {
		expect(getComplementaryDNA('ACTGTGTG')).toBe('TGTGTGAC');
	});

});

//This function should receive a number and return true/false depending on whether it is a prime number or not.

describe("Test function isItPrime", () => {
	test("Prime Number 13 true", () => {
		expect(isItPrime('13')).toBe(true);
	});

	test("Prime Number 137 true", () => {
		expect(isItPrime('137')).toBe(true);
	});

	test("Prime Number 71 true", () => {
		expect(isItPrime('71')).toBe(true);
	});

	test("Prime Number 73 true", () => {
		expect(isItPrime('73')).toBe(true);
	});

	test("Prime Number 79 true", () => {
		expect(isItPrime('79')).toBe(true);
	});

	test("62 not prime return false", () => {
		expect(isItPrime('62')).toBe(false);
	});

	test("87 not prime return false", () => {
		expect(isItPrime('87')).toBe(false);
	});

	test("77 not prime return false", () => {
		expect(isItPrime('77')).toBe(false);
	});

});

//This function createMatrix should receive a number and return an array of n arrays, each filled with n items.
// The parameter "fill" should be used as the filler of the arrays.
	[
		["foo", "foo", "foo"],
		["foo", "foo", "foo"],
		["foo", "foo", "foo"]
	]

describe("Test function createMatrix", () => {

	test("1x1 array filled with test", () => {
		expect(createMatrix(1,"test")).toEqual(
			[["test"]]);
	});

	test("3x3 array filled with foo", () => {
		expect(createMatrix(3,"foo")).toEqual(
			[
			["foo", "foo", "foo"],
			["foo", "foo", "foo"],
			["foo", "foo", "foo"]
		]);
	});

	test("5x5 array filled with Julia", () => {
		expect(createMatrix(5,"Julia")).toEqual(
			[
			["Julia", "Julia", "Julia", "Julia", "Julia"],
			["Julia", "Julia", "Julia", "Julia", "Julia"],
			["Julia", "Julia", "Julia", "Julia", "Julia"],
			["Julia", "Julia", "Julia", "Julia", "Julia"],
			["Julia", "Julia", "Julia", "Julia", "Julia"]
		]);
	});

});

//This function areWeCovered takes an array of staff objects in the format:
//	[
//		{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
//		{ name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
//		...etc
//	]
// and a day of the week. For the café to run successfully, at least 3 staff members are required per day.
// The function should return true/false depending on whether there are enough staff scheduled for the given day.

describe("Test function areWeCovered", () => {

	let staffArray=
		[
			{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
			{ name: "Pedro", rota: ["Saturday", "Tuesday", "Wednesday"] },
			{ name: "Sam", rota: ["Saturday", "Friday", "Tuesday", "Wednesday"] },
			{ name: "Susa", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] },];

	test("Check days of the week for coverage Monday", () => {
		expect(areWeCovered(staffArray,"Monday")).toEqual(false);
	});

	test("Check days of the week for coverage Tuesday", () => {
		expect(areWeCovered(staffArray,"Tuesday")).toEqual(true);
	});

	test("Check days of the week for coverage Wednesday", () => {
		expect(areWeCovered(staffArray,"Wednesday")).toEqual(true);
	});

	test("Check days of the week for coverage Thursday", () => {
		expect(areWeCovered(staffArray,"Thursday")).toEqual(false);
	});

	test("Check days of the week for coverage Friday", () => {
		expect(areWeCovered(staffArray,"Friday")).toEqual(false);
	});

	test("Check days of the week for coverage Saturday", () => {
		expect(areWeCovered(staffArray,"Saturday")).toEqual(true);
	});

	test("Check days of the week for coverage Sunday", () => {
		expect(areWeCovered(staffArray,"Sunday")).toEqual(false);
	});

});