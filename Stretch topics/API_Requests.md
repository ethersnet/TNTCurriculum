# API Requests

A common feature in any application is interacting with an API service to get data to display on a page.  

## Learning objectives

* TNTs will be able to understand what an API service is
* TNTs will understand how to use an API service
* TNTs will learn how to use an API service to get data and display it on a React app

## Time required and pace

Total time: 1 hour

* 10 minutes - engage: apps that use an API service
* 10 minutes - explain: what is an API service
* 40 minutes - evaluate: create a new React app to use an API service

## Background / review

Free fake online REST API for testing: [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

API calls with React: [https://reactjs.org/docs/faq-ajax.html](https://reactjs.org/docs/faq-ajax.html)

OAuth basics: [https://www.oauth.com/oauth2-servers/single-page-apps/](https://www.oauth.com/oauth2-servers/single-page-apps/)

## Engage: Apps that use API services (10 minutes)

### Question 1 - What apps currently use an API service

Ask the students to get their phones out and list examples of apps they use everyday that they may think use an API service

It will most likely be all the apps on every phone. This highlights the importance of understanding how to properly and efficiently use API services.

### Question 2 - On average, estimate how many API requests per day an app makes

Now ask the students how many API requests do they think happens on some of the popular apps: Facebook, Instagram, Tik Tok, Snapchat

This will give them a broad understanding of scale for API services

## Explain: What is an API service (10 minutes)

* Definition of an API service

* What is a RESTful API?

* Request object

  * Differences between GET, POST, PUT, DELETE
  
* Brief overview of OAuth 2.0 for secure APIs

  * What is an access token? Bearer token? Refresh token?

![RESTAPI](./rest-api.png)

Example of how to connect to an API service using a browsers built in `fetch` API

```js
fetch("https://api.example.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
```

## Evaluate: Create a React App to use an API (40 minutes)

The NTs will create a new React app that will contain a list of to dos. Before the to dos can be rendered an API request will need to be made. Once the JSON response has been received in the React app they will use the JSON response to display to dos.

Encourage the use of CSS Flex box or Fluent UI to help with the layout.

1. Create a new React app

    `npx create-react-app api-requests --template typescript`

2. Use this URL for your API request

    `https://jsonplaceholder.typicode.com/todos`

    The JSON response will look like this

    ```js
    [
        {
            "userId": 1,
            "id": 1,
            "title": "Send meeting notice",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "Learn about API services",
            "completed": true
        }
    ]
    ```

3. Display the JSON response in a list

## Stretch

To view additional API services available for testing: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

1. Dynamic CSS class names
    * If a to do is marked as `completed: true` make the background green
    * If a to do is marked as `completed: false` make the background yellow

2. Create a component that has one function that executes (2) API calls

    The two API calls should be:
    * `https://jsonplaceholder.typicode.com/comments`
    * `https://jsonplaceholder.typicode.com/todos`

    A few questions the NTs should explore:

    * What is a composition service? And why do you need one?
    * What happens if one of the two API calls fails?
    * How do we handle this gracefully?
