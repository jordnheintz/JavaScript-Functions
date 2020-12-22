// 1
function greeting(){
    console.log("hey there");
}

// 2
function reverseNumber(num){
    return String(num).split("").reverse().join("")
}

// 3
function isPalindrome(str){
    let reversed = str.split("").reverse().join("")
    return str === reversed
}

// 4
function alphaOrder(str){
    return str.split('').sort().join('');
}

// 5
function changeToLowerCase(str){
    return str.toLowerCase()
}

// 6
function changeToUpperCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
}

// 7
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}

// 8
function multiply(a, b) {
    var product = a * b;
    console.log(product);
}

// 9
var arr = [1, 2, 3, 4];
function returnArray(){
    console.log(arr, arr.length)
}

// 10
function findRepeat(str) {
    const arr = str.split('');
    const hash = new Map();
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (hash.get(arr[i]) === undefined) {
        hash.set(arr[i], true);
      } else {
        const value = hash.get(arr[i]);
        if (value) {
          hash.set(arr[i], !value);
        }
      }
    }
    hash.forEach((v, k) => {
      if (!v)
        result.push(k);
    });
    return result;
}

// **Create a Puppy Age Teller:**
function calculateDogAge(age) {
    var dogYears = 7 * age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(3);
calculateDogAge(1);
calculateDogAge(9);