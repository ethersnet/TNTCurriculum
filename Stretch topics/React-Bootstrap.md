## Learning objectives

* TNTs will articulate some of the reasons for using a UI Component Library
* TNTs will be able to install a UI Component Library and use a component in a React project
* TNTs will identify requirements, challenges and resources for integrating library components

## Time required and pace

* Total time: 2 hours, 45 minutes

  - 30 minutes - **Pre-session**: background learning, resources, and research
  - 60 minutes - **Instructional Session**
  - 5 minutes - **Post-session**: consider the option to implement UI components in team app

## Background / review

* Function components/Class Components
* HTML  and CSS overview for Web Apps

## Pre-session (30 minutes)

*Prepare for the session* [here](../../../wiki/[Stretch]-React-Boostrap)

## Session Details

#### Overview of UI Component Libraries

There are a large number of React UI component libraries to choose from, each with a different history, focus, strengths and limitations. Some things to look for include:

- **Built for React** - some JavaScript front-end libraries can be used with React, but are not built for React. This can lead to integration issues and challenges with installation
- **TypeScript Support** - look for components and libraries that offer fully-supported TypeScript definitions, examples and demo projects to avoid suprises later on.
- **Open Source Licensing** - Not all libraries are open source or free to use. Look for MIT Licensing for the most flexibility. Note that some free libraries offer paid support or charge for custom themes.
- **Clearly Supported** - Pay attention to when the library's GitHub repo was last updated; look for clear documentation, well-thought out examples, and sample projects.
- **Responsive, Accessible** - frontend components libraries should include a focus on responsive design (adapting to different screen sizes), and accessibility (adapting to different user abilities).

#### React-Bootstrap [Component Sandbox](https://codesandbox.io/s/sharp-snow-v1j90?file=/src/App.js) 

- Container - experiment with [Bootstrap class presets](https://hackerthemes.com/bootstrap-cheatsheet/#m-1)
- Toast- [useState Hook](https://reactjs.org/docs/hooks-overview.html)
- Customize component - Example Toast

#### Installation Process and Gotchas

##### NPM installation

Look for the "Getting Started" or "Installation" section on the library website to find the npm library name. You can also [search npm packages directly](https://www.npmjs.com/) for "React" components by name.

##### Look for Dependencies

Some library components may have dependencies that also must be included for them to work. Look for requirements for CSS files, icons, templates, and other general  JavaScript libraries.

##### TypeScript Errors

When trying to use a general React UI library, watch for TypeScript compille to e-time errors. You may be able to work around these by adjusting some of the tsconfig.json compiler options, like setting` "noImplicitAny": false`

##### Hooks 

Many UI component examples are shown using function based components to demonstrate how they work. These examples often include the ***useState*** and ***useEffect*** hooks to handle the component data. You can read more about [how to use React hooks here](https://reactjs.org/docs/hooks-overview.html).

#### Code Walkthrough - React Bootstrap & More

1. Using Bootstrap Styling
2. Modify Styling
3. Use Other Libraries
4. Add a Component

## React UI Components Demo Code

[Sample code for React UI Components demo](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/react-ui-demo)
