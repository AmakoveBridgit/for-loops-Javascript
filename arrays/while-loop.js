let num=[3,5,10,30,8,6]
let i=0;
let sum=0;
let multiply=1
while(i<num.length){
    console.log(num[i]);//while loop
    sum+=num[i]
    multiply*=num[i]
     i++;
}
console.log({sum});
console.log({multiply});


const arr=[1,2,3]
arr.forEach(num=>num * 2)
console.log(arr)


let x="Hello"
x.length=3
console.log(x.length)