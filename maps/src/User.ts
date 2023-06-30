import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lng: number;
    lat: number;
  };
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
