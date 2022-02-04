/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr =>
{
  if (arr === undefined) throw new Error("arr is required");
  let result=0;
  arr.forEach(number =>
  {
    if ((number % 3 === 0) || (number % 5 === 0))
    {
      result=result+number;
    }
  })
  return result;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string.
 * A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str =>
{
  if (str === undefined) throw new Error("str is required");
  return !!str.match(/[CGTA]/);

};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs.
 * In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str =>
{
  if (str === undefined) throw new Error("str is required");
  let arrayOfTwoChars=str.match(/.{1,2}/g);
  for (let i=0; i<arrayOfTwoChars.length/2; i++)
  {
    let firstBit=arrayOfTwoChars[i];
    arrayOfTwoChars[i]=arrayOfTwoChars[arrayOfTwoChars.length-1-i];
    arrayOfTwoChars[arrayOfTwoChars.length-1-i]=firstBit;
  }
  return arrayOfTwoChars.join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n =>
{
  if (n === undefined) throw new Error("n is required");
  if (n === 1)
  {
    return false;
  }
  if (n === 2)
  {
    return true;
  }
  for (let number=2; number < Math.sqrt(n); number++)
  {
    if (n % number === 0)
    {
      return false;
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) =>
{
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  let returnArray=[];
  let rowArray=[];

  for (let j=0; j<n; j++)
  {
    rowArray.push(fill);
  }
  for (let i=0; i<n; i++)
  {
    returnArray.push(rowArray);
  }
  return returnArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) =>
{
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  let counter=0;
  staff.forEach(staffMember =>
  {
    if (staffMember["rota"].includes(day))
    {
      counter++;
    }
  });
  return (counter>2);
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
