
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// Basic inheritance of class and mehtod overriding
/////////// class - has fields and methods
///////// Modifier apply to methods and fields in the same way
/*
class Vehicle {
    drive(): void{
        console.log("Driving a car, inside Vehicle class");   
    }
    honk(): void {
        console.log("Beep");
    }
}


class Car extends Vehicle{

    // Overriding drive() method
    drive(): void {
        console.log("Driving a car, inside Car class")
    }
}

const vehicle = new Vehicle();
vehicle.drive();

const car = new Car();
car.drive()
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////// Modifier of class and mehtod overriding.

///// Three types of modifier
////  1) public -  default, method/field is accessible anywhere.
////  2) private - method is called by other method in this(same) class. Method can not even call by
               //  the instance of this(same) class. Private method can not be override.
////  3) protected - Method only called by the other method in this(same) class and other mehod of the child class.
                 //  Method can not even call by the instance of this(same) class
            

 /*
    class Vehicle {
         protected drive(): void{
               console.log("Driving a car, inside Vehicle class");   
           }
         private honk(): void {
              console.log("Beep");
          }
        }

     class Car extends Vehicle{
        // honk(): void {   ///// Can not override private method
        //     console.log("beep inside car class")
        // }
         // Overriding drive() method
         drive(): void {
           console.log("Driving a car, inside Car class")
         }
      }
                
     const vehicle = new Vehicle();
        // vehicle.drive(); // Not accessible because protected in parent class.
        // vehicle.honk();  // Only accessible by the method of this(same) class
                
     const car = new Car();
        car.drive()

*/


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// Fields and constructor
//////////////////

class Vehicle {

    // color: string = "red";  // declare and initialize a field
    // color: string ;  // initialize field
    // constructor(color: string){
    //    this.color = color;
    // }
    // Same as above three lines
    constructor(public color: string){
    }
    protected honk(): void {
         console.log(`Beep Vehicle(parent class) : ${this.color}`);
     }
   }

   class Car extends Vehicle{
    constructor(public wheels: number, color: string){
        super(color)
    }

    private drive(): void{
        console.log(`Vroom Car(derive class) : ${this.color}`);
     }

     startDrivingProcess(): void{
        this.drive();
        this.honk();
     }

   }

   // const vehicle = new Vehicle("black");
   // console.log(vehicle.color)

   const car = new Car(5, "green");
   car.startDrivingProcess()
