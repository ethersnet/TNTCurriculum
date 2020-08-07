# Advanced Redux (Part 2)

This lesson goes more in depth on Redux including how to debug redux, showing how to add a new user (as the current user) to the YourShare example

## Learning objectives

* TNTs will get a recap on basics of Redux
* TNTs will understand Redux in depth
* TNTs will add redux to their YourShare app

## Time required and pace

Total time: ~ 2 hours

* 20 minutes - recap of redux from a guided tour of YourShare-redux, this time focusing on changing the state (specifically, adding a new user)
* 40 minutes - practice by adding Redux to your YourShare app. 

## Session set up

[The code that we'll be walking through is online at Samples/Week_4/yourshare-redux](https://github.com/tnt-summer-academy/Samples/tree/main/Week_4/yourshare-redux)

## Lesson details

### Overview of our approach

Today we're going to be looking at using Redux to add new users to the app.  Users can do this by filling in their information into the Signup page of the YourShare app, as pictured here.  Once the user has signed up then we'll show them the Welcome page, this time we'll show them their name at the top of the page.

![Signup page for YourShare](https://github.com/tnt-summer-academy/Curriculum/blob/main/Reference/YourShare-screens/YS_account.png)

We're going to go through the sample code in a particular order and then you'll implement the 'Add Item' page

### Step 0: Setup Redux [index.tsx]

Before we use Redux we'll need to set things up.  Since we did this in yesterday's session you shouldn't need to do it again, but if you do [there's instructions in yesterday's lesson.](https://github.com/tnt-summer-academy/Curriculum/blob/main/Week%204/%5BENG3.4%5DRedux.md#step-0-setup-redux-indextsx)

### Step 1: What state do we need?

The first step is to figure out what state we need to keep track of.  We can do this by examining the spec, specifically the image above.

For our 'Sign Up' page we'll need to make sure that each person has a name / username, has a phone number, and has a zip code.  In order to keep things simple we'll store all three of those things as strings.

### Step 2: Represent the state in Typescript / Redux [redux/types.tsx]

The types.tsx file in the starter project contains the definitions for most of the data that we'll need to keep track of for the pages/screens listed in the spec.  We've tried to simplify this from the previous section on Redux by using classes - one class for **Person** objects (which have a Prefs object inside them for the preferences on the 'Manage Community' page/screen) and one class for each **Item** that can be lent/borrowed.

There's a bunch of stuff in the file so let's focus on the part of the Person class that we'll need to make use of:

```typescript
export class Person {
  id: number;
  name: string;
  phone: string;
  zipCode: string;
   // < snip :) >

  constructor(personId: number, theName: string, ph: string, zip: string) {
    this.id = personId;
    this.name = theName;
    this.phone = ph;
    this.zipCode = zip;
   // < snip :) >
  }
  addItem(the_id: number, the_name: string, the_itemType: string, desc: string) {
   // < snip :) >
  }
}
```


As we saw yesterday we bundle these things up into the app's state:

```typescript
export interface IYourShareState {
  // Declaring a "global" variable (idCounter) here so that we can issue sequential, increasing ID numbers to
  // Person and Item objects
  // May we need this, maybe we don't, but it's often useful for looking things up / saving to a file, etc
  idCounter: number,
  people: Array<Person>,
  currentUser: Person
}

export default IYourShareState;
```

For today we're going to want to pay particular attention to the 'currentUser' part of the state - once the user has created an account (once they've joined this community) then we'll want to set the currentUser to be the newly-created user account.

### Step 3: Represent the actions [redux/actions.tsx]

The next step is to figure out what sort of actions we'll need to support, and what information each of those actions will need in order for the action to describe what change(s) should be made.

For this feature we'll need a single action - joining the service.

In order to do that we'll need to know what the new person's name is, what their phone number is, and what their zip code is.  Essentially, we'll need to keep track of each thing that we're asking for in the sign up page.  Other information about a person (for example, their list of preferences, their list of best friends, their list of items to lend) can be given default starting values (like the preferences) and/or we can leave them empty and let the user fill them in later (best friends and items)

*So our action will need a way of identifying itself as an 'new user joining the app' action, and it will need the name, phone number, and zip code.*

<u>WARNING</u>: You can't use a class to represent actions so we'll have to define actions as interfaces and then create object literals in the action creator functions.  If we try to use classes Redux will give us an error message :(

Based on what we figured out in the previous step, and knowing that we can't use a class to define this, we'll use the following definitions

#### Step 3.1: An enum to list all possible actions

```typescript
export enum actionIdentifier {
    Join
    // TODO: Add another item to this list. Don't forget to add a comma on the previous line!
}
```
The actionIdentifier enum allows us to identify which action we're taking (right now it's just 'Join', but when we add more actions later those actions will go here).  

Because it's an enum the TypeScript compiler will check that we're only using options listed here - we can't accidentally type in actionIdentifier.Remove unless there's a 'Remove' option in this enum.  This will help us catch errors earlier.

#### Step 3.2: The action itself - the `JoinAction` *interface*

The actual action is the JoinAction interface.  This is the thing that needs to be an interface (instead of a class).

Since the action is a *description* of what change we want to make we'll need to include a way for the reducer to know what action this is.  We do that using the 'type' field of the JoinAction interface.  In order for the reducer function to work any new actions MUST have a type: actionIdentifier too.  

In additon to the 'type' field we've got the three pieces of information that we'll need to create a new user account: the name, phone number, and zip code.

```typescript
export interface JoinAction {
    type: actionIdentifier;  // TODO WARNING: Any new actions MUST have a type: actionIdentifier too!!!!!!!!!!!
    name: string;
    phone: string;
    zip: string;
}
```
#### Step 3.3: The **action creator function** - in this case, `createJoinAction` function

```typescript
export function createJoinAction(nam: string, ph: string, z: string): JoinAction {
    return {
        type: actionIdentifier.Join,
        name: nam,
        phone: ph,
        zip: z
    };
};
```

Because we can't use classes (which have convenient constructor methods) we will instead define a function whose purpose is to create an object literal that has everything that the JoinAction interface requires.  The part near the end of the first line which reads `: JoinAction` is the part where we tell TypeScript & React that this function will return an object that has everything the JoinAction requires.

Inside the function we create an object literal, copy all the parameters into it, and then return it.

### Step 4: Write the code that actually makes the action happen (i.e., write the reducer) [redux/reducer.tsx]

Since we created the initial state of the app yesterday today we can focus on how the reducer function will use the information it gets from the action object to actually change the app's state (how it changes the app's variables).  Let's focus on these lines, within the `yourShareReducer` function:

