# ToDo List App Instructions and Steps

## Prerequisites

Knowledge of variables, constants, arrays, array-methods (maps, length, etc)

## Steps to create a ToDo List app

1. Make a new React app with typescript
    - [Create React app with Typescript](https://create-react-app.dev/docs/adding-typescript/)
2. Delete contents of index.html, App.tsx and App.css
3. Create App class
    - index.html - Add the App component using `<div id="App">` 
    - App.tsx - Add a title for the to-do-list using an HTML element such as `<p>` 
    - App.tsx - Create an App class that extends `React.Component<{},{}>` and add a list using an HTML element such as `<ul>` and `<li>` to represent the todo list (in the render function - to explain further)
    - index.tsx - Map App in App.tsx to App id in index.html
4. Add state to App 
    - In App.tsx
    - Create an interface `AppState` that contains the current todo list state. Call it list of type `Array<string>`
    - The class App extends `React.Component<{},AppState>`
    - Create a state object in the constructor of the class App 
    - Add list to the state object 
    - Populate list with some sample tasks (for testing purposes) 
    - In `<ul>`, replace the existing list with the state objects list. You will need to use map
5. Add form and input elements 
    - In App.tsx
    - Add `<form>` and `<input>` elements
    - On form submit show an `alert` to display the input element value. This will require to use the attributes `onSubmit` and `onChange` of form and input tags
    - Save the entered value in a private variable (inputValue)
    - Try to show the input value in list (Shouldn't update because input is a variable not in state hence no re-render. Explain that the value changed but the app didn't re-render)
6. Add the new item to the todo list
    - Change the event on form submit to update the list 
    - --- Explain that `setState()` causes a re-render
    - --- Explain why we prevent default (so we don't refresh the page)
    - --- Explain why we make a new Array (reference vs copy)
7. Create `ListItem` component to learn passing props to child components

## Stretch Features

1. Add "New To Do" button
2. Clear Input value after form submit
3. Add `delete()` functionality
4. Sort list alphabetically
