import { faker } from "@faker-js/faker";
import { Mappable } from "./OurMap";

export class User implements Mappable {
  name: string;
  location: {
    lng: number;
    lat: number;
  };
  color: string = "black";
  constructor() {
    this.name = faker.person.fullName({ sex: "male" });
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  markerContent() {
    return this.name;
  }
}
