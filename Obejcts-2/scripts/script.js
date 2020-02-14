function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "move.inc";
    this.printVehicle = () => console.log(`${this.id}, ${this.name}, ${this.batchNo}, ${this.price}`);
}

let vehicle = new Vehicle (
    1,
    'Zastava',
    128,
    200
)
    
function WheeledVehicle (id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.fuelTank = 32;
    this.drive = () => console.log("Brm brm");
    this.company = "move.inc";
    this.printVehicle = () => console.log(`${this.id}, ${this.name}, ${this.batchNo}, ${this.price}`);
}

function AirVehicle (id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.fuelTank = 32;
    this.drive = () => console.log("Brm brm");
    this.fly = () => console.log("I am flying");
    this.company = "move.inc";
    this.printVehicle = () => console.log(`${this.id}, ${this.name}, ${this.batchNo}, ${this.price}`);
}