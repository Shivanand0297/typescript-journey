import { User } from "./User"
import { Company } from "./Company"

import { OurMap } from "./OurMap";

const ourMap = new OurMap("map")

const user = new User()
const company = new Company()

ourMap.addMarker(user)
ourMap.addMarker(company)