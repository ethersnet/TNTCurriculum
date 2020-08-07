# Intro to Redux

This lesson explains what Redux is and overviews how to use it in a practice. Another lesson will cover it with more details. 

## Learning objectives

* TNTs will understand the importance of Redux
* TNTs will have a **basic understanding** of Redux
* TNTs will learn how the store, reducers, actions and connect work together


## Time required and pace

Total time: 2 hours 45

* 45 minutes - pre-session
* 60 minutes – instructional session
  * Why Redux? (10 minutes)
  * Redux concepts and architecture (15 minutes)
  * Coding a React app with Redux (35 minutes)
* 60 minutes - post-session: pair-programming exercise

## References

* [Redux basic tutorial](https://redux.js.org/basics/basic-tutorial)
* [Redux with TypeScript](https://redux.js.org/recipes/usage-with-typescript)
* [Store](https://redux.js.org/recipes/configuring-your-store)
* [Actions](https://redux.js.org/basics/actions)
* [Reducers](https://redux.js.org/basics/reducers)
* [Providers](https://react-redux.js.org/api/provider)
* [Connect](https://react-redux.js.org/api/connect)
* [Videos on React with Redux - Parts 1 to 11](https://www.youtube.com/watch?v=DiLVAXlVYR0)

## Pre-session (45 minutes)

Prepare for the session [here](https://github.com/tnt-summer-academy/Curriculum/wiki/%5BENG2.4%5D-Intro-to-Redux)

## Instructional session (60 minutes)

### What is Redux and why do we need it? (10 minutes)

* Redux is a state management container.
* React permits to solve the problems of making the application state consistent with the UI. 
* Redux, on the other hand, was introduced to maintain the application state. Each component having a state complicates maintaining a general application state, especially with the dependencies between components. Your typical app does a lot of state generating, processing, and transferring.
* So far, you have only been exposed to immutable properties passed into components (from their parents) and mutable states changed within components.
* What if we need to pass a mutable property between components, change the said property and have the change affect different components?
* Redux lets us keep the state that persists through out the app in one place, the store, that can be accessed by every component.

There are four basic parts in Redux: Store, Actions, Reducer, and Connect. We will go over what each part does and provide an illustrative example. 

![Why redux](./%5BENG2.4%5D%20whyredux.png)

[Picture from here](https://www.systango.com/blog/free-react-redux-starter-kit)

### Architectural overiew of Redux (15 minutes)

#### Three principles of Redux

* Single source of truth - the global state of the application is saved in a single store.
* Store is read-only - the only way to change the store is to emit an action.
* Changes are made through pure functions - these functions are called reducers. They take the state and an action as parameter and return a new state.

#### High level architecture view

![redux architecture](./%5BENG2.4%5Dreduxhighlevelarchitecture.png)

[Picture from here](https://www.kirupa.com/react/using_redux_with_react.htm)

#### Store

* The whole state of the app is stored inside a single store. 
* The store is created once.
* The only way to change the store is to emit an action. 

#### Actions

* Actions are used to change the store.  
* Actions do not modify the store directly. 
* Actions are dispatched to express an intent to modify the store.

#### Reducers

* Reducers tie together Actions and Store and returns a new state object. 
* Reducers are collections of functions that map / dispatch actions to the store.
* Reducers are called “pure functions” because they do nothing but return a value based on their parameters. They have no side effects into any other part of the system.

#### Connect

* We need to connect React components to Redux.
* Connect is used to connect the state of the app to the components. The app state will become components props using some map functions. 

#### Sample app with Redux in Action

![https://github.com/tnt-summer-academy/Curriculum/blob/main/Week%202/%5BENG2.4%5DReduxSample.gif]([ENG2.4]ReduxSample.gif)

[Gif from here](http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production)

### Coding a React app with Redux (35 minutes)

#### High-level steps

To add Redux to an app:

* Provide your app a reference to the Redux store.
* Map the action creators, dispatch functions, and state as props to whatever component needs data from the store.

#### Counter example

The code below covers a counter example. The screenshot shows the final result. The session uses redux-simple-counter [here](https://github.com/tnt-summer-academy/Samples/tree/main/Week_2).

![counter example](./%5BENG2.4%5Dcounter-example-screenshot.png)

#### Installation

* `npm install`

#### Files organization

* `components` contains the `Counter` component.
* `redux-components` contains the Redux-related files: actions.tsx, reducer.tsx and types.tsx 

#### Store

* Store is an object with several methods
  * `createStore(<reducer> [<preloaded state>, <enhancer>])` - creates a Store and returns the whole state tree of the application. 
  * `store.getState()` - returns the complete state tree of the application.
  * `store.dispatch(action)` - dispatches an action and returns the next state. This is the only way to trigger a state change.

**index.tsx**

```typescript
// imports
store = createStore(<reducer>);
```
#### Provider

* React-Redux uses the `<Provider />` tag, which makes the Redux store available to the rest of your app.
* The application will render a `<Provider>` at the top level, with the entire app’s component tree inside of it.

**index.tsx**

```typescript
// imports
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);
```

Check the imports in **index.tsx**

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './redux-components/reducer';
import './index.css';
```

**App.tsx** will render the `Counter` component.

```typescript
import React from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component<{}, {}>{
  render() {
    return (<Counter />)
  }
}
```


#### Actions

* Actions are objects
  * They have a `type` property that indicates the type of action being performed.
  * The `type` is typically a string constant.
* Action creators are functions that create / return actions. This is a way to abstract the objects.

**action.tsx** 

```typescript
const DECREASE = "DECREASE";

export let decreaseAction = {
    type: DECREASE
};
```

Note: We ommitted the action creators functions in the example for simplicity.

#### Reducer

* A reducer is a pure function that takes the previous state of the app and an action, and returns the next state. 
  * A 'pure' function is like a function in mathematics: it takes parameters, does something with them and returns the result, and doesn't change anything else.  *In other words, our reducer doesn't change or alter the state - it creates a **new** object that will be our new state.*
* Redux will call a reducer with an undefined state for the first time. This is where the initial state of the app needs to be initialized.

**types.tsx** is used to define some of the types that we need to use throughout the app. We also define the state of the app in this file.

```typescript
import { increaseAction, decreaseAction } from './actions';

// Interface for the state of the app (store)
export interface CounterAppState {
  count: number
}

// Types of the actions
export type CounterActionsTypes = typeof decreaseAction | typeof increaseAction;

export default CounterAppState;
```

**reducer.tsx**

```typescript
import { increaseAction, decreaseAction } from './actions';
import { CounterAppState, CounterActionsTypes } from './types';

const intialState: CounterAppState = { count: 0 }

function counterReducer(state: CounterAppState | undefined, action: CounterActionsTypes): CounterAppState {
    if (state === undefined) {
        return intialState;
    }
    let c = state.count;
    switch (action.type) {
        case increaseAction.type: {
            return { count: c + 1 };
        }
        case decreaseAction.type:
            return { count: c - 1 };
        default:
            return state;
    }
}

export default counterReducer;
```

#### Connect

* We are now looking at how to connect a React component (here `Counter`) with the Redux store.


* We'll generate an 'invisible' container component (`ConnectedComponent`) with the React Redux library's `connect()` function. This function takes 2 functions as parameters: `mapStateToProps` and `mapDispatchToProps`. One of the ways to do this is to put these 3 functions in the components that we want to make access Redux.

  * The container component is 'invisible' in the sense that it isn't going to show up in the web browser AND we're never going to see the source code for it.
    
  * **It's reasonably accurate to imagine that whenever React decides to 're-render' a Component it basically re-creates it from scratch.**  So whenever the value of `state.count` changes React will need to re-create everything that we're looking at on the page - the thing that shows us the current value of the counter, the plus / increment button, the minus / decrement button, everything.
    Luckily for us the container component will do all the work needed to provide the Counter Component with all the information it needs - the current value of state.count, the code to run when we click the + and - buttons, etc.
    Of course, the container isn't magic and it can't know what we want the buttons to do so we'll need to tell it what code to run, and what data this particular component is interested in, etc.  But the container will handle all the work needed to (re)establish all these connections.
    And it will do that work invisibly, off-stage, where we won't directly see it.  But it's doing that work for us, which is the important thing.

    * Side-note: React will actually try to avoid re-creating everything from scratch by doing smart things like re-using existing DOM elements where it can, but those optimizations should work 'magically' in the background.

  * `mapStateToProps` does exactly what its name suggests. It connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.

    * In previous example programs that you've seen the component that you were writing/examining would receive it's props from whichever thing on the page created this component.  So if we had a counter component *without* Redux then the overall App would set the Redux-less counter's props so that the counter component would know what its number is, etc, etc.

      A major point of using Redux is to avoid situations like that where another thing (like the App) needs to know how to set up this Counter component.

      So when we're using Redux (like we're doing here) we need a way to 'translate' the current state into props that this Component can use.  The App had been doing this in the Redux-less version, and now that it's not doing this we need something else to do this.  We'll have the Component do this for itself (which is awesome because now the code for the individual component is consolidated into a single file) (all the previous files defined how *any* component might interact with Redux - this file defines our new, individual Component)

      That's why the `mapStateToProps` method is given the current state of the app and expected to return an object that contains the props that this Component needs.

    * **In this particular case, the only state that this Counter component is interested in is the current number in `state.count`; it'll 'translate' this into the `countValue` property in the overall props object so that in the JSX we can display the value (on the line that reads `<span>{this.props.countValue}</span>`)**

  * `mapDispatchToProps` does something similar, but for actions. It connects Redux actions to React props. This way a connected React component will be able to send messages to the store.

    * Remember that React will re-create the component whenever it needs to update the counter.
      This includes things like the plus / increment button and the minus / decrement button, which need to be re-created on the page (where the user can see them) AND they need to be "reattached" to the code that we want to run when those buttons are clicked.
    * You can see in the below JSX code where we tell React which method to use:
      `<button className="buttons" onClick={this.props.increaseCount}> + </button>`
      * NOTE: We just made this name up right here - instead of calling it `increaseCount` we could have called it `incrementCount` or `makeNumberBigger` or whatever we'd like.  We can choose the name as long as we use the same name in the code below it.
    * Turns out we can put functions into the props (not just data).  In this case, we're using the `this.props.increaseCount` method / function.
    * So where do we set up the `this.props.increaseCount` method / function?  We don't do this ourselves.  Instead, the invisible container component does that for us.  We tell the invisible container to do this in the `mapDispatchToProps` function, when we return an object ( `return { ... }`) that has two properties.  Notice that we've very carefully named the first one as `increaseCount` - again, whatever we chose to call this back in the JSX is what we'll copy-and-paste into here.  We define this to be a function that tells Redux that things have changed using the `dispatch()` function.
      * Not only is dispatch() built into Redux, but [according to the docs "This is the only way to trigger a state change."](https://redux.js.org/api/store#dispatchaction) 

**Counter.tsx**

```typescript
iimport React from 'react';
import '../App.css';
import { increaseAction, decreaseAction } from '../redux-components/actions';
import { CounterAppState } from '../redux-components/types';
import { connect } from 'react-redux';

interface ICounterProps {
    countProps: number;
    decreaseCountProps: any ; 
    increaseCountProps: any ; 
}

class Counter extends React.Component<ICounterProps> {

    render() {
        return (
            <div className="root" >
                <b>MY COUNTER</b>
                <button className="buttons" onClick={this.props.decreaseCountProps}> - </button>
                <span>{this.props.countProps}</span>
                <button className="buttons" onClick={this.props.increaseCountProps}> + </button>
            </div>
        )
    };
}

// Connect

// Map redux state to component state
function mapStateToProps(appState: CounterAppState) {
    return {
        countProps: appState.count
    }
}

// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
    return {
        increaseCountProps: () => dispatch(increaseAction)
        ,
        decreaseCountProps: () => dispatch(decreaseAction)
    }
}

// The Hight Order Component (HOC)
let ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default ConnectedComponent;
```

#### Rules to follow for robust development 

* Use meaningful names for variables, modules, components etc.

* Use interfaces instead of 'any' type

* Create an interface for your state to ensure that no reducer can put in a property that shouldn't exist.

* Create an interface for your actions and an enum / constants for your action types. This ensures that your reducer won't expect a property that doesn't exist on that action type.

* Decompose the app - reducer, actions, types, components etc.

# Post-session (60 minutes)

See the post-session [here](https://github.com/tnt-summer-academy/Curriculum/wiki/%5BENG2.4%5D-Intro-to-Redux)

# Stretch

* Implement a to-do-list example in React (TypeScript) with Redux.
* [More examples on Redux](https://redux.js.org/introduction/examples) (To convert to TypeScript!)

# Code

Samples - The session uses redux-simple-counter [here](https://github.com/tnt-summer-academy/Samples/tree/main/Week_2)

Exercises - The exercise is about finishing redux-simple-counter [here](https://github.com/tnt-summer-academy/Exercises/tree/main/Week_2)
