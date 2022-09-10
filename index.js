import strHello, * as math from "./math.js";

console.log(math);
console.log(typeof math);
console.log(strHello);

const res1 = math.sum(2, 3);
console.log(res1);
const res2 = math.sub(20, 2);
console.log(res2);

// console.log(math.sayHello()); // error! no export

const res3 = math.superSum(1,1);
console.log(res3);

const res4 = math.superSum(10,3,2,9,7,20,100,46,55,23);
console.log(res4);