type User = {
  name: string;
  age: number;
}

function createUser(user: User): User{  //accepting the user of type User and returning the user of type User
  return {name: "", age: 2}
}


createUser({name: "shivanand", age: 25})