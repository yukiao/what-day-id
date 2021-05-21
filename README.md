# what-day-id

![npm](https://img.shields.io/npm/v/what-day-id)
![npm bundle size](https://img.shields.io/bundlephobia/min/what-day-id)

A simple javascript library to convert time to Indonesian date format

## Installation

Using npm

```
$ npm install what-day-id
```

Using yarn

```
$ yarn add what-day-id
```

## Example

```js
const whatDayId = require("what-day-id");

const now = new Date();

// Take a Date object as an argument. Return a string of Indonesian date format
const date = whatDayId(now);

console.log(date);
// Jumat, 21 Mei 2021
```