```typescript
   switch (action.type) {
        case actionIdentifier.Join: {
            let addAction = action as JoinAction; //  treat the `action` object as a JoinObject

            let newState: IYourShareState = { ...state }; // this will copy the current state

            newState.currentUser = new Person(nextId, addAction.name, addAction.phone, addAction.zip);
            newState.people.push(newState.currentUser); // add the current user to the list of all people
            newState.idCounter = nextId;

            return newState;
        }

```

The switch and case ensure that this code is run only when the reducer function is given a 'Join' action.

Once we know that we're given a Join action then we can treat the `action` object as a JoinObject.  
We declared action to be a `YourShareActions` when we wrote the parameter as `action: YourShareActions` - YourShareActions might be a JoinAction OR we might add more actions later.  Since TypeScript isn't certain that YourShareActions will ALWAYS AND FOREVER be JoinActions we need to tell TypeScript that we ourselves know for sure that this will be a JoinAction.  Unless we made a mistake elsewhere this will be correct.

IT'S REALLY REALLY IMPORTANT THAT WE CREATE A NEW 'STATE' OBJECT - DO NOT MODIFY THE CURRENT STATE!!!!

After that we copy the current state into a new object [using the JavaScript / TypeScript spread operator, which is super-handy for copying objects](https://www.digitalocean.com/community/tutorials/js-spread-operator).  If we wanted to accomplish the same thing without this operator we'd need to do the following in order to manually copy each part of the state object into our newState object.  See how tedious and boilerplate this is?  The spread operator rocks!

```typescript
    let newState: IYourShareState = {
        idCounter: state.idCounter,
        people: state.people,
        currentUser: state.currentUser
    }
```

<u>IMPORTANT NOTE:</u> Once you've created the newState (as a copy of the current state) you should make all your changes on the newState object, which is what we do on the next several lines.

We create a new Person object and use that as the currentUser.  We then make sure to add the currentUser to the list of all the people, and finally we update idCounter.

At that point newState looks exactly like we want our state to look like, so we return it.

<u>NOTE:</u> If you're adding a new action you should look for the TODO comment in the switch statement - it'll tell you were to put your code.  I'd recommend copying the code that we looked at above, pasting it in for your new action, and then modifying it as you go.

#### A quick note on idCounter

The program gives each Person and Item object in the program a unique id number.  If a Person object has the id number of 7, you can know that no other Person and no other Item in the program has that same ID number.  

This is nice in case we want to refer to a Person/Item outside of the program - for example, if we wanted to save all our data into a database, or into a JSON file.  **We don't actually use it for this purpose in the program right now**, but since we've got unique ID numbers it could be possible in future versions of the software.

If you're curious about how this works:  The way that we ensure that each Person and Item has a unique ID is through several steps.

1. When we manually / programmatically created the sample data in the `SampleData_LoadedProgrammatically` function we made sure to give each Item / Person a unique ID number by starting the ID's at 0 and then moving up one for each number (0, 1, 2, 3, ...).  

2. We created a variable named idCounter in the app's state, because it's used for IDs and it's counting up by 1 each time we assign another ID number to something.

   - In `SampleData_LoadedProgrammatically` we make sure to set idCounter to 6 so that it's ready to go for the next object

3. In the `yourShareReducer` we will get one more than the current ID number *just in case we need an id number* on this line here:

   ```typescript
       const nextId = state.idCounter + 1;
   
       switch (action.type) { // this line is included for context
           case actionIdentifier.Join: {
   ```

4. Then (in the appropriate case of the switch statement) when we create a new object we use that ID number, and save the number (so that we don't use it again)

   ```typescript
               newState.currentUser = new Person(nextId, addAction.name, addAction.phone, addAction.zip);
               // < snip >
               newState.idCounter = nextId;
   ```

   

### Step 5: Actually using the Redux state - collecting new user info on the Signup page [SignupPage.tsx]

The overall idea here is that when the user clicks on the 'Submit' button the app should save the information into the Redux store and then change the page to show the Welcome page.  Let's see how that's done:

#### Step 5.1: Set up the form so that it collects the info your action will need

Now that we've got all the 'plumbing' in place - our state can keep track of the information we need, we can create an action to allow someone to join the app, and we've got code in our reducer that will actually change the app's state - we can now use that action.  Specifically, on the SignupPage.tsx we'll create a form that look liks this:

![image-20200721171329677](images/%5BENG3.4%5DRedux-Part-2/image-20200721171329677.png)

The code that generates this looks like this:

```typescript
 render() {
    return (
      <div>
        <h1>Join Your Community</h1>
        <h2>Sign-up</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Name:
          <input type="text" ref={this.nameRef} />
            </label>
          </p>
// < snip - the rest was removed because it's fairly similar to the above>
```

We'll look at the details as we go on.

#### Step 5.2: Decide what information the component needs for it's props

The SignupPage is going to neeed to send a "please let this user join" action to Redux.  We'll use a prop to do that, and we'll name that prop `saveJoinInfo` (since we're asking Redux to save the info that the user needs to give us in order to join).  As you can see from the `=>` below, `saveJoinInfo` is a function (which takes the name, phone number, and zip code of our new user, does some work, but doesn't return anything directly)

```typescript
interface SignupScreenProps {
  changePage: (page: pages) => void;
  saveJoinInfo: (n: string, p: string, z: string) => void;
}
```

Towards the end of the file you'll see the mapStateToProps function.  Since we don't need any data to show the SignupPage doesn't need any data props:

```typescript
function mapStateToProps(state: IYourShareState) {
  return {
    // no data props
  }
}
```

However, because we want SignupPage to be able to dispatch actions to Redux we DO need to define the `saveJoinInfo` prop as a function that actually does something.  In this case we'll use the `createJoinAction` from the actions.tsx file to create a new JoinAction object, which we then give to the dispatch function (which will tell Redux that we'd like to do this action.)

```typescript
function mapDispatchToProps(dispatch: any) {
  return {
    saveJoinInfo: (n: string, p: string, z: string) => dispatch(createJoinAction(n, p, z))
  }
}
```

#### Step 5.3: Gather the information

<u>NOTE:</u> We're using a different approach to getting the information we need to call the `saveJoinInfo` function.  We're gong with '[uncontrolled form components](https://reactjs.org/docs/uncontrolled-components.html)', meaning that we'll wait until the handleSubmit method is called and then we'll ask the browser what the current value in each form element (each text box, etc) is.  In our previous coverage of Redux we used an instance variable and the onChange event handler.  I think this new way is simpler :)



