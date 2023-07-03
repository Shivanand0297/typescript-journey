"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumberCollection_1 = require("./NumberCollection");
const numberCollection = new NumberCollection_1.NumberCollection([32, 0, 100, -23]);
const sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log("Sorted number", numberCollection.data);
