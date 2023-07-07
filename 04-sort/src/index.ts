import { Sorter } from "./Sorter";

import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedListCollection";

const numberCollection = new NumberCollection([32, 0, 100, -23]);
const charaterCollection = new CharacterCollection("Messi");
const linkedListCollection = new LinkedList();

numberCollection.sort();
charaterCollection.sort();
console.log(numberCollection.data);
console.log(charaterCollection.data);

linkedListCollection.add(23);
linkedListCollection.add(0);
linkedListCollection.add(-20);
linkedListCollection.add(50);

linkedListCollection.sort();  
linkedListCollection.print();
