// This is the program that shows # for full battery bars and . for null battery bars 
function batteryBars(percent) {
    // your code here
    let litBars = Math.floor(percent / 20);
    let emptyBars = 5 - litBars;
    let litStrings = "#".repeat(litBars);
    let emptyStrings = ".".repeat(emptyBars);
    return "[" + litStrings + emptyStrings + "]";
}