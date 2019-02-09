//console.log("Hi from ts");
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
let strArr: string[];
let numArr: number[];
let boolArr = boolean[];
*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = "Hello World".slice(0, 3);
myNum = 22;
myBool = true;
myVar = true;

strArr = ["Hello", "World"];
numArr = [1, 2, 3, 4, 5];
boolArr = [true, false, true];

strNumTuple = ["Hi", 1];

let myVoid: void = null;
let myVoid2: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;
let myUndefinedNull: undefined = null;

console.log(myBool);
