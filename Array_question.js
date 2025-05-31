const arr = [5 , 10 , 15 , 20];
console.log(arr.at(arr.length-1));

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(3, 0, 2); // - copyWithin(target, start, end) target -> starting position , starting-> starting element where you want to start ,
console.log(arr);

const arr = [1 , [2,3] , [4,[5]]];
console.log(arr.flat(2));

let arr = [10, 20, 30, 40, 50];
let result = arr.slice(2, 4); // Copies elements at index 2 and 3
console.log(result);

let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2); // Merging both arrays
console.log(result); // Output: [1, 2, 3, 4]

const arr = [1 , 2 ,  3 ];
arr.push(4);
arr.unshift(0);
console.log(arr);

const arr = ["Apple", "Banana", "Cherry","Orange" , "Mango"];
arr.pop();
arr.shift();
console.log(arr);

const arr = [10 , 20 , 30 , 40];
arr.splice(1,1,25);
console.log(arr);

const arr = ["red" , "blue" , "yellow" , "green" ,  "white"];
const result = arr.join("-");
console.log(result);

const arr = [100 , 200 , 300];
console.log(arr.toString());

let numbers = [10, 20, 30, 40, 50]; 
delete numbers[2]; // Deletes the element at index 2
console.log(numbers); // Output: [10, 20, undefined, 40, 50]
console.log(numbers.length); // Output: 5 (length remains unchanged)

let arr = [9, 8, 7, 6];
let newArr = arr.toSpliced(1, 1, 10, 11); // Removes element at index 1 (8) and inserts 10, 11
console.log("Original Array:", arr); // Output: [9, 8, 7, 6]
console.log("New Array:", newArr); // Output: [9, 10, 11, 7, 6]

let arr = [1, 2, 3, 4, 5];
arr.splice(-2, 2); // Removes the last two elements
console.log(arr); // Output: [1, 2, 3]

let originalArray = [7, 8, 9];
let newArray = [6, ...originalArray]; // Creates a new array with 6 at the beginning
console.log("Original Array:", originalArray); // Output: [7, 8, 9]
console.log("New Array:", newArray); // Output: [6, 7, 8, 9]


function joinWithPipe(arr) {
    return arr.join(' | ');
}
// Example usage:
let numbers = [1, 2, 3, 4, 5];
console.log(joinWithPipe(numbers)); // Output: "1 | 2 | 3 | 4 | 5"

function getLastItem(arr) {
    return arr[arr.length - 1]; // Accesses last element using .length
}

// Example usage:
let numbers = [5, 10, 15, 20];
console.log(getLastItem(numbers)); // Output: 20

function getSecondLast(arr) {
    // let n =  arr.length-2;
    return arr.at(-2); // Accesses the second-to-last element
}
// Example usage:
let numbers = [3, 6, 9, 12, 15];
console.log(getSecondLast(numbers)); // Output: 12


function reverseArray(arr) {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]); // Adds each element to the beginning
    }
    return reversed;
}
// Example usage:
let numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers)); // Output: [5, 4, 3, 2, 1]


function flattenArray(arr) {
    return arr.flat(); // Flattens one level deep by default
}
// Example usage:
let nestedArray = [[1, 2], [3, 4]];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4]



function combineNamesAndMarks(names, marks) {
    let combined = [];
    for (let i = 0; i < names.length; i++) {
        combined.push(`${names[i]}: ${marks[i]}`); // Creates "Name: Mark" format
    }
    return combined;
}
// Example usage:
let names = ["Ram", "Shyam", "Mohan"];
let marks = [80, 90, 85];
console.log(combineNamesAndMarks(names, marks)); // Output: ["Ram: 80", "Shyam: 90", "Mohan: 85"]


