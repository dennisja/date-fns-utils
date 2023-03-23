# date-fns-utils

A collections of utils to work with date functions.

## Installation

Install by running `npm i date-fns-utils` for npm or `yarn add date-fns-utils` for yarn or `pnpm add date-fns-utils`

## Available utils

### dateToUTCTimestamp => Returns the UTC timestamp of the date

```js
import { dateToUTCTimestamp } from "date-fns-utils";

const date = new Date(2023, 11, 31, 0, 0, 0); // 1703977200000 with UTC + 1
console.log(dateToUTCTimestamp(date)); // 1703980800000 the UTC equivalent
```

### dateToUTCString => Returns the UTC equivalent of a date

```js
import { dateToUTCString } from "date-fns-utils";

const date = new Date(2023, 11, 31, 0, 0, 0); // 2023-12-30T23:00:00.000Z
console.log(dateToUTCString(date)); // Sun, 31 Dec 2023 00:00:00 GMT
```

### daysInAMonth => Returns the number of days in a particular month

```js
import { daysInMonth } from "date-fns-utils";

const date = new Date(2023, 10, 16, 0, 0, 0); // 2023-11-16T23:00:00.000Z
console.log(daysInMonth(date)); // 31 days in October
```
