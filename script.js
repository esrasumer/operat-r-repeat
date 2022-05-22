// Operarötler

let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3;

// 1-Aritmetik Operatörler

val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = d++;

// 2-Atama Operatörleri

val = a;
val += a;
val /= a;

// 3-Karşılaştıma Operatörleri

val = a == b;
val = b == c;
val = b === c; // hem değer kontrolü hem type
val = 5 === '5';
val = a != b; // a b ye eşit değil mi
val = a !== b;
val = a > b;

// 4-Mantıksal Operatörler

// && (And)
// true && true => true
// true && false => false
// false && false => false

val = (a > b) && (a > c);

// || (Or)
// true && true => true
// true && false => true 
// false && false => false

val = (a > b) || (a < c);


//  ! (Not)
// true => false


console.log(val);
console.log(typeof val);