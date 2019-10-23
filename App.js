// Q1
// Have the function Checknums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1. 
// function Checknums(num1,num2) { 

//     if(num1>num2)
//     return "false"
//    else if (num1<num2)
//     return "true"
//      else if(num1===num2)
//     return -1


//     }


//     Checknums(1,2);            

// -----------------------------------------------------------------

// Q2
// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 
// function SimpleAdding(num) { 

//     let x=0
//     for(i=num;i>=0;i--)
//     {
//       x=x+i
//     }
//       return x; 

//     }
// -----------------------------------------------------------------
// Q3
// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
// function FirstFactorial(num) { 
//     let x=1
// for(i=num;i>=1;i--)
// {
//   x=x*i
// }
//   return x; 

// }

// -----------------------------------------------------------------
// Q4
// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 


// function TimeConvert(num) { 

//    
// if(num<60)
// return`0:${100*(num/100)}`

//   else
//   {
//    return ` ${parseInt(num/60)} :${num-(60*parseInt(num/60))}`
//   }


// } 
// -----------------------------------------------------------------

// Q5
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// function nextInLine(arr, item) {
//     arr.push(item)      
//       let x=arr[0]                                                 
//      arr.shift()
//      return x  
//    }





// // -----------------------------------------------------------------


// Q6
// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// function abTest(a, b) {

//     if(a<0||b<0)
//     return undefined
//     else 


//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//   }

// // -----------------------------------------------------------------




// Q7
// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. 
// function SimpleAdding(num) { 

 let result= 0;
  function SimpleAdding(num){
for(i=0;i<num;i++)
result= i+result
return result 




  }





























