// primitives.js
// Demonstrates JavaScript primitive data types and common operations

console.log("=== JavaScript Primitive Data Types ===\n");

// 1) Undefined
let a;
console.log("a (undefined):", a);
console.log("typeof a:", typeof a);
console.log("---");

// 2) Null
let b = null;
console.log("b (null):", b);
console.log("typeof b (historic quirk):", typeof b); // returns "object"
console.log("---");

// 3) Boolean
let isDone = false;
console.log("isDone (boolean):", isDone);
console.log("typeof isDone:", typeof isDone);
console.log("---");

// 4) Number (integer, float, special values)
let n1 = 42;
let n2 = 3.14159;
let n3 = Number("123"); // numeric conversion
let nNaN = Number("abc"); // NaN
console.log("n1 (number):", n1);
console.log("n2 (number):", n2);
console.log("n3 (from string):", n3);
console.log("nNaN:", nNaN, "isNaN?", Number.isNaN(nNaN));
console.log("Infinity example:", 1 / 0);
console.log("typeof n1:", typeof n1);
console.log("---");

// 5) BigInt (for integers larger than Number.MAX_SAFE_INTEGER)
let big = 9007199254740991n; // note the `n` suffix
console.log("big (BigInt):", big);
console.log("typeof big:", typeof big);
console.log("---");

// 6) String
let s1 = "Hello";
let s2 = 'World';
let s3 = `Template literal: ${s1} ${s2}!`;
console.log("s1 (string):", s1);
console.log("s2 (string):", s2);
console.log(s3);
console.log("typeof s1:", typeof s1);
console.log("---");

// 7) Symbol (unique and immutable)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("sym1 === sym2 ?", sym1 === sym2); // false (unique)
console.log("typeof sym1:", typeof sym1);
console.log("---");

// Quick comparisons & coercion
console.log("Quick comparisons & coercion:");
console.log("null == undefined ->", null == undefined);   // true
console.log("null === undefined ->", null === undefined); // false
console.log("'5' + 3 ->", '5' + 3);                       // "53" (string concat)
console.log("'5' - 3 ->", '5' - 3);                       // 2 (numeric coercion)
console.log("true + true ->", true + true);               // 2 (true -> 1)
console.log("---");

// Distinguish primitives vs objects
console.log("Primitives vs wrapper objects:");
let ps = "abc";
let so = new String("abc"); // String object (not primitive)
console.log("ps typeof:", typeof ps);   // string
console.log("so typeof:", typeof so);   // object
console.log("ps === so ->", ps === so); // false
console.log("---");

// Immutable nature of primitives
console.log("Primitives are immutable:");
let orig = "hello";
let upper = orig.toUpperCase();
console.log("orig:", orig);
console.log("upper:", upper);
console.log("---");

// Utility helpers
function printTypeAndValue(name, value) {
  console.log(`${name}:`, value, "  (typeof ->", typeof value, ")");
}

console.log("\nUtility examples:");
printTypeAndValue("undefined example", undefined);
printTypeAndValue("null example", null);
printTypeAndValue("boolean example", true);
printTypeAndValue("number example", 123.45);
printTypeAndValue("bigint example", 123n);
printTypeAndValue("string example", "abc");
printTypeAndValue("symbol example", Symbol("s"));

console.log("\n=== End of primitives demo ===");

