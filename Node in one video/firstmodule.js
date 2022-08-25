
/// CommonJS Module

// const session = require('./secondmodule')



/// ES6 Module

// import {worldCup, simple} from './secondmodule.mjs'
// simple();
// worldCup();

import * as secondmodule from './secondmodule.mjs'

console.log(secondmodule.worldCup());

