# Doctor Lookup

#### By Andy Grossberg

## Description
An application to find a local doctor based on a user-entered ailment or a doctor's name. Not that it only looks up results for Portland, Oregon at this time.

## Rules

This is the code review project for week two of Javascript focused on API calls:

**Doctor Lookup**

Achoo! As we all know, everybody needs to see a doctor sometimes. But finding a doctor that provides the services you need nearby can be time consuming. To facilitate this, you have been asked to create a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue. Cool!

To provide the data you need for this application, Epicodus has partnered with one of the leading providers of medical data - the BetterDoctor API. You'll use the BetterDoctor API to retrieve this information. This is a live API by a Series A funded startup currently under active development, and used by industry heavy-hitters such as HealthNet to provide accurate medical data.

* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

**Objectives**

Code will be reviewed for the following objectives:

 1) Does the application correctly make an API call?
 2) Does the application correctly parse data from the API response?
 3) Does the application handle errors when the API call doesn't return a 200 OK status as well as return a message if the API returns no results?
 4) Did you follow all setup instructions, including storing your API key?
 5) Does the app separate user interface and business logic functionalities into different JavaScript files?
 6) Does the application correctly use webpack?
 7) Code and Git documentation follow best practices (setup instructions in README, .gitignore file discluding unnecessary content from repo, detailed well-formatted commit messages, etc.)
 8) Does the project demonstrate concepts covered this week? If prompted, are you able to discuss the flow of your code and the concepts behind it with an instructor using correct terminology?
 9) Is the app in a presentable, portfolio-quality state?
10) Is required functionality in place by the Friday deadline?

## Specifications

* Create a Doctor Lookup object called Doctorlookup
  - Constructor should take a city name (NOTE: permanently set to Portland for now)

* See if object exists by making an instance
  - EXPECTED INPUT: Portland
  - EXPECTED OUTPUT: None.

* Create a method to return a string to the object
  - Method should take a symptom and a name (either can be blank)
  - EXPECTED INPUT: Portland
  - EXPECTED OUTPUT: None.

* See if assigning a value to a property changes the value assigned at construction
  - EXPECTED INPUT: "Seattle"
  - EXPECTED OUTPUT: (to console) "new city = Seattle".

* Make an API call with a promise and display results to console.log inside the method getAnswers(symptom, doctor)
  - EXPECTED INPUT: "", ""
  - EXPECTED OUTPUT: JSON response or error or nothing

* Parse the API call response
  - EXPECTED INPUT: "", ""
  - EXPECTED OUTPUT: JSON response or error or nothing

* Make the API call inside the method getAnswers(query) using the passed argument of a symptom or doctor
  - EXPECTED INPUT: "sore throat" or "smith"
  - EXPECTED OUTPUT: JSON response or error or nothing

* Return appropriate message for an error
  - EXPECTED INPUT: invalid URL
  - EXPECTED OUTPUT: 401 or 404 message

* Trap for no results and return an appropriate message
  - EXPECTED INPUT: invalid URL
  - EXPECTED OUTPUT: (nothing)

* Parse API call's returned JSON for information in specs above

* Add a UI as index.html
  - Make a form to enter ailment and name.
    * require all answers
    * the planet is a select menu
  - Make a Div for Results of the search:
    * first name
    * last name
    * address
    * phone number
    * website
    * whether or not the doctor is accepting new patients
    -or-
    * "No doctors meet your search criteria"
    -or-
    * Any resulting error message

* Refactor code as needed.

## Methodology

After a long process of thinking it through I began by testing some code examples from my previous projects to test separating the Business and Display logic. I knew the calls and forms in those projects worked so all I had to check was that the new object (I had been exporting functions) was correctly created and the method could be called. After this, I am spending my time breaking the program into discrete tasks and getting each one to work. After that it is just a matter or formatting the HTML.

## Technologies Used

* HTML
* CSS
* Javascript
* Node

## Dependencies and plugins

**Dependencies**
* Webpack 4.0.1 (as my module bundler)
* Jasmine (for tests)
* Karma (for test running)
* ESLint (for linting my code, looking for dropped semi-colons and whatnot)
* Babel (to transpile my code)

**Dev Dependencies**
* Webpack 4.0.1
* Webpack-cli 2.0.9
* Bootstrap 4.0.0
* jQuery 3.3.1
* Popper.js 1.14.0

**Plugins**
* UglifyJsPlugin
* CleanWebpackPlugin
* Dotenv
* HtmlWebpackPlugin

## Setup/Installation Requirements
* Download the project from the repository https://github.com/agro23/doctorlookup
* Install and initialize (init -y) Node (if it isn't already)
* Navigate to your root project directory
* Type "npm init" and run through the package.json file filling in details as needed
* Type "npm install"
* Navigate to node_modules/.bin/ and type "jasmine init"
* Navigate back to the project's root directory
* Get an API key from https://developer.betterdoctor.com/ (You will have to sign up to get one)
* Type "npm install dotenv-webpack --save-dev" to process environment variables (if you don't have Dotenv installed).
* Create a .env file with "exports.apiKey = " and then put your API key after it.
* To build the project type "npm run build"
* Point your browser at the index.html file in the dist folder

## Future expansion
Adding more cities besides Portland seems like a logical next step. I could ask the user for their location in a text field or even have them find themselves on Google Maps. Also, I'd like to figure out arrow notation with objects!

## Known Bugs and Issues

There are no known bugs at this time.

## Support and contact details

**Contact the author at andy.grossberg@gmail.com**

### License

Copyright (c) 2018 Andy Grossberg

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
