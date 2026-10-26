function narcissistic(value) {
    // Code me to return true or false 
    const numString = value.toString();
    const numDigit = numString.length;

    let sum = 0;
    for (let i = 0; i < numDigit; i++) {
        const char = numString[i];
        let powerResult = 1;
        for (let j = 0; j < numDigit; j++) {
            powerResult *= char;

        }
        // Adding powerResult to sum
        sum += powerResult;
    }
    return sum === value;
}
