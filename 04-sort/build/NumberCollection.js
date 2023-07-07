"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumberCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        let temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}
exports.NumberCollection = NumberCollection;
// const numberCollection = new NumberCollection([12, 1, 3, -4, 0, 23])
// numberCollection.length;
