let num=[24,true,"hello",38];
let num2=new Array(24,true,"hello",38);
console.log(num);
console.log(num2);
num.push("fruits");//add element at the end of array
console.log(num);
num.unshift(3);
num.pop();
console.log(num);
num.shift();//takes off first element of an array
console.log(num);
//given an array of numbers x return an array even where every item is multiplied by 5
//Declare array x
let x=[5,8,2,87,33,67]
let even =x.map(function(item){
    return item*5
})
console.log(even);

let result=[];
x.forEach (function(item){
   result.push(item*5);
})
console.log(result);

let newArray=num.concat(x);
console.log(newArray);

let tests=["Angela",...x,...num];//spread operator ...
console.log(tests);

let[a,b,...c]=x;
console.log((a));
console.log((b));
console.log((c));

