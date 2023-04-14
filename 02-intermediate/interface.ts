interface User {
  readonly dbId: number
  email: string
  userId: number
  googleId?: string
  startTrail(): string
  getCoupon(couponName: string, value: number): number
}

interface Admin extends User {  //interface can be inherited
  role: "admin" | "learner"
}

const shivanand: Admin = {
  dbId: 123,
  email: "shia",
  userId: 234,
  role: "admin",
  startTrail() {
    return "trail started"
  },
  getCoupon(name: "early bird", value: 223){
    return 232
  }
}

shivanand.email = "adasd"
// shivanand.dbId = 34