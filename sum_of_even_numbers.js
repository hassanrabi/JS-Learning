function sumOfEvens(maxLimit) {
    let sum = 0;
    for (i = 0; i <= maxLimit; i++) {
        if (i % 2 === 0) {
            sum += 1;
        }

    }
    console.log("The sum of all Even numbers is: " + sum)
}
sumOfEvens(15);
