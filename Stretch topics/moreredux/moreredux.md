# More on Redux

This lesson reviews Redux, overviews combining reducers and answers TNTs questions.

## Learning objectives

* TNTs will review Redux
* TNTs will learn about combined reducers
* TNTs will work with examples

## Time required and pace

Total time: 1 hours 15

* 15 minutes - pre-session
* 60 minutes – instructional session
  * Data (5 minutes)
  * Review of Redux (15 minutes)
  * Working with an example (20 minutes)
  * Combining reducers (20 minutes)
*  post-session: work on your own project

## References

* [PDF of the instruction session](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/moreredux/MoreRedux.pdf)
* [Redux basic tutorial](https://redux.js.org/basics/basic-tutorial)
* [Redux with TypeScript](https://redux.js.org/recipes/usage-with-typescript)
* [Store](https://redux.js.org/recipes/configuring-your-store)
* [Actions](https://redux.js.org/basics/actions)
* [Reducers](https://redux.js.org/basics/reducers)
* [Providers](https://react-redux.js.org/api/provider)
* [Connect](https://react-redux.js.org/api/connect)
* [Videos on React with Redux - Parts 1 to 11](https://www.youtube.com/watch?v=DiLVAXlVYR0)
* [Combining reducers](https://redux.js.org/api/combinereducers)

## Pre-session (15 minutes)

Prepare for the session [here](https://github.com/tnt-summer-academy/Curriculum/wiki/%5BStretch%5DMore-on-Redux)

## Instructional session (60 minutes)

### Data (5 minutes)

* What types of data are you using in your app? 
* What are the different options to save data in your app?  
* What are the differences between using a state, a store and a database?

### Review of Redux (15 minutes)

#### What is Redux? 

* Redux is a state management container.
* React permits to solve the problems of making the application state consistent with the UI. 
* **Redux**, on the other hand, was introduced to maintain the application state. Each component having a state complicates maintaining a general application state, especially with the dependencies between components. Your typical app does a lot of state generating, processing, and transferring.
* Redux lets us keep the state that persists through out the app in one place, the store, that can be accessed by every component. The state (of a compopnent) is accessible by only one component. 

#### Three principles of Redux

* Single source of truth - the global state of the application is saved in a single store.
* Store is read-only - the only way to change the store is to emit an action.
* Changes are made through pure functions - these functions are called reducers. They take the state and an action as parameter and return a new state.

#### Architectural overiew of Redux 

![redux architecture](https://github.com/tnt-summer-academy/Curriculum/blob/main/Week%202/%5BENG2.4%5Dreduxhighlevelarchitecture.png)

[Picture from here](https://www.kirupa.com/react/using_redux_with_react.htm)

#### Review of each component

There are four basic parts in Redux: Store, Actions, Reducer, and Connect. 

##### Store

* The whole state of the app is stored inside a single store. 
* The store is created once.
* The only way to change the store is to emit an action. 

##### Actions

* Actions are used to change the store.  
* Actions do not modify the store directly. 
* Actions are dispatched to express an intent to modify the store.

##### Reducers

* Reducers tie together Actions and Store and returns a new state object. 
* Reducers are collections of functions that map / dispatch actions to the store.
* Reducers are called “pure functions” because they do nothing but return a value based on their parameters. They have no side effects into any other part of the system.

##### Connect

* We need to connect React components to Redux.
* Connect is used to connect the state of the app to the components. The app state will become components props using some map functions. 

#### Steps for the implementation of Redux

* Step 0: Setup Redux (index.tsx)

* Step 1: What state do we need?

* Step 2: Represent the state in TypeScript Redux? (types.tsx)

* Step 3: Represent the actions (actions.tsx)

* Step 4: Write the reducer to make the actions happen (reducer.tsx)

* Step 5: Using the state in your components

### Sample app with Redux in Action: Coding Edu4You

* What would the store be in this example?

* Let's go through the steps to implement the app

* Code [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/courses-redux)

![redux1](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/reduxedu1.png)

![redux2](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/reduxedu2.png)

### Sample app that combines reducers: Coding Cake/Icecream example

* Why would we need to combine reducers? 

  * As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.
  * Is it always possible?

* Let's go through the steps to implement the app

* Code [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/combine-redux)

![reduxcombine](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/reduxcombine.png)


# Post-session

See the post-session [here](https://github.com/tnt-summer-academy/Curriculum/wiki/%5BStretch%5DMore-on-Redux)


# Code

[Sample code - Edu4You](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/courses-redux)

[Sample code - Combining reducers](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/combine-redux)
