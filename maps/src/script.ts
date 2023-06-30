import { User } from "./User"
import { Company } from "./Company"

import { OurMap } from "./OurMap";

const ourMap = new OurMap("map")

const user = new User()
const company = new Company()

// instead of adding color property in both the classes we can use if typescript implements keyword to make sure that the 
// instance of the user and company class had color property in it.
ourMap.addMarker(user) 
ourMap.addMarker(company) 