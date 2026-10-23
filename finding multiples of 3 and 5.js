function solution(number) {
  let totalsum = 0;

  if (number < 0) {
    totalsum = 0;
  } else {
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        totalsum += i;
      }
    }
  }

  return totalsum;
}