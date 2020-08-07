# Intro to VS Code and TypeScript

This lesson introduces Visual Studio Code and TypeScript including why this set of technology is important, a tour and basics of using the IDE, and TypeScript fundamentals.

[TypeScript](https://www.typescriptlang.org) is a typed superset of JavaScript. It is more structured than JavaScript. It permits, in particular, to define classes, modules and interfaces, which is not possible to do in JavaScript. 

## Learning objectives

* TNTs will be able to navigate Visual Studio Code.
* TNTs will be able to create new and run TypeScript file.
* TNTs will learn the basics of TypeScript datatypes, functions, classes etc.

## Time required and pace

Total time: 2 hours 30 min

* 60 minutes - pre-session: installations, VS Code tour, create and run first TS code (Hello World!)
* 60 minutes - instructional session 
  * review VS code and discuss the use of an IDE to support development (10 minutes)
  * review Hello World! and discuss issues with running it, tour of the files and tools (10 minutes)
  * introduction to TS and walkthrough examples (Samples/Intro_TS.ts) (40 minutes)
* 30 minutes - post-session: fix and complete the code sample (Samples/TypeScriptPractice.ts)

## References

* [Node.js Package Manager](https://www.npmjs.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Getting started with VS](https://code.visualstudio.com/docs)
* [VS Code User Interface Guide](https://code.visualstudio.com/docs/getstarted/userinterface)
* [VS Code User Shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings)
* [Debugging in VS](https://code.visualstudio.com/docs/editor/debugging)
* [TypeScript in VS Code](https://code.visualstudio.com/docs/languages/typescript)
* [TS Hello World](https://code.visualstudio.com/docs/typescript/typescript-tutorial)
* [TS in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [Basic TS datatypes, functions and more](https://www.typescriptlang.org/docs/handbook/basic-types.html)

## Pre-session (60 minutes)

View the pre-session [here](https://github.com/tnt-summer-academy/Curriculum/wiki/%5BENG1.1%5D-Intro-to-VS-Code-and-TS).

## Lesson details (60 minutes)

### Review: Visual Studio Code tour, create and run TypeScript Hello World (20 minutes)

1. Open VS Code, without a workspace folder open.
    * Highlight the activity bar, status bar, and side bar.
    * Highlight the terminal and its uses for installation and execution.
    * Highlight the "Help" option in the toolbar for quick access to references.
    * Call out that "Learn" is in the landing page. It takes time to get to adopt VS Code, for everyone.
    * Highlight the palette (Command+Shift+P) to access commands.
    * Hightlight the "Extensions" section. 

2. Review the [Hello World tutorial](https://code.visualstudio.com/docs/typescript/typescript-tutorial) and make a tour of the file system.
   * Any issues in running the code?

3. VS Code TS language support features
    * Introduce and demo - IntelliSense and Code Snippets.
    * Here to help but you need to drive and understand the road.
    * IntelliSense - code completion, hover info, and signature information.
    * Snippets - chunks of TS (try for CTRL+space).
    
4. Tour of debugging
   * While in a TS file, click on the debug/run icon in the activity bar or on Run / Start Debugging in the menu.
     * Create a `launch.json` configuration file. Select Node.js as the environment. This allows you to run the TS file in debug mode. 
     * You can set breakpoints/logpoints/debug the file. 
     * Running switches to debug in the side bar. Check the debug console.
     * Once you have a debug breakpoint or other, the debug toolbar will appear with different options (Continue/Pause, Step over/into/out, Restart, Stop).
     * Click the top 'Explorer' icon to get back to the folder view.

5. Discuss VS Code support to work productively - code completion, extensions, code formating (SHIFT+OPTION+F), debugging, versioning etc.

6. Clone the [Samples repo](https://github.com/tnt-summer-academy/Samples)
    * To clone the sample, start in VS Code.
       1. In the command palette (Command+SHIFT+P) type `git: Clone`. Click on Clone from GitHub and enter your GitHub credentials.
       2. Enter tnt-summer-academy to search for the tnt-summer-academy/Samples repository and select the local directory you want to use. 
       3. Find the file IntroTS.ts to use it for the remainder of the session.
       
### Introduction to TS datatypes, functions, classes etc. (40 minutes) 

[TypeScript](https://www.typescriptlang.org) is a typed superset of JavaScript. It is more structured than JavaScript. It permits, in particular, to define classes, modules and interfaces, which is not possible to do in JavaScript. To name some properities, it is object-oriented and typed, detects errors at compile time, and supports optional parameters. TS files are compiled to JavaScript.

Samples for datatypes, functions, objects, classes, use of the fat arrow symbol (`=>`) and generics are available here: [Intro_TS.ts]([ENGResource]Intro_TS.ts). Open the file in VS Code to go through it with the descriptions that follow.

1. Datatypes - [overview of the datatypes](https://www.typescriptlang.org/docs/handbook/basic-types.html), [overview of variable declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
    * Datatypes - what type of value can be assigned to a variable depends on the datatype. Boolean for true false statements, numbers, strings for text...
    * TS uses types to describe data (get it, *Type*Script), JS doesn't
    * There are three different ways to define a variable.
       * `var` - scope, where it can be used from, is global or function/locally making it easy to accidently re-define.
       * `let` - block, scoped. Block in TS is a chunk of code bounded by {}. Let makes it easier to manage variables
       * `const` - maintain the same value, cannot be updated, can only be accessed within the block it was declared.
    * `let` is used to define variables inside a scope and var can be accessed outside a scope

2. Functions - [overview of functions](https://www.typescriptlang.org/docs/handbook/functions.html#functions)
    * Functions are building blocks of applications in JS.
    * They're used for abstraction. TS also has classes, name spaces, and modules.
    * Functions can be named or anonymous.
       * *Why is it important at this stage?*
    * Functions can have types and optional default parameters
      * Types define the datatypes of the variables passed into and returned from the function.
      * Parameters are what's passed into the function.

   ```typescript
   function mult2(x: number): number {
      return 2*x;
   }
   ```

3. Objects - [overview of objects](https://www.tutorialspoint.com/typescript/typescript_objects.htm)
   * An object represents key value pairs that describe something. For example, a rectangle has length and width. A contact may have name, phone number and address.
   * Reference - creates an additional name for the same object. Changing a value in the reference object, changes the original object.
   * Copy - creates a copy (clone) of the object. Changing the copy object will not impact the original object.
   * An [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html) represents one of TS core principles, type checking the shape values have. Interfaces name the types.

   ```typescript
   // Object
   let boss = {
       name:"Michael Scott",
       phone:2725559393,
       address: "Scranton, PA"
   }
   
   // Interface
   interface Bosses {
    name: string;
    phone: number;
    address: string;
    bossrank?: number;
   }

   const michaelScott:Bosses = {
    name:"Michael Scott",
    phone:555555555,
    address: "Scranton, PA",
    bossrank: 1
   }
   ```   

4. Class - [overview of classes](https://www.typescriptlang.org/docs/handbook/classes.html#classes)
   * A class in object-oriented programming languages, like TS, is a template for creating objects. Classes are a feature of TS, only available in more recent versions of JS (from 2015 onwards).
   * A class contains properties, constructors, and methods. Constructors are methods automatically invoked when an instance of the class is created.
   * In a class, `this.` denotes that it's referring to one of the members in the class.
   * `new` is used to construct an instance of the class.
   * TS also introduces inheritance. Inheritance extends classes.
      * Classes inherit properties and methods from the base class.
      * View the [animal class example](https://www.typescriptlang.org/docs/handbook/classes.html#inheritance).
   
5. Arrow functions - [overview of arrow functions](https://www.typescriptlang.org/docs/handbook/functions.html)
   * Fat arrow notation (`=>`) is used for anonymous functions. They are also called lambda functions.
   * We drop the need of the `function` keyword and use `let`.
   * This notation separates the parameters (left-hand side) from the function body (right_hand side).
   * If the function does not return anything, use `void`.

   ```typescript
   let sayHi = (): string => {return "Hello!!!"};
   
   // TS syntax without =>
   function mult2_ts(x: number): number {
     return 2*x;
   }
   
   // TS with => and without types
   let mult2_b = x => 2*x;
   
   // TS with => and with types
   let mult2_e: (number) => number = x => 2*x;
   
   // using =>, types and return
   let mult2_a = (x:number):number => {
     return 2*x;
   }
   ```

6. Generics - [overview of generics](https://www.typescriptlang.org/docs/handbook/generics.html)
   * Generics permit components to work on a variety of types rather a single one. They also constraint the component.
   * Types are declared with `<>`, e.g., `<string>`
   * When definining elements as generic, use captial 'T' to "stand in" for the type
      
   ```typescript
   // array of strings
   let myarray:Array<string> = ["Microsoft", "TNTs"];
   
   // using the type any
   function fun(args: any): any {
    return args;
   }

   // using generics
   function fun_g<T>(args:T):T {
    return args;
   }
   
   // custom array class - array of Ts
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
   ```

### Post-session (30 minutes)

* Fix and complete the code sample [here](https://github.com/tnt-summer-academy/Exercises/tree/main/Week_1/ENG1.1) (TypeScriptPractice.js)
  * Open the file.
  * Read through the code comments and identify what the code is trying to do.
  * Fix the code and complete the sample.

## Stretch 

* [TypeScript vs JavaScript pros and cons](https://www.youtube.com/watch?v=D6or2gdrHRE) - dig into the pros and cons of TypeScript compared to JavaScript.
* [TypeScript Playground](https://www.typescriptlang.org/play/index.html) - check out the online editor for quickly running and experimenting with TS.
* [What's the difference between a console, a terminal, and a shell](https://www.hanselman.com/blog/WhatsTheDifferenceBetweenAConsoleATerminalAndAShell.aspx)

