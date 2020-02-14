function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "move.inc";
    this.printVehicle = () => console.log(`${this.id}, ${this.name}, ${this.batchNo}, ${this.price}`);
}

// let vehicle = new Vehicle (
//     1,
//     'Zastava',
//     128,
//     200
// )

// let wheeledVehicle = Object.create(vehicle);
// wheeledVehicle.printVehicle();
// wheeledVehicle.fuelTank = 32;
// wheeledVehicle.drive = () => console.log("Brm brm");
// wheeledVehicle.drive();

// let airVehicle = Object.create(vehicle);
// airVehicle.fly = () => console.log("I am flying");
// airVehicle.fuelTank = 32;
// airVehicle.fly();
// airVehicle.printVehicle();
// console.log(airVehicle)

function WheeledVehicle (id, name, batch, price, wheels) {
    Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));
    this.wheels = wheels;
    this.drive = () => console.log(`Driving on ${this.wheels}`);
}


let wheeledVehicle = new WheeledVehicle(2, 'Honda', 33, 1000, 2);
// wheeledVehicle.prototype = Object.create(new Vehicle());

wheeledVehicle.printVehicle();
console.log(wheeledVehicle);
console.log(Object.getPrototypeOf(wheeledVehicle));

let vehicle = new wheeledVehicle.constructor(7, 'Yugo', 80 , 100);
console.log(vehicle)



// function AirVehicle (id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.fuelTank = 32;
//     this.drive = () => console.log("Brm brm");
//     this.fly = () => console.log("I am flying");
//     this.company = "move.inc";
//     this.printVehicle = () => console.log(`${this.id}, ${this.name}, ${this.batchNo}, ${this.price}`);
// }