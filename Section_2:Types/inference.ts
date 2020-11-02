//Type annotation
let apples = 5;

console.log(apples);

let speed = 'fast';
let hasName = true;

let nothingMuch = null;
let nothing = undefined;

//built-in object

let now: Date = new Date();

// array
let color: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {
}

let car: Car = new Car;

// Object Literal

let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function
// Parameters and Return Type
let logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

export default {};
