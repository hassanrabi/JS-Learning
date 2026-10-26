function getRamdomFirst() {
    let randomFirst = Math.random();
    if (randomFirst < 0.33) {
        return "Fire";
    } else if (randomFirst < 0.66) {
        return "Crazy";
    } else {
        return "Global";
    }
}
function getRandomMiddle() {
    let randomMiddle = Math.random();
    if (randomMiddle < 0.33) {
        return "Foods";
    } else if (randomMiddle < 0.66) {
        return "Garments";
    } else {
        return "Tech"
    }
}
function getRamdomLast() {
    let randomLast = Math.random();
    if (randomLast < 0.33) {
        return "Limited";
    } else if (randomLast < 0.66) {
        return "Bros";
    } else {
        return "LLC"
    }
}
function getRandomBusinessName() {
    let first = getRamdomFirst();
    let second = getRandomMiddle();
    let third = getRamdomLast();
    return `Generated Business Name is: ${first} ${second} ${third}`
}