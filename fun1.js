function reverseString(str) {
    // Your code here
    let revarr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        revarr.push(str[i])
    }
    return revarr.join('');
    
}
console.log(reverseString('test'));

function isPalindrome(str) {
  // Your code here
  return str === reverseString(str)
}
console.log(isPalindrome('racecar')); 

function fizzBuzz() {
  // Your code here
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

function mostFrequent(arr) {
    return arr.map((item)=>{
        return {
            item: item,
            count: arr.filter((x) => x === item).length
        }
    }).reduce((a, b) => {
        return a.count > b.count ? a : b;
    })
    
}
console.log(mostFrequent([1, 2, 3, 1, 2, 1, 4, 5, 6, 7, 8, 9, 10]));

// Input: [1, [2, [3, 4], 5]]
// Output: [1, 2, 3, 4, 5]
function flattenArray(arr) {
  // Your code here
  console.log('Flattening array:', arr);
  console.log(arr.flat(Infinity));

}
console.log(flattenArray([1, [2, [3, 4], 5]])); // Output: [1, 2, 3, 4, 5]



function debounce(func, delay) {
  // Your code here
    let timeout;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func();
        }, delay);
    }
}

const fun1 = debounce(flattenArray, 1000)