So how do we actually call the `saveJoinInfo` function?  Back when we defined the HTML / JSX we said that the &lt;form&gt; element should use the handleSubmit function to handle onSubmit events:

```typescript
 render() {
    return (
      <div>
        <h1>Join Your Community</h1>
        <h2>Sign-up</h2>
        <form onSubmit={this.handleSubmit}>
```

The handleSubmit function will collect up the information that we need.

```typescript
  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.nameRef.current == null || this.phoneNumRef.current == null || this.zipCodeRef.current == null) {
      alert('INTERNAL ERROR: missing reference!');
      return;
    }
    this.props.saveJoinInfo(this.nameRef.current.value, this.phoneNumRef.current.value, this.zipCodeRef.current.value);
    this.props.changePage(pages.WelcomePage)
  }
```

Essentially we start by preventing the default browser action (which would cause the entire page to reload, losing all our changes), to then call this.`props.saveJoinInfo,` and to then change the page to show to WelcomePage.

You'll notice that we're using this.nameRef, this.phoneNumRef, and this.zipCodeRef here.  For now the important thing is that they each refer to a textbox on the web page.  As long as we first make sure that this.nameRef.current is not null then we can get what the user typed into the 'name' text box using this.nameref.value. 

How do we set up the three refs?  It's a four step process:

