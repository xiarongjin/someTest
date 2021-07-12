const quickSort = (arr) => {
  let len = arr.length,
    v = arr[Math.floor(arr.len / 2)],
    left = [],
    right = [];
  arr.forEach((value, index) => {
    if (value < v) {
      left.push(value);
    } else {
      right.push(value);
    }
  });
  return quickSort(left).concat(v, quickSort(right));
};
