# Unit Testing with Jest

This lesson explains the basics of unit testing. It provides examples of unit testing with Jest and practice with writing unit tests.

## Learning objectives

* TNTs will understand what unit testing is and why it's important
* TNTs will understand red, green, refactor pattern
* TNTs will understand Jest
* TNTs will write unit tests for functions but also for the UI of an app

## Time required and pace

Total time: 1 hour 45 minutes

* 30 minutes - Pre-session
* 60 minutes - Instructional Session
  * 10 minutes – What is unit testing? Why is it important in the software development lifecycle? What are the other testing techniques?
  * 10 minutes – Red, Green, Refactor
  * 10 minutes - Jest
  * 30 minutes - Write unit tests and practice
* 45 minutes - Post-session

## References

* [Jest](https://jestjs.io)
* [Jest documentation](https://jestjs.io/docs/en/getting-started.html)
* [Basics of testing JavaScript with Jest](https://blog.bitsrc.io/testing-javascript-with-jest-a4b82817bb0f)
* [React Teting Libray - ReactTestUtils](https://reactjs.org/docs/test-utils.html)
* [Testing React components in TypeScript](https://www.pluralsight.com/guides/how-to-test-react-components-in-typescript)
* [Using Jest with TypeScript](https://olavihaapala.fi/2019/02/04/using-jest-with-typescript.html)
* [Videos on Jest](https://www.youtube.com/watch?v=D9DdY2WmM-s)

## Pre-session (15 minutes)

Prepare for the session [here](https://github.com/tnt-summer-academy/Curriculum/wiki/%5BENG3.2%5D-Unit-testing-with-Jest)

## Instructional session (60 minutes)

### What is Unit Testing? Why do we need it? What are other testing techniques? (10 minutes)

**Definitions**

* **Test case:** A test case is composed of a title, a scenario, and expected and actual outputs. A test passes if the expect and actual outputs match
* **Unit testing:** Unit testing is an automated testing technique where tests are written and executed by software developers to ensure that a small section of an application ("unit") meets its specification and behaves as intended. A unit can be a function, a class, an interface etc. Unit testing is a type of white box testing (testing with access to code)  
* **Functional testing:** Functional testing is a quality assurance (QA) process and a type of black box testing that bases its test cases on the specifications of an aplication under test. Functional testing is done by testers. Black box testing looks at the application under test as a black box
* **Integration testing:** Integration testing involves the testing of combined units that were tested independently and work fine. The purpose of this level of testing is is to expose faults in the interaction between integrated units. Integration testing is done by testers or developers. It can be a type of white box or black box testing

**Question to answer by the TNTs**

* What is/are the difference/s between unit testing, integration testing, and functional testing?

**Benefits of unit testing**

* Confidence in updating code - As a new developer on a team, if you make changes to a module and all the unit tests pass, you can have that much more confidence in not introducing bugs. The database of unit tests increases and tests are executed each time, a process called *regression testing*
* Reliable modules - A module inputs can be tested with each unit test serving as a different scenario
* Reusability - An indirect benefit to writing your module to be "testable" results in smaller units of code with, ideally, one singular responsibilty
* Debugging is simpler - When searching for root cause of a defect, you simply identify the module with a failing test. If there are no failing tests then that means there's a missing unit test ready to be written!

### Red, Green, Refactor (5 minutes)

Red, Green, Refactor is an engineering pattern of Test Driven Development (TDD) that is an effective way of writing unit tests

1. Design a test by creating test scenarios (sometimes referred to as test cases)
2. Write a failing test (Red)
3. Write code to make the test pass (Green)
4. Refactor the code
5. Re-run the test to make sure it still passes

![RGR](https://s3.amazonaws.com/codecademy-content/programs/tdd-js/articles/red-green-refactor-tdd.png)

Image from [here](https://www.codecademy.com/articles/tdd-red-green-refactor)

### Jest (10 minutes)

Jest is an open JavaScript testing library. While Jest can be used to test any JavaScript library, it is very popular when it comes to React 

* Using Matchers - When testing values, Jest provides "matchers" to help compare values
* Setup and Teardown - If you have code that needs to execute before or after many tests, you can use `beforeEach()` and `afterEach()`
* Async Code - Jest provides several ways to wait for async code to finish before proceeding to the next test

#### Sample code

We will be using the code [here](https://github.com/tnt-summer-academy/Exercises/tree/main/Week_3/unit-testing-with-jest)

#### Install and configure Jest

1. `npm install --save-dev jest`
2. To write tests with Typescript, we must install ts-jest using `npm install --save-dev ts-jest @types/jest`
3. Create a jest config file using `npx ts-jest config:init`

#### Run Jest

1. A file `App.test.tsx` is created automatically by create-react-app to test `App.tsx`. For each file `file.tsc` under test, we can create a file `file.test.tsx`
2. Organize your tests by choosing relevant names and using directories
3. In the Terminal window, use `npm t` to run the tests


#### Troubleshooting

It may happen that you get an error when running `npm t`. In that case, the list of actions/steps to take to solve the problem are provided. The problem comes from dependencies between installed packages. Info is available [here](https://stackoverflow.com/questions/56528222/npm-start-returns-error-there-might-be-a-problem-with-the-project-dependency-t)

#### Red, Green, Refactor in Jest

This is how passing and failing tests appear in Jest.

![pass](https://github.com/tnt-summer-academy/Curriculum/blob/main/Week%203/%5BENG3.2%5Dgreepass.png)

![fail](https://github.com/tnt-summer-academy/Curriculum/blob/main/Week%203/%5BENG3.2%5Dredfail.png)

### Let's write unit tests in Jest (35 minutes)

* `test` is a function that takes a string and a function as parameters. The overall syntax of test is `test("", () => {expect().matcher()})`. The first parameter (a string) is the title of the test. The second parameter is a function that contains the expectations to test. That part uses a matcher that matches the actual value with the expected value.  A complete description of `test` is available [here](https://jestjs.io/docs/en/api#testname-fn-timeout). The number of calls of `test` determines the number of test cases
* There are lots of different matchers: `toBe`, `toEqual`, `toBeDefined`, `toContain`, `toEqual` etc. A list of matchers is available [here](https://jestjs.io/docs/en/expect)

#### Examples of unit tests

* This test will always pass

    ```typescript
    test('a very simple test', () => {
        expect(true).toBe(true)
    })
    ```
    
* This test will always fail

    ```typescript
    test('a very simple test', () => {
        expect(true).toBe(false)
    })
    ```

* Testing if a list contains an object

    ```typescript
    const productList = [
        'Microsoft Surface Pro', 
        'Microsoft Office 365', 
        'Xbox'
    ]

    test('the list of products contains Xbox', () => {
        expect(productList).toContain('Xbox')
    })
    ```
    
* Testing if a function returns the correct result. Assuming a function `inchesOfRain()` that returns 0 if it does not rain.

    ```typescript
    test('did not rain', () => {
      expect(inchesOfRain()).toBe(0);
    });
    ```

* This test with an exception will always pass

    ```typescript
    expect(() => {throw new Error()}).toThrow();
    ```

* Testing for an exception. Making sure the function throws an exception

    ```typescript
    storesForState(state: string): Store[] {
      throw new Error("Method not implemented");
    }
    test("Stores in a particular state throws an error", () => {
      expect(() => storeFilter.storesForState("New York")).toThrow();
    });
    ```

#### Examples of unit tests related to the UI

* These tests are available in the `uitesting` files

* When testing components, we want to test that the component behaves in a certain way. We also want to be sure that we can test events (click on a button for example). The components need to be mounted on the browser DOM, but when writing tests there is no DOM.

* We want to make sure that the text that is rendered contains *Welcome*. We use a regular expression in the test

    ```typescript
    test('renders App with Welcome', () => {
      const { getByText } = render(<App />);
      const linkElement = getByText(/Welcome/);
      expect(linkElement).toBeInTheDocument();
    });
    ````
* The test below shows how to test that the text of a button changes when it is clicked

  The test is first setup. `act()` prepares the components for the `expects`. It wraps the code rendering it and performing updates. This makes the test run closer to how React works in the browser. The test needs to include the steps a user would take - here we retrieve the button from the ReactDOM (`querySelector`), click on the button programmatically (`fireEvent.click(btn)`), and check that the text on the button changed to the correct one. 

* Often you have some setup work that needs to happen before runnin tests and some finishing work that needs to happen after running tests. Jest provides helper functions to handle this:`beforeEach` and `afterEach`
  
    ````typescript
    let container: HTMLElement;
    
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      act(() => { ReactDOM.render(<App />, container) });
    });

    afterEach(() => {
      document.body.removeChild(container);
    });

    test('exception returned on click', () => {
      const btn = container.querySelector('button');
      console.log("btn " + btn?.textContent);
      if (btn != null) {
        fireEvent.click(btn);
        expect(btn.textContent).toBe("I was clicked!");
      }
    });
    ````
    
#### Practice writing unit tests

A starter project has been created which contains stubbed unit tests. Use the Red, Green, Refactor pattern to complete the unit tests.

1. `git clone` the Samples GitHub repository [here](https://github.com/tnt-summer-academy/Exercises/tree/main/Week_3/unit-testing-with-jest) or use `git pull`
2. Use VS Code to open the 'Week_3/unit-testing-with-jest' project
3. Use Cmd+J to reveal the Terminal in VS Code
4. `jest` and `ts-jest` are already listed as dependencies in 'package.json' so in the Terminal window type 'npm install' to install both dependencies
5. To run tests type `npm t` in the Terminal window

## Post-session (45 minutes)

The post-session is available [here](https://github.com/tnt-summer-academy/Curriculum/wiki/[ENG3.2]-Unit-testing-with-Jest)
