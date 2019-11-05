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

//  let result= 0;
//   function SimpleAdding(num){
// for(i=0;i<num;i++)
// result= i+result
// return result 




//   }


// // -----------------------------------------------------------------


// Q8 
// Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive integer weights on a balance scale (left and right sides) and the second element being a list of available weights as positive integers. Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a comma separated string of the weights that were used from the list in ascending order, so for this example your program should return the string 2,6 

// There will only ever be one unique solution and the list of available weights will not be empty. It is also possible to add two weights to only one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string not possible. 




function ScaleBalancing(strArr){

let fisrtindex=strArr[0]
let secindex=strArr[1]
fisrt=JSON.parse(fisrtindex)
sec=JSON.parse(secindex)
// console.log(fisrt[1])
let diff=Math.abs(fisrt[0]-fisrt[1])

let result=sec.includes(diff)
// console.log(result)
if(result===true)
// console.log( diff)
return diff;
else 
{
 let y=""
for(i=0;i<sec.length;i++)
{
for(z=0;z<sec.length;z++)
{
  if(i!==z)
  {
  if(sec[i]+sec[z]===diff)

  {y=sec[i]+","+sec[z]}

  }
}

}
if(y.length >0)
// console.log(y)
return y;

else
{
array1=[]
array2=[]
result2=[]
for(i=0;i<sec.length;i++)
{
array1.push(fisrt[0]+sec[i])
array2.push(fisrt[1]+sec[i])
// console.log(hala1)
// console.log(hala2)
}
for(i=0;i<array1.length;i++)
{
  for(z=0;z<array1.length;z++)
  {
  if(array1[i]===array2[z])
  {result2.push(i)
    result2.push(z)
  }
 
  }
}
// console.log(result2)
let finalresult=[]
finalresult.push(sec[result2[0]])
finalresult.push(sec[result2[1]])
// console.log(sec[result2[0]])
// console.log(sec[result2[1]])
if(finalresult.length>0)
return finalresult
}

if(result2.length===0)
return "not found"

}


}

 ScaleBalancing( ["[5, 9]", "[1, 2, 6, 7]"]  )



































