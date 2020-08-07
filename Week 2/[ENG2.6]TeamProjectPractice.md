# Team Project Practice

The most important aspect of this exercise is to **start practicing the process that you'll use to develop your prototype app that your team will show off in week 7**.  The specific app that you'll be developing this week ('YourShare') is different from your team's app prototype but the overall steps & approach will be the same for both (or at least very similar).

IMPORTANT NOTE: We will start working on the YourShare app today *and we will keep working on it throughout this week*.  There's a lot to do and it will take a while for this all to fully sink in.

Today we'll be working on the following: 

1.  Each team will review the YourShare spec and then break down the engineering work. 
2. The teams then merge initial changes for the project into the same repo and resolve any merge issues. 

**The goal is not to complete the prototype of the app rather gain experience breaking down the work, coding together, and resolving conflicts.**

## Learning objectives

* TNTs will understand how to break down work.
* TNTs will understand how to scope work.
* TNTs will practice merging and resolving merge conflicts.

## Time required and pace

Total time: 3 hours, 45 instruction, remaining work time

* 5 minutes - Demo: Kanban boards in GitHub
* 5 minutes - Demo: Adding a new card
* 15 minutes - Exercise: breaking down work
* 5 minutes - Demo: Breaking a page into Components 
* 15 minutes - Exercise: Breaking a page into Components 
* 10 minutes - Demo: How to do simple, multi-page navigation in React (without React Router)
*  5 minutes - Exercise: Start coding up the page navigation

## NT Deliverables:

