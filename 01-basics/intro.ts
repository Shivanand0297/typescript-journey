const user = {
  name: "Shivanand",
  age: 25
}

console.log(user.name)

let greetings: string = "hii"
// let greetings1: String = "hii" // we can also use capital String but string is encouraged

//greetings = 4 //Type 'number' is not assignable to type 'string'

/**@Type_inference */
// it will automatically infer the type based on the value assigned.

// let myNumber: number = 4
let myNumber = 4  // specifying the type is optional when we are initialising the variable during the declaration

myNumber.toExponential()  // will automatically suggest the method

/**@any keyword */

let temp
let temp2: string
function result (){
  return "srting"
}

temp = result() //temp is any in this case
temp2 = result()  //temp is string in this case