const toNumber = (value) => +value;

function sayHello(){
    return 'Hello. I am sayHello funnction';
}
const COLOR = "RED";

export const pow2 = (base) => base ** 2;
export const sum = (a,b) => a+toNumber(b);
export const sub = (a,b) => a-b;

export const superSum = (...args) => 
args.reduce((total, item) => total + item, 0);

export default 'hello es modules';

