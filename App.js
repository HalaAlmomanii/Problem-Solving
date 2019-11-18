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




// function ScaleBalancing(strArr){

// let fisrtindex=strArr[0]
// let secindex=strArr[1]
// fisrt=JSON.parse(fisrtindex)
// sec=JSON.parse(secindex)

// let diff=Math.abs(fisrt[0]-fisrt[1])

// let result=sec.includes(diff)

// if(result===true)

// return diff;
// else 
// {
//  let y=""
// for(i=0;i<sec.length;i++)
// {
// for(z=0;z<sec.length;z++)
// {
//   if(i!==z)
//   {
//   if(sec[i]+sec[z]===diff)

//   {y=sec[i]+","+sec[z]}

//   }
// }

// }
// if(y.length >0)

// return y;

// else
// {
// array1=[]
// array2=[]
// result2=[]
// for(i=0;i<sec.length;i++)
// {
// array1.push(fisrt[0]+sec[i])
// array2.push(fisrt[1]+sec[i])

// }
// for(i=0;i<array1.length;i++)
// {
//   for(z=0;z<array1.length;z++)
//   {
//   if(array1[i]===array2[z])
//   {result2.push(i)
//     result2.push(z)
//   }
 
//   }
// }

// let finalresult=[]
// finalresult.push(sec[result2[0]])
// finalresult.push(sec[result2[1]])

// if(finalresult.length>0)
// return finalresult

// else
// return "Not_found"
// }



// }


// }

//  ScaleBalancing( ["[5, 9]", "[1, 2, 6, 7]"]  )




// // -----------------------------------------------------------------


// Q9
//  Alphabet Soup
//  Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 


// function AlphabetSoup(str) { 

//   var array = str.split("");
//   string=array.sort()
//   return string.toString();
 

// }
   
// console.log(AlphabetSoup("hala"))




// // -----------------------------------------------------------------


// Q10

//  Median of Two Sorted Arrays
// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.

// function MedianofTwoArrays(arr1,arr2) { 

//   let arr3= [...arr1,...arr2]
//   arr3.sort(function(a, b){return a - b});
  
//   return arr3.length %2!==0?arr3[parseInt(arr3.length/2)]:(arr3[parseInt(arr3.length/2)]+arr3[parseInt((arr3.length/2)+1)])/2
   
  
//   }
     
//   console.log(MedianofTwoArrays([1,2],[3, 4]))
  

// // -----------------------------------------------------------------


// Q11
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.


//  function intToRoman (num) {
//   let  result=""
//     let x=[
//     {name:'I',value:1},
//     {name:'IV',value:4},
//     {name:'V',value:5},
//     {name:'IX',value:9},
//     {name:'X',value:10},
//     {name:'XL',value:40},
//     {name:'L',value:50},
//     {name:'XC',value:90},
//     {name:'C',value:100},
//     {name:'CD',value:400},
//     {name:'D',value:500},
//     {name:'CM',value:900},
//     {name:'M',value:1000}
// ]
    
  
    

//     while(num>0)
//     {
//         for(i=0;i<x.length;i++)
//         {
//         if(num-x[i].value<0 && num<1000)
//        { 
//            num=num-x[i-1].value;
           
//         result=result+x[i-1].name
//         break
//        }
//        else if(num>=1000 && x[i].value===1000)
//        {
        
//            num=num-x[i].value;
//            result=result+x[i].name
          


//        }
      
   
//     }

//     }
//     return result

//  }
// console.log(intToRoman (1994))





// / // -----------------------------------------------------------------

// Q12  Two Sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// function twosum(nums, target) {
   
//    let  index=[]
  

//         for(i=0;i<nums.length;i++)
//         {
         



      
          
      
//                if(nums.includes(target-nums[i])&&nums[i]!==(target-nums[i]))
//               {
//                  index.push(i)
                 
//               }


//               else if(nums.includes(target-nums[i])&&nums[i]===(target-nums[i]))
//               {
//                 if( nums.indexOf(nums[i])!==i)
//                  {
                 
                   
//                     index.push(i) 
//                     index.push(nums.indexOf(nums[i])) 
                     
//                  }
                 
              
              

            

              
//         }
       
       
//     }

// return index

// }




// console.log(twosum([0,3,4,0], 0))




// / // -----------------------------------------------------------------

// Q13Palindrome Number


// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Example 1:
// Input: 121
// Output: true
// Example 2:
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// function isPalindrome (x) {
//   x=x+""
//   let result=""
//   let y=x.split('')
//      x=x.split('').reverse()
  
