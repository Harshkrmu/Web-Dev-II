// Q1. Pushing element using push() in an array

// let arr1=[1,2,3,4,5];
// arr1.push(6,7)
// console.log(arr1)

// Q2. using pop() on an array

// let arr2=[1,2,3,4,5],rem=arr2.pop();
// console.log(rem);
// console.log(arr2);

// Q3. Reversing an array using push() and pop()

// let arr=[1,2,3,4,5]
// let rev=[]
// while (arr.length > 0) rev.push(arr.pop())
// console.log(rev);

// Q4. seperate out positive integers from an array into another array

// let num=[1,2,-3,-5,6,-7,8,-34,54,-67];
// let pos=[];
// while (num.length>0){
//     let a=num.shift();
//     if (a > 0){
//         pos.push(a);
//     }
// }
// console.log(pos);

// Q5. Check if an array is palindrome or not

// 1st way-----

// let arr=[1,2,3,4,5,4,3,2,1]
// let pali='is palindrome'
// let left = 0
// let right = arr.length-1
// while (left<right){
//     if(arr[left]!==arr[right]){
//         pali='is not palindrome';
//         break;
//     }
//     left++
//     right--
// }
// console.log('arr',pali)\

// 2nd way-----

// let arr=[3,1,2,3,4,5,4,3,2,1,3]
// let pali='is palindrome'
// for (let i=0;i<Math.floor(arr.length/2);i++){
//     if(arr[i]!==arr[arr.length-1-i]){
//         pali='is not palindrome';
//         break;
//     }
// }
// console.log('arr',pali)

// Q6. Remove all different elements from an array.

// Q7. Split even and odd numbers form an array into different arrays.

// Q8. Move all zeroes of an array to its end