/**
*Basic Types
*/
console.log('----------')
console.log('Basic Types')

//Boolean - true/false
let isIceCreamCold: boolean = true

//Number
let king : number = 23
let kingHex : number = 0x17
let kingBinary : number = 10111
let kingOctal : number = 0o27

console.log('They are all number:', king)

//String - can use double "" or single ' '
let color : string ="blue"
color = 'teal'

//Expressions with strings require a backtick/backquotes ` `
let sentence : string = `The color ${ color } is trending.`
console.log('String sample:', sentence)

//Arrays index start with 0
let prime: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23];
console.log('The first nine prime numbers are:', prime)
console.log('The third prime number is:' , prime[2])

//Enums give more friendly names to sets of numeric values, default number begins at 0
enum Rainbow {Red, Orange, Yellow, Green, Blue, Indigo, Violet}
let colorName: string = Rainbow[3];
console.log('The fourth color of the rainbow is:', colorName)

//Constants can't be changed, uncomment to see the error
const canTChangeThisNumber: number = 15;
//canTChangeThisNumber = 20;
let canChangeThisNumber: number = 1;
canChangeThisNumber = -1;

//Let scopes a variable to the block, defined by {}, uncomment to see the error
function testLet() {
    var unscopedVar = "I'm a var";
    let scopedLet = "I'm a let";
  
    console.log(unscopedVar, scopedLet);
  
    {
      let scopedLetInsideBlock = "I'm a let inside a block";
      console.log(scopedLetInsideBlock);
    }
  
    //console.log(scopedLetInsideBlock); // ReferenceError
    console.log('We are still here:', unscopedVar, scopedLet)
  }
  
  testLet();

console.log('----------')

/**
* Functions
*/
console.log('Functions')

//Named function
function add(a: number, b: number): number {
    return a + b;
  }
  console.log('Function add:', add(2,3))

//Anonymous function
  let added = function(x: number, y: number) {return x + y};
  console.log('Function added:', added(2,3))

//Function without types
function addStrings(p,q){
    return p + q; 
  }
  console.log('Function addStrings:', addStrings('sun','flower'));
  console.log('Function addStrings:', addStrings(1,22),'addStrings wasn not typed so it can also take numeric datatypes.') 
  
console.log('----------')

/**
* Objects
*/
console.log('Objects')

let boss = {
    name:"Michael Scott",
    phone:"555-555-5555",
    address: "Scranton, PA"
}
console.log("The world's best boss is:", boss.name, boss.phone, boss.address)

//Reference of an object
let bestBoss = boss;
boss.phone = "+1555-555-555";
console.log("The world's best boss is still:", boss.name, boss.phone, boss.address)

//Copy of an object
let newBoss = {...boss}
newBoss.name = "Andy Bernard"
console.log("The new boss is:", newBoss.name, newBoss.phone, newBoss.address)
console.log("The wold's best boss remains:", boss.name, boss.phone, boss.address)

console.log('----------')

interface Bosses {
    name: string;
    phone: number;
    address: string;
    bossrank: number;
}

const michaelScott = {
    name:"Michael Scott",
    phone:555555555,
    address: "Scranton, PA",
    bossrank: 1
}

const andyBenard = {
    name:"Andy Bernard",
    phone:555555555,
    address: "Scranton, PA",
    bossrank: "number2"
}

function getBestBoss(boss1: Bosses, boss2: Bosses){
    if(boss1.bossrank < boss2.bossrank){
        return boss1;
    }
    else
        return boss2;
}

//Uncomment to see error with Andy not following the interface
//getBestBoss(michaelScott,andyBenard)

/**
* Classes
*/
console.log('Classes')

//Class contact has two properties, one method
class Contact {
    name: string;
    phone: number;

    constructor(flNames: string, pnum: number){
        this.name = flNames
        this.phone = pnum
        console.log(this.name, 'added to system')
    }

    printBusinessCard(){
        console.log('The business card for', this.name, 'is', this.name, this.phone)
    }
}

//SalesPerson adds another method to Contact for objects of that extended class
class SalesPerson extends Contact{
    salesNoise(){
        console.log('Ring ring phone call for', this.name)
    }
}

const pam = new Contact("Pam Beasley", 5558885555);
const jim = new SalesPerson("Jim Halpert", 5554444434);

pam.printBusinessCard()
jim.printBusinessCard()
jim.salesNoise()
//Uncomment to see error
//pam.salesNoise()


/**
* Functions  using fat arrow =>
*/
console.log('Functions using fat arrow =>')

// different ways to compute 2*x using =>

let sayHi = (): string => { return "Hello!!!" };

console.log(sayHi())

// JS syntax - var / Use the TS syntax!
var mult2_js = function (x) {
    return 2 * x;
}

console.log("mult2_js", mult2_js(9));

// original TS syntax
function mult2_ts(x: number): number {
    return 2 * x;
}

console.log("mult2_ts", mult2_ts(5));

// using =>, types and return
let mult2_a = (x: number): number => {
    return 2 * x;
}

console.log("mult2_a", mult2_a(7));

// without types and without return
let mult2_b =
    x => 2 * x;

console.log("mult2_b", mult2_b(6));

// with types and no return
let mult2_d = (x: number) => 2 * x;

console.log("mult2_d", mult2_d(10));

// with types and without return
let mult2_e: (number) => number =
    x => 2 * x;

console.log("mult2_e", mult2_e(4));

console.log('----------')

/**
* Generics
*/
console.log('Generics')

// an array of strings
let myarray:Array<string> = ["Microsoft", "TNTs"];

// myarray is an array of strings uncomment to see the error
// let myarray1:Array<string> = [1,2];

// generics and functions

// using the type any
function fun(args: any): any {
    return args;
}

// using generics
function fun_g<T>(args:T):T {
    return args;
}

console.log(fun_g<string>("Hello"))

// generic class

// class as custom array of elements of type T 
class customArray<T> {
    items: T[];

    constructor() {
        this.items = []
    }
  
    getItems(): T[] {
      return this.items;
    }

    addItem(item:T):void {
        this.items.push(item);
    }
}

// create an array of numbers, add elements to the array, and print the array
let numarray = new customArray<number>();

numarray.addItem(10);
numarray.addItem(18);
numarray.addItem(-5);

// printing the array with a for loop
console.log("Printing the array - with for loop")
for (let index = 0; index < numarray.getItems().length; index++) {
    const elt = numarray.getItems()[index];
    console.log(elt);
}

// printing the array with map. map calls the function as parameters on each element of the array
console.log("Printing the array - with map")
// print the array using map
let printelt = (x) => console.log(x);
numarray.getItems().map((e) => printelt(e));

