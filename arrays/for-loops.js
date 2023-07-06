let num=[3,5,10,8,6]
for(let i=0; i<num.length; i++){
    console.log(i);
    console.log(num[i]);//for loop
}
for(let i=0; i<num.length; i++){
    console.log("option1",num[i]);
    if(i===2){
        break;
        // console.log("option2",num[i]);
    }
    console.log("option3",num[i]);
}
for(let i=0; i<num.length; i++){
    // console.log("option1",num[i]);
    if(i===3){
        continue;
    }
    console.log("continue",num[i]);
}

let ar=[10,20,30,40,50]
for(let x=0; x<ar.length;x++){
    console.log(x) 
    console.log(ar[x])
    
    
}
let array=[10,20,30,40,50]
for (let r=0;r<array.length;r++){
    console.log(r)
    // console.log(array[r])
}

