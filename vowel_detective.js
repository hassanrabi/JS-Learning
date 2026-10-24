function detectVowels(string) {
  let lowerString = string.toLowerCase();
  let vowelCount = 0;
  
  for (let i = 0; i < lowerString.length; i++) {
    let char = lowerString[i];
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      vowelCount++;
    }
  }
  
  return `Number of vowels in your word is: ${vowelCount}`;
}

console.log(detectVowels("Hassan"));
