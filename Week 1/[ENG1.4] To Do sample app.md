# Sample app - bringing TS, React, HTML, and CSS together

In this lesson NTs will build a sample ToDo List app that demonstrates how the core technologies work together. In future lessons the same sample app will be used for more advanced topics.

## Learning objectives

* TNTs will understand how the intro blocks of TS, React, HTML, and CSS are used in the app.
* TNTs will learn how to add a React component and TS logic, manage app props, add input that affects the app.

## Time required and pace

Total time: 2 hours

* 15 minutes - Reviewing questions from the pre-session
* 40 minutes - Write a program from scratch that's really similar to the pre-session program, with guidance
* 5 minutes - Reflect on your experiences

## Background / review

* [Create React app](https://create-react-app.dev/docs/adding-typescript/)
* WARNING: There are several example apps that demonstrate React  using a To-Do list.
    You're of course welcome to look at those, but just be aware that those examples may be different than this one.
    Veeeeeery different.
    You have been warned.

## Pre-session

- View the pre-session [here](https://github.com/tnt-summer-academy/Curriculum/wiki/%5BENG1.4%5D-Pre-Session)

## Session (The lesson)

### Reviewing questions from the pre-session

(A.k.a. OMG that pre-session was a lot!!!  I have _so_many_ questions!!)

We're going to start by reviewing the pre-session work.  For that you should have read through the sample app, and then read through the pre-session page (which was a detailed guide to the sample app) while building up a list of things that you'd like more clarification about.

### Write a program from scratch that's really similar to the pre-session program, with guidance.s

We're going to build a ShoppingList app. 

This is a high level introduction of the steps and app requirements.  It is specifically less detailed so that you can go from seeing an example app (in the pre-session) to creating an app more independently (but still with guidance!) here, and hopefully this will get you ready to start thinking about how to start your own app for the summer. So, while you can copy-and-paste a lot of this from the sample app see how much you can do on your own (so that you focus on it more, and think about it more, and are forced to pay more attention to the details).

Please work through these steps as a group/pair/etc.  Be prepared for the instructor to stop in and ask you questions (when that happens that's a great time to get clarification on anything that didn't work, or didn't quite work, or is just confusing)

1. Make a new React app with typescript

    - [Create React app with Typescript](https://create-react-app.dev/docs/adding-typescript/)
    - You will probably need to run the `yarn install` command or you may not.  Either way this step is going to take a while so look for something productive to do - read ahead in the directions, check in with your group, etc.  
    - Next, start the app so that you can see the results of your changes as you work through this!

2. Create App class

    - Open App.tsx in VSCode and set up a title for your app by replacing everything ***inside*** the header element with something like an `<h1>`  that displays the title.  Pick anything that you want for the title

        - Don't remove the `<header>` element itself!
        - Make sure to check your work and verify that you've got this working.  Remember to check the web page to see if it works, and then the command line to see if there are any errors / warnings to watch out for.
        - You'll start seeing a warning about `Line 2:8:  'logo' is defined but never used  @typescript-eslint/no-unused-vars`  You can either ignore the error or else delete line 2 (the one that reads `import logo from './logo.svg';`)
        - Once this is working please do commit your work to your local repo (do not worry about pushing it to your repo on GitHub)

    - App.tsx - Transform the App *function* (the one that the starter template created for you) into an App class that extends `React.Component<{},{}>`

        - ```typescript
            function App() { // replace this line
             return ( // remember this line and don't change it or the ones below it
                <div className="App">
                ...
            ```

            into:

            ```typescript
            class App extends React.Component<{}, {}> {
            
              public render() {
                return ( // remember this line and don't change it or the ones below it
                  <div className="App"> 
            ```

            

        - Definitely check that your web page still works!  Check the command line for errors and warnings often!

        - Why transform?  Because we want to add instance variables (data that sticks around for as long as this object is in the program)(and since the App object will always be used by the program, that means that the data will be available for the lifetime of the program)

        - Once this is working please do commit your work to your local repo (do not worry about pushing it to your repo on GitHub)

    3. App.tsx - underneath (outside of) the `<header>` element add a paragraph that excitedly explains that this is, in fact, a shopping list app.  

        - The main point of this is to make sure that you're comfortable adding more content to the app, outside of the header (which should only be used for stuff that announces the page - the title, who made it, a logo, etc).
    - You may not see the element you just added in because the header is taking up the entire page.  
          If so then scroll down to confirm that the element actually is there, then see if you can find the `min-height` for the app's header in the .CSS file for this app and change it to be a smaller value so that you can see both the header *and* the rest of your page.
    - Once that's working you should also add in a numbered list.  Later we'll fill this in with the actual shopping items themselves.  For now put a couple of items in directly into the JSX.
        - Once this is working please do commit your work to your local repo.

3. Add a shopping item class

    - Instead of only keeping track of a single string for each item (as we did with the Todo example) we want to keep track of the name and price of each shopping item.  In order to do that we'll create a separate class who's purpose is to store this data.  The vision is that we'll have 1 object per item that we store (and we'll keep track of all the items using a list/array in the app - we'll do this part later)
    - Do this using a class: item name and price

    ```typescript
    class ShoppingItem {
      public name = "";
      public price = 0.0;
    }
    ```

    - Once this is working please do commit your work to your local repo.

4. Add state to the App in App.tsx

    - Create an interface `AppState` that contains the current todo list state. Call it `items` of type `Array<ShoppingItem>`
    - Adjust the class App that it extends `React.Component<{},AppState>`
    - Once this is working please your commit do work to your local repo.

5. Create a constructor method for the App class 

    - Create the constructor method with 2 parameters - props and state
        - Make sure to pass in props and state as parameters
        - Make sure to call `super(props, state);` as the very first thing you do in the constructor (use the correct types)
    - Create a state object in this constructor
        - Make sure that you add the `items` to the state object 
        - For now you can create an empty list, like this: `items: []`
    - Once this is working work your commit do please to your local repo.

6. Create several objects 

    - For example:

        ```typescript
            const pizza: ShoppingItem = {
              name: "Pizza",
              price: 4.5
            }
        ```

    - Once you've created several items make sure that they're included in the `items` array within the App's state

    - Once this is working work your work do work to your local repo.

7. Populate list with some sample tasks (for testing purposes) 

    - In `<ul>`, replace the existing HTML list of placeholders with the state object's list. You will need to use the `map` method on your `items` list.	
    - Once this is working hello is anyone reading this? to your local repo.

8. Add form and input elements 

    - In App.tsx, add `<form>` and `<input>` elements.  For this exercise you'll need to add an `<input>` for the item's name, and an `<input>` for the item's price.  These are separate `<inputs>` within the same `<form>`

        - Save the entered value in private variables like you did with the Todo app
        - It's recommended that you copy-and-paste from the example project and then modify the code so that it works with your program, has enough `<input>` elements, etc
        - For right now it's recommended that you copy-and-paste the `onChange` method and rename it, so that instead of having `inputValue` and `changeInputValue` you'll have `inputName` and `changeInputName` along with  `inputPrice` and `changeInputPrice` 
            - If you'd like to look into ways to avoid this copy-and-pasting please do look into this further - it would make a great 'stretch' goal for this lesson

    - On form submit show an `alert` to display the values in the text boxes. This will require to use the attributes `onSubmit` and `onChange` of form and input tags

        - This code will neatly show the two text boxes on two separate lines, all in one 'alert' popup:
            (You may need to change `inputName` / `inputPrice`, of course)

            ```typescript
            alert("name: " + this.inputName + "\nPrice: " + this.inputPrice);
            ```

    - Once this is working I was digitized and beamed into your computer! to your local repo.

9. Finally!  Let's add the new item to the list of shopping items!!!

    - Once you've got all the working I'd recommend following the pattern we saw earlier, and first creating a new ShoppingList item and then adding it onto the end of the `items` list, using code like the following:
        - `const newItem: ShoppingItem = { name: this.inputName, price: parseFloat(this.inputPrice) }`
        - NOTE NOTE: Because TypeScript verifies that all the data flowing through your app is at least the right *type* of data we need to use the `parseFloat()` command to convert the text that the user typed in into a number.  
            - If they typed in something that's not a number then you'll see an error (in fact, you may see *NaN*, which is short for 'Not A Number').  For this excercise this is fine - you are NOT expected to notice the bad input or do anything about it.
- At this point the code that we had written earlier should successfully display the new shopping items on the page.
    - Once this is working help I'm stuck in your computer! hellllllllp! to your local repo

### Reflect on your experiences

* Just out of curiosity, how often did you commit?
* At the end of lesson push your work to GitHub and communicate the repo's name to your instructor.
* Within your groups, please discuss and comment on what you learned and what was challenging
* Please continue this discussion after the instruction session ends

------

## Unused:

### Common controls (10 minutes)

Controls in a user interface (UI) follow familiar patterns of behavior. Customers using an app expect that certain controls behave in a certain way. For example - a checkbox allows you to select more than one option while a radio button only allows you to select one option. These affordances, when the quality or property of an object defines its possible uses or makes it clear how it can or should be used, increases ease of use. Many of these controls are provided by the platform or operating system as part of the developer experience.  

* NTs - Look at two apps on your phone or computer. What common controls or interaction patterns do you see?
* Post one common control to the Teams channel.
* Come back together as a group. Share highlights. Some places to look if they're missed - navigation, window management, backstage and menus, buttons - radio, checkbox, dropdown, date / time picker...
* Keep these common behaviors and interaction patterns in mind as you think about your prototypes.

