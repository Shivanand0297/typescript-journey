function createUser({ name: string, isPaid: boolean }) {
  //
}

createUser({ name: "shivanand", isPaid: true });

function createCourse({ name: string, price: number }): {
  name: string;
  price: number;
} {
  return { name: "reactjs", price: 200 };
  // return {}
}

createCourse({ name: "reactjs", price: 200 });

type User = {
  readonly _id: string  //cant be changed
  name: string;
  age: number;
  isActive: boolean
  creditCardDetail?: number // this property is optional
};

let myUser: User = {
  _id: "23234",
  name: "shiva",
  age: 23,
  isActive: false
}

// myUser._id = "32434"  //Cannot assign to '_id' because it is a read-only property.
myUser.isActive = true


type cardNumber = {
  cardNo: number
}

type cardName = {
  cardName: string
}

type cardDetails = cardName & cardNumber & {  // we can use different types to make a new one
  cvv: number
}

const cardDetail: cardDetails = {
  cardName: "shivanand",
  cardNo: 33123,
  cvv: 321
}

