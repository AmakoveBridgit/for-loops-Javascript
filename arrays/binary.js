//Given an array of numbers,and a target returns the 
//index if the target is found in the array else returns null
function binary(num,target){
    let left=0;
    let right=num.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (num[middle]===target){
        return middle;
    }
    else if(num[middle]<target){ 
        left=middle+1;
    }
    else{
        right=middle-1;
    }
    }
    
    return null
}
let num=[3,4,5,6,10,25,47,56]
let target=47;
console.log(binary(num,target))


function search(arr,target){
    let left=0
    let right=arr.length-1;
    while(left<=right){
        let middle=Math.floor((left+right/2))
        if(arr[middle]===target){
            return middle
        }
        else if(arr[middle]<target){
            left=middle+1
        }
        else{
            right=middle-1
        }
    }
    return null

}
let arr=[10,30,40,50,60]
let targetNum=50
console.log(search(arr,target))
``