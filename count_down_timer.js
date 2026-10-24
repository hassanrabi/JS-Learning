function countdownTimer(startNumber){
    while( startNumber >= 1){
        console.log("Count is: ", startNumber);
        startNumber--;
    } // The loop finishes here
    console.log("Blastoff!")
}
countdownTimer(15);