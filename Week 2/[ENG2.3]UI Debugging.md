# UI Debugging

This lesson explains how to debug UI code in the Edge browser (Chromium) and explores several tools in more detail.

## Learning objectives

* TNTs will learn basic UI debugging with Chromium tools
* TNTs will understand how to investigate HTML/CSS changes while debugging 
* TNTs will explore the browser debugging tools for TypeScript/JS and React

## Time required and pace

Total time: 1 hours, 30 minutes

- 30 minutes - **Pre-session**): check installations, open example app, reading
- 30 minutes - **Instructional Session**
  - 5 minutes - Debug Overview
  - 25 minutes - Debugging Tool Details
- 30 minutes - **Post-session**: Continue working with UI debugging tools

## Pre-session

*Prepare for the session* [here](../../../wiki/[ENG2.3]-UI-debugging)

## Session Details

### Edge Debugger Overview (5 minutes)

The developer tools are best shown in action. Open a website and review the panels:

1. **Elements panel** - View and modify the DOM and CSS that is loaded in the browser memory
2. **Console panel** - View messages, errors warnings and info, and run JS commands
3. **Sources panel** - Debug Javascript files via breakpoints, view other source files
4. **Network panel** - View network traffic, HTTP status codes, file types, file size, download times, etc.
5. **Performance** - View performance metrics by recording a page interaction

### Debug CSS: Elements Tool (10 minutes)

1. Open the [ENG2.2-Layouts App from Exercises](https://github.com/tnt-summer-academy/Exercises/tree/main/Week_2/ENG2.2-layouts) and run the app
   (NOTE: be sure you have added the `<KeyworkCollection>` element to *App.tsx*)
2. Explore the **Elements tool** to see how it can help us with UI debugging.
   - Navigating the DOM
   - Edit the DOM - Add or remove HTML elements to preview the layout
   - Edit the CSS - Add, remove, or update CSS styles to see changes
   - Break on DOM modifications - You can start debugging on any DOM element changes that have been made by Javascript; for example if you have the ***StudentTable*** building.

### Debug TypeScript/JS: Sources Tool and Console (10 minutes)

1. Open the [to-do-basic-walkthrough](https://github.com/tnt-summer-academy/Samples/tree/main/Week_1/to-do-basic-walkthrough) from the Week 1 Samples in the Edge browser
2. View the **Console panel** for any errors or warnings
3. Use the **Sources tool** to pause your code with breakpoints and view the call stack, variables, threads and more
4. When your breakpoint has been hit then you have a few actions you can take:
    * **Pause/Resume**: Stop and continue debugging
    * **Step Over**: Gives you the ability to "step over" a line of code
    * **Step Into**: Go further into a function call
    * **Step Out**: If you've decided to Step Into a line of code to go back you can Step Out to navigate back to your last line of code

### Debug ReactJS: Components and Profiler Tools (5 minutes)

Continue using the My-to-do-list App, but open the React Debugging Tools
(You will need to have installed the [React Dev Tools Extension on the Edge browser](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) )

- The Components tool shows the individual components, their nesting, their properties and state
- The Profiler tool records the browser's execution of the app to identify performance issues. As you add more functionality to the app this becomes more interesting

## Post-session

- View the post-session [here](../../../wiki/[ENG2.3]-UI-debugging)
