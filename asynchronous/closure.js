let add= ()=> {
    let num=20
    console.log({num});
    let subtract=() =>{
        
        return 30-num
    }
    return subtract
}
let nums=add();
console.log({nums});
console.log(nums());

let addition =(nums) =>{
    let substraction =(numb) =>{
        return nums-numb
    }
    return substraction
}
let numberss=addition(50)
console.log(numberss(10));

let substraction=(nums)=>{
    let subtract=(numb)=>{
        return nums-numb
    }
}

