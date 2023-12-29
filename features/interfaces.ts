/*
interface Vehicle {
    name: String;
    year: Date;
    broken: boolean;
    summary(): string; // function will return string, and will not get any argument
}

const oldCivic = {
    name : "civic",
    year: new Date(),
    broken: true,
    
    summary() : string {
     return `Name : ${this.name}
Manufacturing year is: ${this.year} 
Is broken: ${this.broken}   
            `;
    },
  
}

// const printVehicle = (vehicle : {name: string, year: number, broken: boolean}): void => {
const printVehicle = (vehicle: Vehicle): void => {
    // console.log(`name is: ${vehicle.name}`);
    // console.log(`Manufacturing year is: ${vehicle.year}`);
    // console.log(`Is broken: ${vehicle.broken}`);
    console.log(vehicle.summary());
}

printVehicle(oldCivic)

*/

// After refactoring the code

interface Reportable {
    // name: String;
    // year: Date;
    // broken: boolean;
    summary(): string; // function will return string, and will not get any argument
}

const oldCivic = {
    name : "civic",
    year: new Date(),
    broken: true,
    summary() : string {
     return `Name : ${this.name}
Manufacturing year is: ${this.year} 
Is broken: ${this.broken}   
            `;
    },
}

const drink = {
    color: "brown",
    corbonated : true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar} gram of sugar`
    }
}

// const printVehicle = (vehicle : {name: string, year: number, broken: boolean}): void => {
const printSummary = (item: Reportable): void => {
    // console.log(`name is: ${vehicle.name}`);
    // console.log(`Manufacturing year is: ${vehicle.year}`);
    // console.log(`Is broken: ${vehicle.broken}`);
    console.log(item.summary());
}

printSummary(oldCivic)
printSummary(drink)
