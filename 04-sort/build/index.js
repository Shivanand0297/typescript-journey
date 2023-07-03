"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const length = this.collection.length;
        // sorting for numbers array
        if (this.collection instanceof Array) {
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        let temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }
        if (typeof this.collection === "string") {
            // sorting for string 
        }
    }
}
const sorter = new Sorter([32, -2, 0, 77]);
sorter.sort();
console.log(sorter.collection);
