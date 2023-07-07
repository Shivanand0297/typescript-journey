"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const charaters = this.data.split(""); // converting the string into array of charaters
        let leftHand = charaters[leftIndex];
        charaters[leftIndex] = charaters[rightIndex];
        charaters[rightIndex] = leftHand;
        this.data = charaters.join(""); // converting to a string
    }
}
exports.CharacterCollection = CharacterCollection;
