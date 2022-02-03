//Mular dam
// for first 2kg - 30 tk per kg
// for more than 2kg - 25tk per kg
//Write a function to calculate total price based on given quantity. + handle errors.


function mularDam(quantity){
  if(typeof quantity != "number"){
      return " please enter a valid quantity";
  }
  if(quantity <= 0){
      return "Plese enter a valid quantity";
  }
    let price;
    if(quantity <= 2){
        price = quantity * 30;    
    }
    else{
        price = quantity * 25;
    }
    return price;
}
console.log(mularDam(1.5))