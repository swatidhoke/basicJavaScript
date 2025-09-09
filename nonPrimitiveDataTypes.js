
```javascript
// nonPrimitiveDataTypes.js
// Non-Primitive Data Types in JavaScript
// These are reference types and stored in heap memory

```
// 1. Object
let person = {
    name: "Swati",
    age: 30,
    city: "California"
};
console.log("Object:", person);

// 2. Array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Array:", fruits);

// 3. Function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log("Function:", greet("Swati"));

// 4. Date
let today = new Date();
console.log("Date:", today);

// 5. Regular Expression
let pattern = /hello/i;
console.log("RegExp Test:", pattern.test("Hello World"));

// 6. Map
let map = new Map();
map.set("name", "Swati");
map.set("role", "Engineer");
console.log("Map:", map);

// 7. Set
let set = new Set([1, 2, 3, 3, 4]); // duplicate 3 ignored
console.log("Set:", set);

// 8. WeakMap (keys must be objects)
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "data");
console.log("WeakMap has obj:", weakMap.has(obj));

// 9. WeakSet (stores only objects)
let weakSet = new WeakSet();
let obj2 = {};
weakSet.add(obj2);
console.log("WeakSet has obj2:", weakSet.has(obj2));

```
📌 **Summary of Non-Primitive Types**:

* `Object`
* `Array`
* `Function`
* `Date`
* `RegExp`
* `Map`
* `Set`
* `WeakMap`
* `WeakSet`
```
