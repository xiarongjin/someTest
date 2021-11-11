/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  let [tree, row] = getTree(label);
  let ta = [];
  let key = getkey(label, tree, row);
  ta.push(label);
  row = row - 1;
  while (row > 1) {
    key = parseInt(key / 2);
    let arr = tree.get(row - 1);
    ta.push(arr[key]);
    row--;
  }

  return ta.reverse();
};

function getkey(label, tree, row) {
  let arr = tree.get(row - 1);
  let key;
  for (let i in arr) {
    if (arr[i] == label) {
      key = i;
      break;
    }
  }
  return key;
}
function get(n) {
  let dp = [];
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = 2 * dp[i - 1];
  }
  return dp[n - 1];
}
function getTree(label) {
  let hashMap = new Map();
  let load = [];
  let n = 1;
  if (label == 1) {
    load.push(label);
  } else {
    while (get(n) < label + 1) {
      let arr = [];
      for (let i = 0; i < get(n); i++) {
        arr[i] = get(n) + i;
      }
      if (n % 2 == 0) {
        arr = arr.reverse();
      }
      hashMap.set(n, arr);
      n++;
    }
  }
  return [hashMap, n];
}

console.log(pathInZigZagTree(26));
