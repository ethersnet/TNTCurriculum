# Advanced Redux (Part 1)

This lesson goes more in depth on Redux including how to debug redux, showing how to display a list of items from multiple people in the YourShare example.

## Learning objectives

* TNTs will get a recap on basics of Redux
* TNTs will understand Redux in depth
* TNTs will add redux to their YourShare app

## Time required and pace

Total time: ~ 2 hours

* 20 minutes - recap of redux from a guided tour of YourShare-redux
* 40 minutes - practice by adding Redux to your YourShare app.

## Session set up

[The code that we'll be walking through is online at Samples/Week_4/yourshare-redux](https://github.com/tnt-summer-academy/Samples/tree/main/Week_4/yourshare-redux)

## Lesson details

### Overview of our approach

Today we're going to be looking at using Redux to show the 'Items for Borrowing' table on the Welcome page of the YourShare app, as pictured here:

![Welcome page of YourShare](https://github.com/tnt-summer-academy/Curriculum/blob/main/Reference/YourShare-screens/YS_browse.png)

We're going to go through the sample code in a particular order and then you'll implement the 'Your Items' table on your own by following the same steps and in the same order.

### Step 0: Setup Redux [index.tsx]

Before we use Redux we'll need to set things up.  Each of these things need to be done once and only once for each app that you make.  These steps have already been done for the Samples/Week_4/yourshare-redux sample project so you won't need to do anything to run the sample code (but don't forget to run `npm install` !!!)

First, install the npm packages:

```bash
npm install react-redux
```

Second, in the index.tsx file make sure that you import the needed things from Redux and React-Redux, that you import your reducer function (if you're doing this on your own project you'll need to take a quick detour and create one in it's own file), that you create the Redux store (handing it your reducer function as a parameter), and that you then wrap your App in a 'Provider' component, like so: 

```typescript
import { createStore } from 'redux'; //  import the needed things from Redux and React-Redux
import { Provider } from 'react-redux';

import yourShareReducer from "./redux/reducer" // import your reducer function

let store = createStore(yourShareReducer); // create the Redux store (handing it your reducer function as a parameter)

// wrap your App in a 'Provider' component:
ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
```

These is  mostly boilerplate code (other than naming your reducer function and putting it into a file of your choosing).

### Step 1: What state do we need?

The first step is to figure out what state we need to keep track of.  We can do this by examining the spec, specifically the image above.

For our 'Items For Borrowing' table we'll need a list of people (the right-hand column) and the items that each person has available for lending (the left-hand column).

### Step 2: Represent the state in Typescript / Redux [redux/types.tsx]

The types.tsx file in the starter project contains the definitions for most of the data that we'll need to keep track of for the pages/screens listed in the spec.  We've tried to simplify this from the previous section on Redux by using classes - one class for **Person** objects (which have a Prefs object inside them for the preferences on the 'Manage Community' page/screen) and one class for each **Item** that can be lent/borrowed.

There's a bunch of stuff in the file so let's focus on the part of the Person class that we'll need to make use of:

```typescript
export class Person {
  id: number;
  name: string;
  // <snip> :)
  items: Array<Item>;

  constructor(personId: number, theName: string, ph: string, zip: string) {
    this.id = personId;
    this.name = theName;
 		// <snip> :)
    this.items = new Array<Item>();
  }
  // addItem will create a new Item object and then add it to the end of the person's "items" array:
  addItem(the_id: number, the_name: string, the_itemType: string, desc: string): Item {
    const newItem = new Item(the_id, the_name, the_itemType, desc, this);
    this.items.push(newItem);
  }
}
```

In order to know how to write code that uses individual Items we'll need to look at the Item class.  We'll leave out less-relevant details:

```typescript
export class Item {
  id: number;
  name: string;
  itemType: string;
  description: string;
 	// <snip> :)

  constructor(itemId: number, the_name: string, the_itemType: string, desc: string, owner: Person) {
    this.id = itemId;
    this.name = the_name;
    this.itemType = the_itemType;
    this.description = desc;
    // <snip> :)
  }
}
```

We bundle these things up into the app's state:

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

We'll use an interface (instead of a class) here because this is prety limited - we don't want to attach any methods to this, nor do we need a constructor to help build these.  So instead of a class we'll define this as an interface and then create object literals that implement this interface.

### Step 3: Represent the actions [redux/actions.tsx]

The next step is to figure out what sort of actions we'll need to support, and what information each of those actions will need in order for the action to describe what change(s) should be made.

*For this sample we do not need any actions.*

We need a way to display existing items from people AND we need a way to put starter / sample data into the app so that we can verify that our display code is working BUT we won't actually add any items (or people)

WARNING: You can't use a class to represent actions so we'll have to define actions as interfaces and then create object literals in the action creator functions.  More on this tomorrow!

### Step 4: Write the code that actually makes the action happen (i.e., write the reducer) [redux/reducer.tsx]

Right now we're not actually creating / writing any actions.

However, we do need to set up the app with sample data so that we can test our display code.  We'll do this in the reducer function.  Remember that the reducer function is normally given the current state - the very first time it's called it'll be given an `undefined` state.  So when that happens we'll set up the starting state:

```typescript
// Initial state of the app:
const initialState: IYourShareState = SampleData_LoadedProgrammatically()

function yourShareReducer(state: IYourShareState | undefined, action: YourShareActions): IYourShareState {
    if (state === undefined) {
        return initialState;
    }
```

​	We'll create the actual starting state using the `SampleData_LoadedProgrammatically()` function.

In this function we'll create a couple of Persons, then add a couple of Items to the persons, and then finally return an object literal that 'looks like' the `IYourShareState` interface (which is good because we promised to return something that looks like that interface)

```typescript
// 'programmatically' means "done by a program" (as opposed to reading it out of a data file)
let SampleData_LoadedProgrammatically = (): IYourShareState => { 
  // ": IYourShareState" is where we promise to return an IYourShareState
  
    
  	// create a couple of Persons:
    const you = new Person(0, "This is you", "508-867-5309", "98052")

    const person1 = new Person(1, "Stacey", "425-123-4567", "98011")
    // add a couple of Items to the persons:
    person1.addItem(2, "Blender", "Kitchen", "A pretty great blender.  The lid...");

    const person2 = new Person(3, "Marcos", "206-7654-321", "98115")
    // add a couple of Items to the persons:
    person2.addItem(4, "Rake", "Garden", "A pretty great rake.  The handle...");
    person2.addItem(5, "Car", "Garden", "A pretty great car.  The steering wheel...");

  	// return an object literal that 'looks like' the `IYourShareState` interface:
    return {
        idCounter: 6, // this is the id assigned to the next object that we create
        currentUser: you,
        people: [
            person1,
            person2
        ]
    }
}
```

There's more code in the reducer function - we'll look at that tomorrow

#### Storing your sample data in a JSON file [redux/SampleData.json]

It's also worth pointing out that it's possible to represent your starting data / sample data as a JSON file and to then load that file in (instead of creating the objects programmatically).  If so the file might look something like this:

```json
{
    "idCounter": 6,
    "currentUser": {
        "id": 0,
        "name": "This is you",
        "phone": "508-867-5309",
        "zipCode": "98052",
        "preferences": {
            "text_me_borrow_requests": false,
            "bffs_borrow_without_ok": false,
            "fof_dont_see_items": false
        },
        "bestFriends": [],
        "items": []
    },
    "people": [{
            "id": 1,
            "name": "Stacey",
            "phone": "425-123-4567",
            "zipCode": "98011",
            "preferences": {
                "text_me_borrow_requests": false,
                "bffs_borrow_without_ok": false,
                "fof_dont_see_items": false
            },
            "bestFriends": [],
            "items": [{
                "id": 2,
                "name": "Blender",
                "itemType": "Kitchen",
                "description": "A pretty great blender.  The lid...",
                "ownedBy": 1,
                "lentTo": null
            }]
        },
        {
            "id": 3,
            "name": "Marcos",
            "phone": "206-7654-321",
            "zipCode": "98115",
            "preferences": {
                "text_me_borrow_requests": false,
                "bffs_borrow_without_ok": false,
                "fof_dont_see_items": false
            },
            "bestFriends": [],
            "items": [{
                    "id": 4,
                    "name": "Rake",
                    "itemType": "Garden",
                    "description": "A pretty great rake.  The handle...",
                    "ownedBy": 3,
                    "lentTo": null
                },
                {
                    "id": 5,
                    "name": "Car",
                    "itemType": "Garden",
                    "description": "A pretty great car.  The steering wheel...",
                    "ownedBy": 3,
                    "lentTo": null
                }
            ]
        }
    ]
}
```

Two warnings:

1. Because the data model that we're using here is circular (the person refers to items, and each item refers back to it's owning person) we would need to do some work to store the information in JSON files or else use [a Node package that can store circular JSON data, such as flatted](https://www.npmjs.com/package/flatted).

2. We definied all our state using classes, but that may cause problems here.  Namely, TypeScript will complain the the objects in the SampleData.json file don't have all the methods that our classes do.  Flatted may (or may not) be able to solve this for you.

### Step 5: Actually using the Redux state :)

#### Step 5.1: Use the user-visible component on a page/screen [WelcomePage.tsx]

We might very well want to show the list of items that the user can borrow in multiple places in our app so we're going to put it into a separate component.  We'll put that component into the components folder and name it ItemList.  In the starter project we've got both an `ItemList.tsx` as well as styling information in `ItemList.css`.

We'll then make sure to import the component in our WelcomePage.tsx file:

```typescript
import ItemList from "./components/ItemList/ItemList"
```

We'll then tell React to render the component for us using &lt;ItemList/&gt; :

```typescript
class WelcomePage extends React.Component<WelcomeScreenProps> {
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.you.name}</h1> 
      
        <ItemList />
      
        <p onClick={(e) => this.props.changePage(pages.AddItemPage)}>
          Add item
          </p>
```

#### Step 5.2: Decide what information the component needs for it's props [components/ItemList.tsx]

Since each Person object has a list of items that they are willing to lend out all we'll really need is the list of people.

In the components/ItemList.tsx file you'll find an interface that defines the properties (props) that tells Typescript and Redux that we'll need a list of people:

```typescript
interface IItemListProps {
    listOfPeople: Array<Person>
}
```

Towards the end of the file you'll see the mapStateToProps function, which tells Redux that the 'people' part of the app's state should be copied into the props's listOfPeople part:

```typescript
function mapStateToProps(state: IYourShareState) {
    return {
        listOfPeople: state.people
    }
}
```

Because this component will only show the user information and will NOT change the state at all we'll intentionally leave the next part empty:

```typescript
// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
    return {
        // Because this component doesn't change the state of the app at all
        // we're going to leave this empty
    }
}
```

#### Step 5.3: Display the information [components/ItemList.tsx]

The render() method will set up the table that we'll need.  Here we'll focus on the lines of code that generate the rows of information - each row shows the item to borrow in the left hand column and the person who owns it on the right.

We'll use two calls to map, one inside the other;

```typescript
<tbody>
    {this.props.listOfPeople.map((person: Person) => {
        return person.items.map((item: Item) => (
            <tr key={item.id} > <td>{item.name}</td><td>{person.name}</td></tr>)
        )
    }
    )}
</tbody>
```

The first, outer .map() looks like :

```typescript
<tbody>
    {this.props.listOfPeople.map((person: Person) => {
				// <snip - inner loop goes here>
    }
    )}
</tbody>
```

The purpose of the outer map/loop is to run some code one per Person.

The second, inner, 'nested' .map() looks like:

```typescript

        return person.items.map((item: Item) => (
            <tr key={item.id} > <td>{item.name}</td><td>{person.name}</td></tr>)
        )
```

The inner map/loop serves to actually generate a single row.  Notice that if one person has several items then this inner loop/map will run that function once per  item while keeping the 'person' variable the same (until we go on to the next person)

## Practice: Add redux to your YourShare app

You'll notice that on the WelcomePage there's a list of items that you own, along with a note about whether or not the item is lent out or not.

Please follow the steps above to add this functionality to your YourShare app (in your team's app prototype repo - TeamXX-AppPrototype).

Here's a quick summary of what you'll need to do:

### Step 0: Setup Redux [index.tsx]

- [ ] npm install react-redux
- [ ] Make sure that you import the needed things from Redux and React-Redux
- [ ] Import your reducer function
- [ ] you'll need to take a quick detour and create one in it's own file 
- [ ] Create the Redux store (handing it your reducer function as a parameter)
- [ ] Wrap your App in a 'Provider' component, like so: 

### Step 1: What state do we need?

- [ ] Look at the picture of the table in the spec and discuss with your team what you'll need

### Step 2: Represent the state in Typescript / Redux [types.tsx]

- [ ] Make sure that you've got something to represent the current user and an array of items that they're willing to lend out.
  - [ ] You may want to copy the types.tsx file from the demo / sample that the instructor walked you through 

### Step 3: Represent the actions [redux/actions.tsx]

- [x] Since you're only showing the list, not modifying it, you shouldn't need to define any actions.

### Step 4: Write the code that actually makes the action happen (i.e., write the reducer) [redux/reducer.tsx]

- [ ] You'll need to create the initial state
  - [ ] Again, you may want to model your code off the stuff in the demo / sampl

### Step 5: Actually using the Redux state :)

#### Step 5.0: Display the information [components/ItemList.tsx]

- [ ] Define the LendingList.tsx file, along with a custom React component (class) inside it (also named LendingList) so that you can import it in the next step.  Right now it doesn't really need to do anything specific.
  - [ ] I'd *strongly* recommend that you find a working React component that has working Redux code in it and copy that as your starting point.  *Strongly* :)

#### Step 5.1: Use the user-visible component on a page/screen [WelcomePage.tsx]

- [ ] Add the &lt;LendingList /&gt; to the WelcomePage.tsx.

#### Step 5.2: Decide what information the component needs for it's props [components/LendingList.tsx]

- [ ] Define the ILendingList interface to tell TypeScript / Redux what the props the LendingList is expecting
- [ ] Define the mapStateToProps function
- [ ] Define the mapStateToDispatch function

#### Step 5.3: Display the information [components/LendingList.tsx]

- [ ] Discuss with your group whether your code will need a single call to .map() or whether you'll need to nest .map() inside a second .map()
- [ ] Set up the `render()` method to go through the list of items the current user