//      console.log(x)
//      console.log(y)
//      for(i=0;i<y.length;i++)
     
//      {  
//        if(x[i]!==y[i])
//        { result=false
       
//       return result}
//      }
//      return true 
      
     
     
//  };
// console.log(isPalindrome(1000021))



// / // -----------------------------------------------------------------

// Q14 Reverse Integer


// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


//   function reverse(x) {
    
//   let first=x
//    x=x.toString()
//   x= x.split('')
//  x= x.reverse()
//  x= x.join('')

//    if(first<0)
//     { let result=  parseInt(x) * Math.sign(-1) 
//        return (result <= 0x7fffffff && result >= -0x80000000) ? result : 0;}
  
//    else if(first>=0)
//       {  
//           let result=  parseInt(x)
//  return (result <= 0x7fffffff && result >= -0x80000000) ? result : 0
  
// };
// }

// console.log(reverse('123'))



// / // -----------------------------------------------------------------


// // Q15 Search Insert Position
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1

// function searchInsert(nums, target) {
//     let index
    
// for(i=0;i<nums.length;i++)
//     {
//         if(nums[i]===target)
//         return i
//     }
   
//     for(i=0;i<nums.length;i++)
//         {
//             if(target<nums[0])
//                 return 0
//             if(target>nums[i] && target<nums[i+1])
//                 return i+1
//             if(target>nums[nums.length-1])
//                 return nums.length
            
//         }
        
        
    
// }

// console.log(searchInsert([1,2,4],3)) 



// / // -----------------------------------------------------------------

// Q16. Longest Common Prefix


// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

//  function longestCommonPrefix(strs) {
  
    

//     let test
//     let chart=""
// let result=strs[0]
// let prefix=""

//     if(strs.length===1)
//         return strs[0]
   
//     if(strs.length===0)
//         return""
     
    
   
//    for(let i=0;i<result.length;i++)
//          {
//          for(let j=1;j<strs.length;j++)
        
//        {  
//            if(strs[j][i]===strs[0][i])
             
//                {  prefix=true
                
//                 test =i
               
//                 }

//      else
         
//         { prefix=false
//          break;
//         }
           
//        }
       
//             if(prefix===true )
//                 {
//                   if(chart.length<=1 &&test===result.length-1 &&strs[0].length>2)
//                      return ""
                  
//                     else
//                  chart=chart+strs[0][i]
//                 } 
           
             
//          }
//    if(chart.length===1 &&chart[0]!==result[0])
//        return ""
//    else
//      return chart   

// };
   
  




// console.log(longestCommonPrefix(["flower","flow","flight"])) 



// / // -----------------------------------------------------------------

// Q17 Divide Two Integers

// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
// Return the quotient after dividing dividend by divisor.
// The integer division should truncate toward zero.
// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3
// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2
// Note:
// Both dividend and divisor will be 32-bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows


//  function divide(dividend, divisor) {    
//     if(dividend===0)
//         return 0
  
//      if(dividend === -2147483648 && divisor === -1) return 2147483647;

//     if(dividend === -2147483648 && divisor === 1) return dividend;
  
//     let x=divisor
//     let y=dividend
 
    
// let count =0
// if(divisor<0)
//     divisor=divisor*-1
    
//     if(dividend<0)
//     dividend=dividend*-1
    
//     while(dividend!==0)
//         {
//             if(dividend-divisor>=0)
//               { 
//                   dividend=dividend-divisor
//             count++
//               }
//             else 
//                 break;
//         }
   

    
//         if(x<0 && y<0 || x>0 &&y>0)
//             {
//                 return count 
               
//             }
    
    
//     if(x<0 ||y<0)
       
// return count*-1

// };
// console.log(divide(10,3))


// / // -----------------------------------------------------------------
// Q18 First Missing Positive
// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:
// Input: [1,2,0]
// Output: 3
// Example 2:
// Input: [3,4,-1,1]
// Output: 2
// Example 3:
// Input: [7,8,9,11,12]
// Output: 1

//    function firstMissingPositive (nums) {

//     let x
    
//     let myarr=nums.sort(function(a, b){return a - b})
  
//     if(nums.length===0)
//         return 1
    
//     for(i=1;i<=myarr.length+1;i++)
//         {
//             if(myarr.includes(i))
//                 {
                    
//                 }
            
//                 else
//                  { x= i
//                  break ;
//                  }
                
//         }
//     return x

//    }