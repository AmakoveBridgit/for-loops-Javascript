function divideArray(num){
    if(num.length<=1){
        return num;

    }
    let middle=Math.floor(num.length/2);
    let left =num.slice(0,middle);
    let right=num.slice(middle);
    return sortedArray(divideArray(left) ,divideArray(right));
}
function sortedArray(left,right){
    let emptyArray =[];
    while(left .length && right.length){
        if (left[0]<right[0]){
        emptyArray.push(left.shift())    
    }
    else{
        emptyArray.push(right.shift())

    }
  
}
return[...emptyArray,...left,...right]
}
let num=[10,2,56,3,8,4,11];
console.log(divideArray(num));

function divArr(arr){
    if(arr.length<=1){
        return arr
    }
    let middle=Math.floor(arr.length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return sortArr(divArr(left),divArr(right))
}
function sortArr(left,right){
    let newArr=[]
    while(left.length && right.length){
        
        if(left[0]<right[0]){
            newArr.push(left.shift())
        }
        else{
            newArr.push(right.shift())
        }
    }
    return[...newArr,...left,...right]
}
let arr=[3,4,5,8,10,5]
console.log(divArr(arr))