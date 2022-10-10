//Function #1: Array Slice

/*   

        const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
        const modifiedFood = foods.slice(1,4);
        document.write(modifiedFood);
*/


// Function #2: Array Splice

/*

        const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];        
        foods.slice(2,"noodles","icecream")
        const modifiedFood =foods ;
        document.write(modifiedFood);


*/ 
  
//Function #3: Filter
//Function #4: Reject


/*
const numberArray = [12,324,213,4,2,3,45,4234];
const isEven =numberArray.filter(iseven);

function iseven(number)
{
    return number%2==0?true:false;
}
document.write(isEven);

document.write("<br>");

//Prime Number
const isPrime =numberArray.filter(number=>{
 for(var i=2;i<number;i++)
 {
     if(number%i==0) return false;
 }
     return true;
});
document.write(isPrime);

document.write("<br>");


//Function #4: Reject
//non-Prime Number
const non_Prime = numberArray.filter(number=>{
    for(var i=2;i<number;i++){
        if(number%i==0) return true;
    }
    return false;
});
document.write(non_Prime);

// document.write("<br>");
// function nonPrime(isPrime) {
//   console.error(isPrime);
// }

// Promise.reject(new Error('fail')).then( nonPrime);

*/


//Function #5: Lambda

/*
const numberArray = [12,324,213,4,2,3,45,4234];
const isEven = numberArray.filter(even=>even%2==0?true:false);
document.write(isEven);
*/

//Function #6: Map
/*
const myArray = [11, 34, 20, 5, 53, 16];

const squ =myArray.map(function findSquareOfNumbers(number){
    return number*number;
});
document.write(squ);
*/

//Function #7: Reduce

//method 1

const myArray = [2,3,5,10];
// const multiple = myArray.reduce((total,number)=>total*=number)
// document.write(multiple);

//method 2
var mul =myArray.reduce(multiple);
function multiple(total,number)
{
    return total*=number;
}
document.write(mul);
