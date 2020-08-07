**Http Requests**

This lesson explains how to make http requests to a server

**Learning objectives**

-  Understand what is an http request.
-  Dispatch an action asynchronously.

Total time: 40 hour

-  20 minutes - explain what is an http request
-  20 minutes – Activity- Explore free public apis

**Background / review**

- Synchronously / Asynchronous functions

**Lesson details**

**What is an Http Request**

This is a message sent from the client to the server to trigger some action on the server which typically results in an Http Response from the server to the client. An Http request is asynchronous meaning it doesn&#39;t have to stop the flow of the program making the request, after a request is sent the program proceeds normally without waiting for a response.

**Types of requests**

1. Get: Request data from a resource (example below)
2. Post: Send Data to be stored to a server
3. Put: Same as post except it doesn't duplicate object sent if it's sent multiple times
4. Head: Same as get except it doesn't receive a response.
5. Delete: Deletes the given resource

For more details: [W3schools HTTP Requests](https://www.w3schools.com/js/js_cookies.asp)

**Making a basic request using ** fetch(url , parameters)**:**

    const url = newURL("https://api.thecatapi.com/v1/images/search");    //url for resource we're making a request to
    url.searchParams.append("limit", "1");                               //parameters for the request
    url.searchParams.append("size", "full");                             //parameters for the request

    const urlString = url.toJSON();                                      //convert to a string
    fetch(urlString)                                                     //fetch the response for the request
        .then(result => result.json())                                   //convert the result to an object
        .then(data => {
            dispatch(anyAction(data[0].url));                            //operate on the result
        });



**Activity (20min)**

Pick any public api and make a http request to it.
