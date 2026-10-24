//             THE FACTORIAL CALCULATOR!
function calculateFactorial(n){
    let factorialNumber = 1;
    for(let i = 1; i <= n; i++){
        factorialNumber *= i;
    }
    if(n === 0){
        factorialNumber = 1;
    }
    console.log(`Factorial of your number is: ${factorialNumber}`)
}
calculateFactorial(5);