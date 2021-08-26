// 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）

// 二维数组的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些节点，空就是没有下一个结点了。

// 译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a 。

//

// 示例 1：

// 输入：graph = [[1,2],[3],[3],[]]
// 输出：[[0,1,3],[0,2,3]]
// 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
// 示例 2：

// 输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
// 输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
// 示例 3：

// 输入：graph = [[1],[]]
// 输出：[[0,1]]
// 示例 4：

// 输入：graph = [[1,2,3],[2],[3],[]]
// 输出：[[0,1,2,3],[0,2,3],[0,3]]
// 示例 5：

// 输入：graph = [[1,3],[2],[3],[]]
// 输出：[[0,1,2,3],[0,3]]

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

var allPathsSourceTarget = function (graph: number[][]): number[][] {
  const head: number = 0;
  let map1: Map<number, number[][]> = new Map();

  for (let item in graph) {
    if (graph[item].length == 0) {
      let num = map1.get(Number(item));
      return repeats(num || []);
    }
    for (let node of graph[item]) {
      if (Number(item) > 0) {
        for (let key of map1.keys()) {
          graph[key].forEach((node) => {
            let arrBuff: number[][] = map1.get(key) || [[0]];
            let [...copyArr] = [...arrBuff];
            copyArr.forEach((item) => {
              let [...deepCopyArr] = item;
              deepCopyArr.push(node);
              let nodeArr = map1.get(node);
              nodeArr
                ? map1.set(node, [...nodeArr, deepCopyArr])
                : map1.set(node, [deepCopyArr]);
            });
          });
        }
      } else {
        let arrBuff: number[][] = [[0]];
        arrBuff[0].push(node);
        map1.set(node, arrBuff);
      }
    }
  }
  // console.log(map);
  // 二维数组去重复
  function repeats(arr: number[][]): number[][] {
    // 用对象键唯一的特性去重
    interface Obj {
      [key: string]: number[];
    }
    let arrRe: Obj = {};
    arr.forEach((item) => {
      arrRe[item.toString()] = item;
    });

    return Object.values(arrRe);
  }
  return [];
};
console.log(allPathsSourceTarget([[2], [3], [1], []]));

// const stack = [], ans = [];

// const dfs = (graph, x, n) => {
//     if (x === n) {
//         ans.push(stack.slice());
//         return;
//     }
//     for (const y of graph[x]) {
//         stack.push(y);
//         dfs(graph, y, n);
//         stack.pop();
//     }
// }

// stack.push(0);
// dfs(graph, 0, graph.length - 1);
// return ans;
