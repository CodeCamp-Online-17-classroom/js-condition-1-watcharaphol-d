// write code here
console.log('1' > 4);               // The result is: false
console.log('' <= 1);               // The result is: true
console.log('apple' > 'pineapple'); // The result is: false
console.log(undefined == null);     // The result is: true
console.log(undefined === null);    // The result is: false
console.log(NaN !== 2);             // The result is: true
console.log(NaN == NaN);            // The result is: false
console.log(NaN === NaN);           // The result is: false

// ======== Why NaN != NaN ========
// NaN is a very special value: By definition, it's not equal to itself. That comes from the IEEE-754 standard that JavaScript numbers draw on.