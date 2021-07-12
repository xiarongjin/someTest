const mountainArray = (arr) => {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    index = i;
    if (arr[i] > arr[i + 1]) {
      return i;
    }
  }
};

//二分
const mountainArray2 = (arr) => {
  let low = 0,
    high = arr.length - 1,
    ans = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[mid + 1]) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid - 1;
    }
  }
  return ans;
};
