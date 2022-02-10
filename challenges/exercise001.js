function capitalize(word)
{
  if (word === undefined) throw new Error("word is required");
  if (word.length === 0) return word;
  return word[0].toUpperCase() + word.substr(1);
}

function generateInitials(firstName, lastName)
{
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substr(0,1)+'.'+lastName.substr(0,1);
}

function addVAT(originalPrice, vatRate)
{
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return (Math.round((originalPrice*(1+vatRate/100)) * 100)/100);
}

function getSalePrice(originalPrice, reduction)
{
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return (Math.round((originalPrice*(1-reduction/100)) * 100)/100);
}

function getMiddleCharacter(str)
{
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 === 0)
  {
    return str.substr((str.length/2)-1,2);
  }
  else
  {
    return str.substr((str.length/2),1);
  }
}

function reverseWord(word)
{
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words)
{
  if (words === undefined) throw new Error("words is required");
  let result=[];
  words.map(function(word)
  {
    result.push(reverseWord(word))
  });
  return result;

}

function countLinuxUsers(users)
{
  if (users === undefined) throw new Error("users is required");
  let linuxUsers = users.filter(function (user) {
    return user.type === "Linux";
  });
  return linuxUsers.length;
}

function getMeanScore(scores)
{
  if (scores === undefined) throw new Error("scores is required");
  let total=0;
  total=scores.reduce(function (accumulator, score)
  {
    return accumulator + score
  })
  return (Math.round((total/scores.length) * 100)/100);
}

function simpleFizzBuzz(n)
{
  if (n === undefined) throw new Error("n is required");
  if ((n % 3 === 0) && (n % 5 === 0))
  {
    return 'fizzbuzz';
  }
  if (n % 3 === 0)
  {
    return 'fizz';
  }
  if (n % 5 === 0)
  {
    return 'buzz';
  }
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
