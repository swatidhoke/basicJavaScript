// operatorsDemo.js

// 1. Arithmetic Operators
console.log("=== Arithmetic Operators ===");
let a = 10, b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);
console.log("++a =", ++a);
console.log("--b =", --b);
console.log("\n");

// 2. Assignment Operators
console.log("=== Assignment Operators ===");
let x = 5;
console.log("Initial x =", x);
x += 2; console.log("x += 2 →", x);
x -= 1; console.log("x -= 1 →", x);
x *= 3; console.log("x *= 3 →", x);
x /= 2; console.log("x /= 2 →", x);
x %= 4; console.log("x %= 4 →", x);
x **= 2; console.log("x **= 2 →", x);
console.log("\n");

// 3. Comparison Operators
console.log("=== Comparison Operators ===");
let m = 7, n = "7";
console.log("m == n:", m == n);
console.log("m === n:", m === n);
console.log("m != n:", m != n);
console.log("m !== n:", m !== n);
console.log("m > 5:", m > 5);
console.log("m < 10:", m < 10);
console.log("m >= 7:", m >= 7);
console.log("m <= 6:", m <= 6);
console.log("\n");

// 4. Logical Operators
console.log("=== Logical Operators ===");
let p = true, q = false;
console.log("p && q =", p && q);
console.log("p || q =", p || q);
console.log("!p =", !p);
console.log("\n");

// 5. Bitwise Operators
console.log("=== Bitwise Operators ===");
let bit1 = 5;  // 0101
let bit2 = 3;  // 0011
console.log("bit1 & bit2 =", bit1 & bit2);
console.log("bit1 | bit2 =", bit1 | bit2);
console.log("bit1 ^ bit2 =", bit1 ^ bit2);
console.log("~bit1 =", ~bit1);
console.log("bit1 << 1 =", bit1 << 1);
console.log("bit1 >> 1 =", bit1 >> 1);
console.log("\n");

// 6. Ternary Operator
console.log("=== Ternary Operator ===");
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Age check:", result);
console.log("\n");

// 7. Type Operators
console.log("=== Type Operators ===");
console.log("typeof 123 ->", typeof 123);
console.log("typeof 'JS' ->", typeof 'JS');
console.log("typeof true ->", typeof true);
console.log("typeof undefined ->", typeof undefined);
console.log("typeof null ->", typeof null);
