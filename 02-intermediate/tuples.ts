let User: [number, string, boolean] // values must present in this order

User = [1223, "shiva", true]

User.push("shi")  //must not allowed this type of array operations

let rgb: [number, number, number]
rgb = [255, 255, 323]
rgb[0] = "255"

type Admin = [number, string] //no of elements must be 2 only, but there is some issue in tuples

let userAdmin: Admin = [12, "shiva"]

userAdmin[1] = "akash"
userAdmin.push("true")
userAdmin.push(true)  //must not allowed
