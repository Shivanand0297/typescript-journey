import { Sorter } from "./Sorter";

import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedListCollection";


const numberCollection = new NumberCollection([32, 0, 100, -23])
const charaterCollection = new CharacterCollection("Messi")
const linkedListCollection = new LinkedList()
linkedListCollection.add(23)
linkedListCollection.add(0)
linkedListCollection.add(-20)
linkedListCollection.add(50)

// const sorter = new Sorter(numberCollection);
// const sorter = new Sorter(charaterCollection);
// sorter.sort();
// console.log("Sorted number", numberCollection.data);
// console.log("Sorted number", charaterCollection.data);
const sorter = new Sorter(linkedListCollection)
sorter.sort();
linkedListCollection.print()
