/* 
Write a function which increments a string, to create a new string.
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
Attention: If the number has leading zeros the amount of digits should be considered. 
*/

function incrementString(strng) {
  let num = strng.match(/\d+$/);
  if (!num) return strng + "1";
  let len = num[0].length;
  let newNum = (parseInt(num) + 1).toString();
  while (newNum.length < len) newNum = "0" + newNum;
  return strng.slice(0, strng.length - len) + newNum;
}
