class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log('Beep');
    }
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
    // numWheels(){
    //     console.log(4);
    // }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 2;
    }
    revEngine(){
        console.log("VROOM!!!");
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []; 
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
          }
          if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
          }
          this.vehicles.push(newVehicle);
          return "Vehicle added!";
    }
}

// class Garage extends Vehicle {
//     constructor(stalls, make, model, year){
//         // if(){
//         //     console.log("Only vehicles are allowed in here");
//         // }
//         super(make, model, year)
//         this.vehicles = [];
//         console.log(stalls);
//     }
//     add(make, model, year) {

//         console.log("Vehicle added!")
//     }
// }