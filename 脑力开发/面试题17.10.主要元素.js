var majorityElement = function (nums = [1, 2, 5, 9, 5, 9, 5, 5, 5]) {
  let ta = new Map();
  nums.forEach((item) => {
    ta.set(item, (ta.get(item) || 0) + 1);
  });
  let ma = Array.from(ta);

  ma.sort((a, b) => b[1] - a[1]);

  return ma[0][1] > nums.length / 2 ? ma[0][0] : -1;
};
console.log(majorityElement());
