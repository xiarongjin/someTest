var findUnsortedSubarray = function (nums) {
  const numsCopy = [...nums];
  nums.sort((a, b) => a - b);
  // console.log(numsCopy, nums);
  let before = 0,
    after = 0,
    len = numsCopy.length;
  let isBefore = true,
    isAfter = true;

  for (let i = 0; i < len; i++) {
    if (numsCopy[i] != nums[i]) {
      isBefore = false;
    }
    if (isBefore & (len - i - 1 != i)) {
      before++;
    }
    if (numsCopy[len - i - 1] != nums[len - i - 1]) {
      isAfter = false;
    }
    if (isAfter & (len - i - 1 != i)) {
      after++;
    }
    if ((len - i - 1 == i) & (nums[i] == numsCopy[i])) {
      before++;
    }
    if ((isAfter == isBefore) & (isBefore == false)) {
      console.log(before, after);
      return len - before - after;
    }
    if ((isAfter == true) & (isAfter == isBefore)) {
      return 0;
    }
  }
};
console.log(findUnsortedSubarray([0]));

// 输入：nums = [2,6,4,8,10,9,15]
// 输出：5
// 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
