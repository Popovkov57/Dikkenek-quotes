# Dikkenek Quotes

A simple NodeJS based application to get random quotes from the film "Dikkenek".

## Tech stack
This application runs on NodeJS. You can get the latest build from the official website https://nodejs.org/en/.

## Installation
Follwing are the steps to install this application

1. Clone this repository from https://github.com/Popovkov57/Dikkenek-quotes. In the terminal/command prompt, `cd` to the desired directory and type
```
git clone git@github.com:Popovkov57/Dikkenek-quotes.git
```
2. `cd` into the `Dikkenek-quotes` which was cloned.
```
cd Dikkenek-quotes
```

3. Install necessary dependencies
```
npm install
```

## File Structure
The `Dikkenek-quotes` has an `src` directory which consists of three files

1. `dikkenek-quotes.json`: It contains `JSON` data of a list of quotes.
2. `index.js`: It defines methods to pick a random quote from `dikkenek-quotes.json`.
3. `index.test.js`: It contains unit tests for methods defined in `index.js`.

## Running the application
1. To run all the unit tests, we use `mocha`, a JS testing library. Type
```
./node_modules/mocha/bin/mocha src/index.test.js
```
to run all tests. The output should be
```
dikkenek-quotes
   all
     ✓ it should be an array of string
     ✓ it should contain `C’est excessivement énervant !`
   random
     ✓ should return a random item from dikkenk.all
     ✓ should return an array of random items if passed a number

 4 passing (8ms)
```

2. To use this library in your own app, you simply include the `index.js` and `dikkenek-quotes.json` file in working directory and `require` it in your file. Then you can use the methods defined in `index.js`.


## Build Information
[![Travis build](https://img.shields.io/travis/popovkov57/dikkenk-quotes.svg)]()

[![Codecov coverage](https://img.shields.io/codecov/c/github/popovkov57/dikkenk-quotes.svg)]()

[![Version](https://img.shields.io/npm/v/dikkenek-quotes.svg)]()

[![Download](https://img.shields.io/npm/dm/dikkenek-quotes.svg)]()

## License
[![MIT Licence](https://img.shields.io/npm/l/dikkenek-quotes.svg)]()