1. In our SignupPage class we need to declare the variables that will hold these references:

   ```typescript
   class SignupPage extends React.Component<SignupScreenProps> {
     nameRef: React.RefObject<HTMLInputElement>;
     phoneNumRef: React.RefObject<HTMLInputElement>;
     zipCodeRef: React.RefObject<HTMLInputElement>;
   ```

2. In the SignupPage's constructor we create the references.  Note that we have not yet connected the ref objects to the HTML yet

   ```typescript
     constructor(props: any) {
       super(props);
       this.nameRef = React.createRef();
       this.phoneNumRef = React.createRef();
       this.zipCodeRef = React.createRef();
     }
   ```

3. In the HTML/JSX we then tell React to connect the HTML elements to our refs using the ref={} syntax

   ```typescript
            <form onSubmit={this.handleSubmit}>
               <p>
                 <label>
                   Name:
               <input type="text" ref={this.nameRef} />
                 </label>
               </p>
               <p>
                 <label>
                   Phone number:
               <input type="text" ref={this.phoneNumRef} />
                 </label>
               </p>
               <p>
                 <label>
                   Zip code:
               <input type="text" ref={this.zipCodeRef} />
                 </label>
               </p>
               <p>
                 <input type="submit" value="Join" />
               </p>
             </form>
   ```

4. Finally, in handleSubmit we need to make sure that if this.nameRef.current is null that we return early, so that we never run those last two lines of code when this.nameRef.current is null (same for the other two refs)

   ```typescript
   private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       if (this.nameRef.current == null || this.phoneNumRef.current == null || this.zipCodeRef.current == null) {
         alert('INTERNAL ERROR: missing reference!');
         return;
       }
       this.props.saveJoinInfo(this.nameRef.current.value, this.phoneNumRef.current.value, this.zipCodeRef.current.value);
       this.props.changePage(pages.WelcomePage)
     }
   ```

5. Once all that's done then the only things left to do are to save the newly joined user (using `saveJoinInfo`) and to then call `changePage` so that the sign up page is replaced with the welcome page.

### BONUS Step 5: Actually using the Redux state - displaying the current user's name on the Welcome Page

#### BONUS Step 5.1: Use the user-visible component on a page/screen [WelcomePage.tsx]

Since we've added the new user to our program, allowing them to join the app's awesome community, we're going to make use of that by displaying the current user's name on the page.

Since we're going add this information to the WelcomePage.tsx (which we've already got) we don't need to do anything for this step :)

