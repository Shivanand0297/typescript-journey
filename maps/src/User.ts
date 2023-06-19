import {faker} from "@faker-js/faker"

export class User {
  name: string;
  location: {
    long: number;
    lat: number;
  };
  constructor () {
    this.name = faker.person.fullName({sex: "male"})
    this.location = {
      lat: faker.location.latitude(),
      long: faker.location.longitude()
    }
  }
}
