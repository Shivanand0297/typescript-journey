import { Sorter } from "./Sorter";

import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";


const numberCollection = new NumberCollection([32, 0, 100, -23])
const charaterCollection = new CharacterCollection("Messi")
// const sorter = new Sorter(numberCollection);
const sorter = new Sorter(charaterCollection);
sorter.sort();
// console.log("Sorted number", numberCollection.data);
console.log("Sorted number", charaterCollection.data);
