// 1. Please write a function that shows the usage of closures
function value() {
    let i = 0;
    function increment() {
        i++;
    }
    function returnValue() {
        return i;
    }

    return { increment, returnValue }
}

const closuersInUse = value()
closuersInUse.increment()
closuersInUse.increment()
closuersInUse.increment()
console.log(closuersInUse.returnValue())

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34
function sumOfArray() {
    let result = 0;
    let data = [9, 1, 22, 0, 2]
    data.map((item) => {
        result = result + item
    })
    console.log(result)
}

sumOfArray()

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]
function recFlatten() {
    let flat = [];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            flat.push.apply(flat, recFlatten.apply(this, arguments[i]));
        } else {
            flat.push(arguments[i]);
        }
    }
    return flat;
}

console.log(recFlatten([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5]))

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]
function getArraysIntersection(a1, a2) {
    return a1.filter(
        function (n) {
            return a2.indexOf(n) !== -1;
        });
}
let array1 = ['b', 3, 4, 76, 'c'];
let array2 = ['a', 'b', 4, 76, 21, 'e'];
let intersectingColors = getArraysIntersection(array1, array2);
console.log(intersectingColors)


// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']
function getArrayDiff(a3, a4) {
    let result = [];
    for (let i = 0; i < a3.length; i++) {
        if (a4.indexOf(a3[i]) === -1) {
            result.push(a3[i]);
        }
    }
    for (let i = 0; i < a4.length; i++) {
        if (a3.indexOf(a4[i]) === -1) {
            result.push(a4[i]);
        }
    }
    return result;
}
console.log(getArrayDiff(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']))


// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]
function arrayInput(a1, a2) 
{
    let final = [];
    let numberInMap = [];
    a1.map((element, ind) => {
        a2.map((element2, ind2) => {
            if (ind === ind2) {
                numberInMap.push(element)
                numberInMap.push(element2)
                final.push(numberInMap)
                numberInMap = []
            }
        })
    })
    console.log(final)
}
arrayInput([1,2,3], [4,5,6,7])


// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'
function getValue(path, obj) {
    let value = obj;
    for (let i = 0; i < path.length; i++) {
        if (value[path[i]]) {
            value = value[path[i]];
        } else {
            return null;
        }
    }
    return value;
}
let obj = { a: { b: { c: { d: '23' } } } }
let path = ['a', 'b', 'c', 'd']
console.log(getValue(path, obj))

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false
function compare(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let i = 0; i < keys1.length; i++) {
        if (obj1[keys1[i]] !== obj2[keys1[i]]) {
            return false;
        }
    }
    return true;
}
let obj1 = { a: 'b', c: 'd' }
let obj2 = { c: 'd', a: 'b' }
console.log(compare(obj1, obj2))
let obj3 = { a: 'c', c: 'a' }
let obj4 = { c: 'd', a: 'b', q: 's' }
console.log(compare(obj3, obj4))

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }
function removeKeys(keys, obj) {
    let newObj = {};
    for (let key in obj) {
        if (keys.indexOf(key) === -1) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
let keys = ['color', 'size'];
let obj5 = { color: 'Blue', id: '22', size: 'xl' };
console.log(removeKeys(keys, obj5))


