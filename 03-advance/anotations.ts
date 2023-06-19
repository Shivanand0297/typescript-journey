const sum1: (a: number, b: number) => number = (a: number, b: number) => {
  console.log("sum1 is", a + b);
  return a + b;
};

sum1(1, 2);

const sum2 = (a: number, b: number): number => {
  console.log("sum2 is", a + b);
  return a + b;
};

sum2(1, 2);

const sum3 = (a: number, b: number) => {
  console.log("sum3 is", a + b);
  return a + b;
};

sum3(1, 2);

interface Vehicle {
  model: string;
  year: Date;
  summary(): string;
}

const tyota: Vehicle = {
  model: "200v",
  year: new Date(),
  summary(): string {
    return this.model;
  },
};

const printVehicle = (vehicle: Vehicle) => {
  return vehicle.summary();
};

console.log(printVehicle(tyota)) 