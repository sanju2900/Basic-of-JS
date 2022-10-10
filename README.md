# Basic-of-JS
Some basic question of JS 


Function #1: Array Slice
Take an example array. We will be using the below array for reference.

const foods = [pizza, burger, fingerChips, donuts, springRoll];

Create a new array named as modifiedFood and also create a slice() method.The slice() method should return the selected elements in an array, as a new array object. This method starts slicing the array from the given start argument and ends the slicing operation one element before the given second argument.

Expected output: [burger, fingerShips, donuts]
Function #2: Array Splice
The splice() method adds/removes items to/from an array, and returns the removed item(s).

Take an example array. Create a new array named as modifiedFood and use splice() to get the below expected output. Elements are added to the original array.

const foods = [pizza, burger, fingerShips, donuts, springRoll];

Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];
Function #3: Filter
Filter is an array method. It accepts a test function as an argument and returns a new array with only the elements for which the test function returns true.

Now, create a function isEven() which takes numberArray as argument and returns all even numbers from the given array.

Take numberArray as

const numberArray = [12,324,213,4,2,3,45,4234];
Next, let's build on top of this. Create another functon called isPrime() with takes same numberArray as argument and returns all prime numbers from the above given array.

Function #4: Reject
We can now reuse the isPrime() function in conjunction with reject to get all the non-prime numbers in the array. The reject function does the opposite of the filter function. It returns an array with all the elements that do not satisfy the condition. Kindly note that there is no reject method in javascript arrays like filters. So you need to define a new function and make it work like reject.

Create a function nonPrime() which takes numberArray as argument and return all non-prime numbers from the above given array in Function #3.

Function #5: Lambda
When defining short functions, it's convenient to use an alternative syntax called lambda function that allows us to define anonymous functions in a more compact way: ( /arguments/ ) => { /code/ }. If our function is only a return statement, we can even strip the curly brackets and avoid writing return: ( /arguments/ ) => /value to return/.

Now, rewrite the function isEven() by using the concept of Lambda Function.

Function #6: Map
Another very useful higher order function is map. It takes a function and applies it to all the elements of an array. The syntax is identical to filter.

Now, create a function findSquareOfNumbers() which takes the following array called myArray as argument and returns square value of all elements in the given array.

const myArray = [11, 34, 20, 5, 53, 16];
Function #7: Reduce
Reduce is the last higher order function we are going to discuss and it's also the most powerful one. In fact, you can implement any list transformation operation with reduce.

Reduce takes a callback function and a starting value. The callback function takes as arguments an accumulator and the value of the current element of the array and returns the accumulator to be used in the next cycle. The values returned from the last call of the callback function is the value returned by reduce.

Create a function multiply() which takes an argument of myArray which holds the values as [2, 3, 5, 10] and returns multiplication value of all numbers in the given array.

Let's expand our knowledge by implementing map with reduce.

Take the function explained in the above task of map and try is by implementing the same by using reduce.
