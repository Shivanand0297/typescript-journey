import { Sorter } from "./Sorter";

import { NumberCollection } from "./NumberCollection";


const numberCollection = new NumberCollection([32, 0, 100, -23])
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log("Sorted number", numberCollection.data);
