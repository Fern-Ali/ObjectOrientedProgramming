// JavaScript source code

// object orientation challenge




class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}!`;
    }
    honk() {
        return "Beep!";
    }
}
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
    
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
        
    }
    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (newVehicle instanceof Vehicle == false) {
            return "Vehicles only!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "no more room!";
        }
        
        this.vehicles.push(newVehicle);
        return "Vehicle parked!"
    }
    

}
