let car = {
  name: 'MG Hector',
  driveFunction: function() {
    console.log(`${this.name} is driving...`);
  },
  driveLambda: () => {
    console.log(`${this.name} is driving...`);
  }
};

//  We can assign the car object's drive function to a new variable.
//  If we do that, the 'this' used in the function will be the global object
//  since runtime provides it.
//  We can specifically bind the 'this' data-structure of this function to the object,
//  In that case, even if the function is called from an external variable,
//  the 'this' is still bound to the object. This is called as specifically providing the this argument

let externalFunctionVariable = car.driveFunction.bind(car);
externalFunctionVariable();

//  Please note that lambda will not bind to the provided this argument.
//  Nor does it have its own this
let externalLambdaVariable = car.driveLambda.bind(car);
externalLambdaVariable();
