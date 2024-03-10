//question 1 :==



/*Write a program to take two numbers from the user and determine the greater of those two given numbers.
 */




// const input = require("readline-sync");
// let a = input.questionInt("enter the first number:");
// let b = input.questionInt("enter the second number:");
// if(a>b){
//     console.log("  greater number",a);
// }else{
//     console.log(" greater number",b);
// }




//question 2 :==



/* Write a program to take a number from the user and print that number as Odd or Even.*/



// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// if(n%2==0){
//     console.log("even",n);
// }else{
//     console.log("odd",n);
// }




//question 3 :==




/*Write a program to take a number from the user and output whether that number is negative, positive or zero. */






// const input = require("readline-sync");
// let n = input.questionInt("enter the value:");
// if(n>0){
//     console.log("positive",n);
// }else if(n<0) {
//     console.log("negative",n);
    
// }else{
//     console.log("zero");
// }




//question 4 :==




/*Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.
 */



//  const input = require("readline-sync");
//  let b = input.questionInt("enter the number");
//  if(b%2!==0){
//     c = b*2;
    
//  console.log(c);}
//  else  {
//     console.log(b);
//  }





//question 5 :==




/*Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct */





// const input = require("readline-sync");
// let a = input.questionInt("enter the first number :");
// let b = input.questionInt("enter the second number :");
// let c = input.questionInt("enter the third number:");
// if (a>b && a>c) {
//     console.log("greater",a);
    
// } else if (b>a && b>c) {
//     console.log("greater",b);
// }else{
//     console.log("greater",c);
// }






//question 6 :==



/*Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct) */



// const input = require ('readline-sync');
// let a = input.questionInt("enter first number:");
// let b = input.questionInt("enter second number:");
// let c = input.questionInt("enter third number:");
// let d = input.questionInt("enter four number:");
// if(a>b && a>c && a>d) { 
//     console.log("a is grator ",a );
// } 
// else if(b>a && b>c && b>d )
// { 
//     console.log("b is grator ",b);
// } 
// else if ( c>a && c>b && c>d){ 
//     console.log(" c is grator ",c);
// }
// else  { 
//     console.log ("d is grator ",d);
// }






//question 7 :==






/* Write a program to take a year from the user and output whether a given year is a leap year or not.

Note: A year is said to be a leap year if it is either divisible by 400 or it should be divisible by 4 and not by 100.*/





// const input = require("readline-sync");
// let y = input.questionInt("Enter the value: ");

// if (y % 4 === 0) {
//     if (y % 100 !== 0 || (y % 400 === 0)) {
//         console.log("Leap year", y);
//     } else {
//         console.log("Not a leap year", y);
//     }
// } else {
//     console.log("Not a leap year", y);
// }






//question 8 :==




/*Write a program to take 3 numbers from the user and output the second max of 3 numbers.
(First, do it in the normal way then do it by using 3 comparisons)
 */




// const input = require ('readline-sync');
//  let a = input.questionInt("enter first number:");
// let b = input.questionInt("enter second number:");
// let c = input.questionInt("enter third number:");
 
// if(a>b)
// {
//     max=a;
//     min=b;
// }
// else{
//     max=b;
//     min=a
// }
// if(c>a)
// {
//     max1=c;
//     min1=a;
// }
// else{
//     max1=a;
//     min1=c;
// }
// if(max>max1)
// {
//     q=min1;
//     r=max;
// }
// else{
//      q=max1;
//      r=min;
// }
// if(q>r)
// {
//     console.log("second max:",q)
// }
// else{
//     console.log("second max:",r)
// }







// question 9 :==




/*Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%
 */




// const input = require("readline-sync");
// let bs = input.questionInt("enter the value");



// if(bs<=10000){
//    let  hra=20;
//    let da=80;
//     hra = bs*hra/100;
//     da = bs*da/100;
//     gs = bs+hra+da;

// }

// else if(bs<=20000){
//     let hra=25;
//     let da=90;
//     hra = bs*hra/100;
//     da = bs*da/100;
//     gs = bs+hra+da;
// }
//  else if(bs>20000){
//     let hra=30;
//     let da=95;
//     hra = bs*hra/100;
//     da = bs*da/100;
//     gs = bs+hra+da;
// }else {
//     let hra = 30;
//     let bs = 95;
  
