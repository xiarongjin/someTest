var hIndex = function (citations) {
  let sum = 0;
  let sums = 0;

  for (let i = citations.length - 1; i >= 0; i--) {
    sum++;
    if (sum <= citations[i]) {
      sums = sum;
    }
  }
  return sums;
};

console.log(hIndex([0, 0]));
