var addTwoNumbers = function (l1, l2) {
  let sum = [];
  let isCarry = false;
  let length1 = l1.length;
  let length2 = l2.length;
  for (let i = 0; i < (length1 > length2 ? length1 : length2); i++) {
    sum[i] = (l1[i] + l2[i] + (isCarry ? 1 : 0)) % 10;
    if (l1[i] + l2[i] >= 10) {
      isCarry = true;
    } else {
      isCarry = false;
    }
  }
  return isCarry ? sum.concat([1]) : sum;
};
console.log(addTwoNumbers([9, 9, 9], [9, 9, 9]));
