let a=20;//global variable which means can ba accessed by anyone
function add(b){
  console.log(a+b);
  let fruit="Apple"  //local variable cannot be accessible outside the function.
  console.log(fruit)
}
add(50)

function greet(){
    let hello="hi";
    function talk(){
        let c="hello there"
        console.log(`${hello} ${c}`)
    }
    talk()

}
greet()

