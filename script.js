1; // let names = ["Alice", "Bob", "Charlie"];
// names.forEach(element => {
//     console.log(element)
// });

2; // let numbers = [1, 2, 3, 4, 5]
// let sum=0;
// numbers.forEach((element)=>{
//     sum +=element
// })

// console.log(sum);

3; // let nums = [10, 20, 30];
// const doubledNums = [];
// nums.forEach(num => doubledNums.push(num * 2));
// console.log(doubledNums); // [20, 40, 60]

4; // let words = ["apple", "banana", "cherry"];

// words.forEach((sumLenght,indexLenght)=>{
//   let result=words[indexLenght];
//   console.log(`${result} длина: ${result.length}`);
// })

5; // let numbers = [1, 2, 3, 4, 5, 6];
// let newArr=[];
// numbers.forEach((num,i)=>{
//    if(num % 2 ===0) newArr.push(num)
// });

let sum = [1, 2, 3];
let result = sum.map((num) => {
  return num * 2;
});
console.log(result);
