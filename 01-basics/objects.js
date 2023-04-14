function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    //
}
createUser({ name: "shivanand", isPaid: true });
function createCourse(_a) {
    var string = _a.name, number = _a.price;
    return { name: "reactjs", price: 200 };
    // return {}
}
createCourse({ name: "reactjs", price: 200 });
var myUser = {
    _id: "23234",
    name: "shiva",
    age: 23,
    isActive: false
};
// myUser._id = "32434"  //Cannot assign to '_id' because it is a read-only property.
myUser.isActive = true;
