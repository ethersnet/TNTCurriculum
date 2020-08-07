# Animations with CSS and React-Spring

This lesson explains some techniques (CSS and React Springs) used to animate components

## Learning objectives

* TNTs will examine some of the difference between CSS and React Spring animations
* TNTs will be able to add animations to a component
* TNTs will understand how to create their own custom animations

## Time required and pace

* Total time: 2 hours, 45 minutes

  - 45 minutes - **Pre-session**: background learning, research, and investigations
  - 60 minutes - **Instructional Session**
  - 60 minutes - **Post-session**: collaborate as a team to implement animation in YourShare

## Background / review

* Function components/Class Components
* HTML  and CSS overview for Web Apps

## Pre-session (45 minutes)

*Prepare for the session* [here](../../../wiki/[ENG3.1]-Animation)

## Session Details

### When (NOT) to Use Animation (5 minutes) 

It's a truism that **the best-designed user interface is one that the user never notices**. Think about animation in the same way. Animation should draw the users' attention, help them understand their interactions, and suggest how they can take their next step. Animations should NOT draw the users' attention away from their goals, tasks and that they want to accomplish.

### How to Use CSS Animation (10 minutes)

CSS animation uses the browser engine to change the value of [CSS properties over a given length of time](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations). Coding the animation involves two steps: 

- [defining the animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) and 
- creating [its keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes). 

In the simplest case, this can look like:

- Declare an animation by setting up its configuration properties, with at least an `animation-name` and `duration`
- Define a `@keyframe` rule with the animation name, and list of keyframes to specify at least two sets of styles, the ones animating `from` and the ones animating `to`

The CSS animation is started once the CSS style is applied to the element (one page load, mouse hover, or on-click)

**You can also use a [CSS Animation library](https://animate.style/)** to access a set of pre-built animations that you apply to a  particular element by assigning a give class name.

### How To Use React-Spring for animations (10 minutes)

React-Spring is a React animation library that uses the physics of movement, like mass, friction, and tension, to define animations, rather than a fixed length of time. This helps the animated movement feel mores "real" and gives the library its name. 

The library provides two options for animating, either with a **Spring component** (used within a class component) or a **Spring hook** (used within a function component). 

**NB: Each animation type works with only one type of React Component and needs a different library *import*.**

#### Spring Component (within a Class component only)

A [`Spring` component](https://www.react-spring.io/docs/props/spring) can be included **as a JSX element in a a class component**. The child of the component is a function that returns the animated element. The component can use props from [the Core API properties](#Core-API-Properties), and passes them as an object to the animated element. As the Spring `props` change the style object will be updated. 

The example here animates a `<div>` to fade (opacity changing from 0 to 1.).

    class AnimatedView extends React.Component {
      render() {
        return (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => <div style={props}>hello</div>
          </Spring>
        )
      }
    }

#### Spring Hooks (within a Function Component only)

A [Spring hook](https://www.react-spring.io/docs/hooks/use-spring) is used **as part of a function component** by defining an object at the output of the  `useSpring()` with a parameter [built from the Core API properties](#Core-API-Properties). This ***springProps*** object is then used as the value for a JSX element's *style* property. Notice that the hook requires you use an `animated` extention for the containing JSX elements - created [with the animated element](), like `<animated.div ... > ... </animated.div>`

    function AnimatedFunc() {
      const springProps = useSpring({
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      });
      return (
        <animated.div style={springProps}>
          <p>Hello</p>
        </animated.div>
      );
    }

#### 	React Spring Hook types

- `useSpring` a single spring, moves data **from** a to b

- `useSprings` multiple springs, for lists, where each spring moves data from a to b

- `useTrail` multiple springs with a single dataset, one spring follows or trails behind the other

- `useTransition` for mount/unmount transitions (lists where items are added/removed/updated)

- `useChain` to queue or chain multiple animations together

#### Core API Properties

See [here](https://www.react-spring.io/docs/hooks/api)

- **from**: Object of type CssProperties, specifying the initial style of the animation.

- **to**: Object of type Css Poperties specifying the end style of the animation

- **delay**: Time before animation starts

- **immediate**: Stops animation from running if set to true

- **reset**: Runs animation again

- **reverse**: Runs animation in reverse

- **onStart**: Function called at the start of an the animation

- **onRest**: Function called when the animation stops

- **onFrame**: Function called on each frame of the animation

- **config**: Takes in arguments to specify the physical properties of the animation(velocity, duration, etc)

### Code Practice Setup - Sample App (5 minutes)

1. **Start** Teams call with your team
2. **Pull and Review** together the [CSS and React-Spring animation sample](https://github.com/tnt-summer-academy/Samples/tree/main/Week_3/animation-demo) code 
3. **Decide** together on ONE page component to apply BOTH types of animations, CSS and React-Spring. 
4. **Divide your team**  in two, with one Focus Group working on *CSS animation* and one on *React-Spring animation*.
5. **Animate the Page** following these [animation best practices](https://animate.style/#best-practices)

### Code Practice YourShare with Focus Group (30 minutes)

- **Open** YourShare in VS Code; start a LiveShare session with your focus group; post a link in the Teams chat
  ( Your team will have two LiveShare links in the chat - one for each focus group)

- **Pull** from main; run `npm install react-spring` and `npm install animate.css` 

- **FOCUS GROUP: CSS**

  - **Apply** one [CSS animation](https://animate.style/) to an element in the YourShare page. 

  - You will need to include this link in the `head` of your `public/index.html` page 

    ```html
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      />
    ```

- **FOCUS GROUP: REACT-SPRING**

  - **Convert** one YourShare page from a class component to a function component
  - **Build** a React-Spring hook animation for some element in the page

## Post-session (60 minutes)

View the post-session [here](../../../wiki/[ENG3.1]-Animation#Post-session-(60-minutes))

