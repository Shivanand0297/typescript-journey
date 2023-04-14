let price: number | string = 200  //union type (logical OR)

price = 300
price = "200"

type User = {
  name: string;
  age: number
}

type Admin = {
  Username: string;
  age: number
}

let shivanand: User | Admin = {
  name: "Shiva",
  age: 25
}

shivanand = {
  Username: "admin",
  age: 25
}

// shivanand can have both the types

// main usage is in functions

function getDbId(id: string | number){
  // id can be both string and number so we need to check the type of it before performing any operations
  if(typeof id === "string"){
    id.toLowerCase()
  }else{
    id.toFixed()
  }
}

// accepting both the values
getDbId(3)
getDbId("3")

// arrays

let data1: number[] = [1, 2, 3]
let data2: string[] = ["1", "2", "3"]
let data3: string[] | number[] = ["1", "2", "3"] || [1, 2, 3] //an array of strings or numbers
let data4: (string | number)[] = [1, 2, "3"]  // arrray of both numbers and strings

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "crew"  // only 3 types (aisle, middle, window) are allowed