1. Within your team's AppPrototype repo in GitHub, create a new Project to organize your work on YourShare
   - [Spec for YourShare](https://github.com/tnt-summer-academy/Curriculum/blob/main/Reference/Sample%20spec%20-%20YourShare.md)
2. Within that project find the Kanban board and create Cards, with 1 card per screen/page in the spec, in order to break down the overall work into specific steps
   - Each card must start with "Done when"
   - Each card must be assigned to a specific person.
   - As much as possible the volume and 'challenge level' of the work should be about the same for each team member.
     - That said, feel free to divide up work based on who's most comfortable / experienced / interested in the various features/pages
3. The work breakdown should be reviewed by your coaches
4. You should then create pages (components) that look like each of the pages in the spec.
   - You should be able to navigate amongst the pages in the React app.
   - Other than looking like the pages in the spec and navigation nothing else in the app should do anything.

## Background / review

None

## Lesson details

### Demo: Kanban boards in GitHub (5 minutes)

First, let's look at [a project in GitHub by following this link https://github.com/tnt-summer-academy/Team00-AppPrototype](https://github.com/tnt-summer-academy/Team00-AppPrototype) 

1. In that repo you'll find a tab labeled "Projects":
   ![image-20200711171227457](images/%5BENG2.6%5DTeamProjectPractice/image-20200711171227457.png)
2. Within the Projects list for this repo you'll see something for **ENG2.6: Team Project Practice**.  :
   ![image-20200711171409650](images/%5BENG2.6%5DTeamProjectPractice/image-20200711171409650.png)
3. Click on that to see the Kanban board
   ![image-20200711171434869](images/%5BENG2.6%5DTeamProjectPractice/image-20200711171434869.png)
4. Within the Kanban board you can click on a card to see it's details:
   ![image-20200711171647362](images/%5BENG2.6%5DTeamProjectPractice/image-20200711171647362.png)

Please notice a couple of things:

1. <u>This task contains a clear 'Definition Of Done"</u> (the part that starts with "Done when:..."). 
   For the work that you're doing today (with your team) **every task must contain a statement that clearly describes how you'll know the task is finished**, and that statement must start with "Done when:".
2. <u>This task is assigned to one person.</u>   (In the above image that's "Bansenauer")
   That person is responsible for either the task done and communicating with the rest of the team about the current status of the task.  
   (It's fine to move tasks around between people, but it's important that we don't let tasks 'fall between the cracks' because nobody was responsible for it)

<u>Make sure that all the cards you create have a Definition Of Done and are assigned to someone!</u>

### Demo: Adding a new card (5 minutes)

You can add a new card here a couple different ways.  The way that we're recommending is this:

1. In a column (for example, the 'To do" column') click on the plus sign ( + ), then type the TITLE for the card into the text box:![image-20200711181028053](images/%5BENG2.6%5DTeamProjectPractice/image-20200711181028053.png)
2. Once you've done that find the new card, click on the triple-dot menu, and select 'Convert to issue':
   ![image-20200711181254783](images/%5BENG2.6%5DTeamProjectPractice/image-20200711181254783.png)
3. Then type in the additional detail into the 'Body'.  
   Make sure that you start with a concise, clear, "Done when:" statement:
   ![image-20200711181408638](images/%5BENG2.6%5DTeamProjectPractice/image-20200711181408638.png)

### Exercise: breaking down work (15 min)

1. For this project you will be breaking down the work in the sample spec.  A spec, short for specification, is a description of the app and it's functionality. It defines what is being built while capturing the essentials of why and how it's being built.

2. There are two steps to the project:
    * Breakdown the engineering work.
    * Build the initial screens for the project, associated with the P0, most important work items, merge them in the same repo, and connect the navigation across the screens.

When you're done, you'll have the shell of the app that navigates between the major pages and some place holder controls to represent the functionality. It'll feel very much like a high-fidelity prototype. Today we'll start by looking at the spec and breaking down the work.

**At this point you should work with your team to start breaking down the work.**  Your initial technical goal is to create a page (in React) that looks like each page in the spec; you do NOT need to make anything in the page work.  Your initial PM goal is to divide up the work so that it's clear who's working on what.

1. Within your team's AppPrototype repo in GitHub, have someone create a new Project to organize your work on YourShare
2. Within your team's AppPrototype repo in GitHub, you will find a folder named *YourShare*.  
   Within that folder have someone put [a copy of the YourShare spec](https://github.com/tnt-summer-academy/Curriculum/blob/main/Reference/Sample%20spec%20-%20YourShare.md) in your repo.
3. Examine the YourShare spec as a team, paying particular attention to the various pages and the navigation between them.
   As a team, create 1 card per page of the YourShare app in order to break down the overall work into specific steps
   - **Each card must start with "Done when"**
   - **Each card must be assigned to a single, specific person.**
     It's great to collaborate on stuff (and we encourage y'all to do so!) but having a single individual's name on the card means that there's a single person who's responsible for making sure that work gets done.

*<u>For now the only thing you need to do is to create pages that look like the ones in the spec.  They do NOT need to actually do anything functional.</u>*

### Demo: Breaking a page into Components (5 minutes)

Your instructor will walk you through a very brief example of breaking a page into individual components.

### Exercise: Breaking a page into Components (15 minutes)

Your team should choose a single YourShare page to work on together, breaking that page down into individual components.  For now y'all can work in a Markdown file instead of the Kanban cards to keep things quick.

Create a Markdown document to be stored in your AppPrototype repo (within the YourShare folder).  You can do this directly within GitHub itself using the 'Add File' button:
![image-20200711191232377](images/%5BENG2.6%5DTeamProjectPractice/image-20200711191232377.png)

Think about what elements of the page are naturally grouped together (that grouping might make a good component), think about what you might want to move around on the page (those chunks of the page that you might want to move might each make a good component), and make sure to look for things that are repeated across different pages (such as the 'Cancel/< action >' button pairs )(they might be good as a component).

Write down your Team's list of components in the Markdown file.

If you're looking for advice on how to format the Markdown file:
Start a new component by putting in a blank line followed by a line that starts with two hash marks ( ## ) before a short name for the component.  Leave a blank line between the ## line and your short paragraph (1-3 sentences, tops) describing what goes into that component.

More information on the Mardown format is available [here](https://guides.github.com/features/mastering-markdown).

After you've broken down the work, review with your coaches.
Once you have sign-off from your engineering coach you can start building.

### Demo: How to do simple, multi-page navigation in React (without React Router) (10 minutes)

Let's look at the YourShare app that has been uploaded to your `TeamXX-AppPrototype` repos 

Specifically, let's look at [the 'App.tsx' file](https://github.com/tnt-summer-academy/Team00-AppPrototype/blob/main/yourshare/src/App.tsx).

***Essentially, the App will keep a variable as part of it's React state (NOT in Redux) that keeps track of which page to display.***

1. In the render method the App renders whichever page (component) should be displayed by calling the `getCurrentScreen()` method:

```typescript
   render() { return < div className="App">{this.getCurrentScreen()}< /div>; }
```

2. The `getCurrentScreen()` method is basically a switch statement that decides which component (page) to return based on the state's `currentPage` value.
3. The `AppState` interface shows you that the  `currentPage` is a `pages`.  Right above the interface you can see the pages enum - this is a list of pages.
4. At the bottom of the App.tsx file is a function named `changeScreen()` which will switch to the specified page.  When this function is passed to a page it is assigned to the `changePage` property.

You can see an example of using the `changePage()` property to change the page/screen in the WelcomePage.tsx file:

```typescript
        < p onClick={(e) => this.props.changePage(pages.AddItemPage)}>
          Add item
        < /p>
```

Two things to note:

1. You'll need to import the `pages` enum at the top of the WelcomePage.tsx file ( on line 2: `import { pages } from "./App";`
2. Back in App.tsx You'll need to pass the `changeScreen` function as a property (line 29 in App.tsx: `return < WelcomePage changePage={this.changeScreen} />;`) in order to use  `this.props.changePage` in the HomePage.tsx file.

### Exercise: Start coding up the page navigation (5 minutes)

Start your development of YourShare by doing the following within your team.  If y'all could get done with step 5 ("Everyone MUST create a new branch..." ) that would be great.  Steps #6 and onwards are intended for the post-session work

1. For all your work on YourShare, please use your team's AppPrototype repo on GitHub but only put the YourShare work in the YourShare folder
   
   - You should find a YourShare folder there already
   
   - The YourShare folder already contains a starter project for the YourShare app.  As you examine it you'll find that it has working multi-page navigation code already in place for you.
4. Once that starting code has been pushed to GitHub then everyone else should clone the repository locally (or pull the most recent changes, if they'd previously cloned it)
5. **Everyone MUST create a new branch for their individual work on their individual pages/components/features!!!!!!!!!!!!!!!!!!.**
6. Each person should create a new component (page) for their page, then adding a link from the main page to their new page.
   Keep things simple by having your new page do nothing other than offer a link to jump back to the main page.
7. Once everyone in your team has the multi-page navigation working correctly AND you've gotten your work breakdown reviewed by your dev coach then please have each person start working on their page(s)/component(s).
8. Commit frequently, push, merge back into main in functional chunks. 
   Fetch from *main* frequently and merge into your branch.
9. When you hit a merge conflict, resolve it together.