//     hra = bs*hra/100;
//     da = bs*da/100;
//     gs = bs+hra+da;
// }console.log(gs);







//question 10:==





/*Write a program to input electricity unit charges and calculate the total electricity bill according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill
 */




// const input = require("readline-sync");
// let u = input.questionInt("Enter the value:");

// let t, s, b;

// if (u < 50)
//  {
//     t = u * 0.50;
//     s = t / 100 * 20;
//     b = t + s;

// }  else if (u <= 150)

// {
//     t = u - 50;
//     let o = t * 0.75;
//     let p = 50 * 0.50;
//     s = o + p;
//     let i = s / 100 * 20;
//     b = s + i;
// } 
// else if (u <= 250) 
// {
//     t = u - 150;
//     let o = t * 1.20;
//     let p = 50 * 0.50;
//     let m = 100 * 0.75;
//     s = o + p + m;
//     let i = s / 100 * 20;
//     b = s + i;
// } 
// else 
// {
//     t = u - 150;
//     let o = t * 1.20;
//     let p = 50 * 0.50;
//     let m = 100 * 0.75;
//     s = o + p + m;
//     let i = s / 100 * 20;
//     b = s + i;
// }

// console.log(b);







//question 11 :==


/*Write a program to take 4 numbers from the user and output the third max of these 4 numbers */



// const input = require ('readline-sync');
//  let a = input.questionInt("enter first number:");
// let b = input.questionInt("enter second number:");
// let c = input.questionInt("enter third number:");
//  let d = input.questionInt("enter four number:");
// if(a>b)
// {
//     max=a;
//     min=b;
// }
// else{
//     max=b;
//     min=a
// }
// if(c>d)
// {
//     max1=c;
//     min1=d;
// }
// else{
//     max1=d;
//     min1=c;
// }
// if(max>max1)
// {
//     q=max1;
//     r=min;
// }
// else{
//      q=min1;
//      r=max;
// }
// if(q>r)
// {
//     console.log("third max:",r)
// }
// else{
//     console.log("third max:",q)
// }





//question 12 :==





/*Write a program to take 8 numbers from the user and output the second max of these 8 numbers. (do this in 9 comparision) */





// const number= require("readline-sync");
// let a = number.questionInt("enter the 1 number: ");
// let b = number.questionInt("enter the 2 number: ");
// let c = number.questionInt("enter the 3 number: ");
// let d = number.questionInt("enter the 4 number: ");
// let e = number.questionInt("enter the 5 number: ");
// let f = number.questionInt("enter the 6 number: ");
// let g = number.questionInt("enter the 7 number: ");
// let h = number.questionInt("enter the 8 number: ");
// if (a>b){
//     l = a;
//     s = b;
// }else{
//     l = b;
//     s = a;
// }if(c>d){
//     l1 = c;
//     s1 = d;
// }else{
//     l1 = d;
//     s1 = c;
// }if(e>f){
//     l2 = e;
//     s2 = f
// }else{
//     l2 = f;
//     s2 = e;
// }if(g>h){
//      l3 = g;
//      s3 = h;
// }else{
//     l3 = h;
//     s3 = g;
// }if(l>l1){
//     l4 = l;
//     s4 = l1;
//     k = s;
// }
// else{
//     l4 = l1;
//     s4 = l;
//     k = s1;
// }if(l2>l3){
//     l5 = l2;
//     s5 = l3;
//     k1 = s2; 
// }else{
//     l5 = l3;
//     s5 = l2;
//     k1 = s3;
// }if(s4>s5){
//     l6 = s4;
//     s6 = s5;
// }else{
//     l6 = s5;
//     s6 = s4;
// }if(k>k1){
//     l7 = k;
//     s7 = k1;
// }else{
//     l7 = k1;
//     s7 = k;
// }if(l6>l7){
//     l8 = l6;
//     s8 = l7;

// }else{
//     l8 = l7;
//     s8 = l6;
// }console.log(l8);


