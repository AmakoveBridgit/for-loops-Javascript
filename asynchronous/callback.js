function add(num,callback){
    console.log(num);
    callback(num)
}
function nums(a){
    console.log(a+30);
}
add(12,nums)