**Cookies**

This lesson explains how to add cookies to your app

**Learning objectives**

-  TNTs will be able to persist cookies when an app reloads

Total time: 1.5 hour

- 20 minutes - explain: How to add spring animations to an element.
- 20 minutes - Explore spring properties
- 20 minutes - evaluate: create an animated component

**Background / review**

- Props, state
- Redux state

**Lesson details**

**Cookies?**

Cookies are pieces of information stored on the user"s computer by a website. They are mostly used to maintain information about a user between sessions.

**Using Html****

1. Getting Cookies: "document.cookies"; returns all the saved cookies as a string of key value pairs separated by a semicolon.
2. 2)Setting Cookies: "document.cookies='name=value'" sets the value of a new or existing cookie.
3. 3)Expiring date: "document.cookies= 'name=value expires=Wed, 24 Jun 2020 12:00:00 UTC'"
4. 4)Deleting Cookies: To delete a cookie set its expiring date to a date that's already passed

For more details: [https://www.w3schools.com/js/js\_cookies.asp](https://www.w3schools.com/js/js_cookies.asp)

**Using Universal-Cookies (yarn add universal-cookie)**

     import Cookies from "universal-cookie";

     const cookies = new Cookies();

     cookies.getAll();

1. getAll(): returns all cookies that have been stored
2. get("name"): returns the value for the given cookie. Returns undefined if the cookie doesn't exists
3. set("name", "value"): sets the value for a new or existing cookie
4. remove("name"): removes a cookie from storage

For more details: [https://www.npmjs.com/package/universal-cookie](https://www.npmjs.com/package/universal-cookie)

**Animation Activity (20min)**

Show the high score on your simon says app and retain the score when the app