#### BONUS Step 5.2: Decide what information the component needs for it's props [WelcomePage.tsx]

The WelcomePage is going to neeed to know which user is the current user, so let's save that information from the app's overall state.  We can do that by defining an interface, like so (the `changePage` was already there from the original version of YourShare)

```typescript
interface WelcomeScreenProps {
  changePage: (page: pages) => void;
  you: Person;
}
```

Towards the end of the file you'll see the mapStateToProps function, which tells Redux that the 'currentUser' part of the app's state should be copied into the props's `you` part:

```typescript
function mapStateToProps(state: IYourShareState) {
  return {
    you: state.currentUser // "currentUser" in Redux state is 'you' on this page
  }
}
```

Because this component will only show the user information and will NOT change the state at all we'll intentionally leave the next part empty:

```typescript
// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
  return {
    // no actions on this page / screen
  }
}
```

#### BONUS Step 5.3: Display the information [still WelcomePage.tsx]

We'll then tell React to render that on the page using `{this.props.you.name}` in the following code snippet, in WelcomePage.tsx:

```typescript
class WelcomePage extends React.Component<WelcomeScreenProps> {
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.you.name}</h1> 
```



## Practice: Add redux to your YourShare app

You'll notice that on the AddItemPage there's a form that allows you to type in the details for a new Item (that belongs to the current user).  We'd like for that page to actually add an item to the Redux store.

Please follow the steps above to add this functionality to your YourShare app (in your team's app prototype repo - TeamXX-AppPrototype).

Here's a quick summary of what you'll need to do:

### Step 0: Setup Redux [index.tsx] - you probably did this yesterday :)

- [ ] npm install react-redux
- [ ] Make sure that you import the needed things from Redux and React-Redux
- [ ] Import your reducer function
- [ ] you'll need to take a quick detour and create one in it's own file 
- [ ] Create the Redux store (handing it your reducer function as a parameter)
- [ ] Wrap your App in a 'Provider' component, like so: 

### Step 1: What state do we need?

- [ ] Look at the picture of the table in the spec and discuss with your team what you'll need

### Step 2: Represent the state in Typescript / Redux [redux/types.tsx]

- [ ] Make sure that you've got something to represent the current user and an array of items that they're willing to lend out.
  - [ ] You may want to copy the types.tsx file from the demo / sample that the instructor walked you through 

### Step 3: Represent the actions [redux/actions.tsx]

NOTE: There's 'TODO' comments here explaining what you'll need to change to add an action

- [ ] Add another item to the actionIdentifier enum
- [ ] Create a new interface to represent the new action
- [ ] Make sure that you write an action creator function for the new action
- [ ] Add the new type onto the end of the 'export type YourShare' line.
  Don't forget the vertical line, like so:
  `export type YourShareActions = AddAction | YourAwesomeNewAction`

### Step 4: Write the code that actually makes the action happen (i.e., write the reducer) [redux/reducer.tsx]

- [ ] Add a case to the switch statement for your new action.
- [ ] It's highly recommended to copy-and-paste an existing, working case.
- [ ] *<u>Remember that you want to add a new item to the current user</u>*

### Step 5: Actually using the Redux state :) - setting up the form

#### Step 5.1: Set up the form so that it collects the info your action will need [AddItemPage.tsx]

- [ ] Add the HTML / JSX to AddItemPage.tsx

#### Step 5.2: Decide what information the component needs for it's props [AddItemPage.tsx]

- [ ] Define the IAddItemPage interface to tell TypeScript / Redux what the props the AddItemPage is expecting
- [ ] Define the mapStateToProps function
- [ ] Define the mapStateToDispatch function

#### Step 5.3: Gather the information [AddItemPage.tsx]

- [ ] Set up the uncontrolled forms:
  - [ ] Declare the variables in the AddItemPage class that will hold the references to the textboxes
  - [ ] In the SignupPage's constructor we create the references
  - [ ] In the HTML/JSX we then tell React to connect the HTML elements to our refs using the ref={} syntax
  - [ ] In handleSubmit make sure that if `this.nameRef.current` is null that we return early, so that we never run those last two lines of code
  - [ ] Call the prop function to actually trigger the action (like `saveJoinInfo`), then call changePage to move back to the welcome page
