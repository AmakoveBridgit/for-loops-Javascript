let partyPeople=()=> {
    console.log("I am showering");
}
let partyDriver=() => {
    console.log("You will find us when you are ready");
};
partyDriver();
setTimeout(partyPeople,3000)
setInterval(partyDriver,2000)

let students=()=>{
    console.log('We are studying');
}
let workers=()=>{
console.log('We want to clean');
}
students();
setTimeout(students,2000)
setInterval(workers,3000)

