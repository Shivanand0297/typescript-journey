import { faker } from "@faker-js/faker";
import { Mappable } from "./OurMap";

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = "red";

  constructor() {
    this.name = faker.company.name()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    }
  }
  markerContent() {
    return `
      <div>
        <h1>Name: ${this.name}</h1>
        <h3>Catch Phrase: ${this.catchPhrase}</h3>
      </div>
    `
  }
}