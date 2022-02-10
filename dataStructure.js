/* 
链表
链表的特性
  1.链表相对于数组,存储同样数量的数据内存占用更高
     class Node {
         String data;
         Node next
       }
    上面的代码就构成了一个简单的链表结构
    可以看到,类中的data字段为存储的数据,而为了用链表存储这个数据需要用Node这个类包装一下,然后设置一个名为next的内存地址指向下一个Node(节点),所以链表比数组多出占用了n个对象-1的内存(数组自身也是一个对象)
  2.
    
    
*/
// 计算两点间距离
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

// 生成指定范围的二维点位
const randomPosInRange = (min, max) =>
  Array.from(
    { length: 2 },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

// 生成指定位数和范围的二维点位组合
const RPIRInCount = (min, max, n) =>
  Array.from({ length: n }, () => randomPosInRange(min, max));

// 计算各点的相互距离
const pointsDistance = (points) => {
  let array = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const p1 = points[i];
      const p2 = points[j];
      array.push(distance(p1[0], p1[1], p2[0], p2[1]));
    }
  }
  return array;
};

// 计算数组中的最小值
const minInArray = (array) => array.sort((a, b) => a - b)[0];

// 计算各点距离与最小距离的倍数
const distanceMultiple = (points) => {
  const distances = pointsDistance(points);
  const minDistance = minInArray(distances);
  const code = distances.map((distance) => round(distance / minDistance, 5));
  code.shift();
  return code;
};

// 四舍五入到指定位数
const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

// 差异相关性
const approximateMatchArray = (arr1, arr2) => {
  let scope = 0;
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  const part = 100 / arr1.length;
  for (let i = 0; i < arr1.length; i++) {
    const reduce = Math.abs(arr1[i] - arr2[i]);
    const partScope = part * (1 - reduce / 10);
    scope = scope + partScope;
  }
  let damping = 105;
  if (scope < 90) damping = 125;
  scope = scope * (scope / damping);
  if (scope > 100) scope = 0;
  return scope;
};

// 余弦相似度
const cosSimilarity = async (x, y) => {
  x = tf.tensor2d(x);
  y = tf.tensor2d(y);
  const p1 = tf.sqrt(x.mul(x).sum());
  const p2 = tf.sqrt(y.mul(y).sum());
  let p12 = x.mul(y).sum();
  let score = p12.div(p1.mul(p2));
  score = ((await score.data())[0] - 0.9) * 10;
  return score;
};

// 主程序
const run = () => {
  const points = false
    ? [
        [126, 77],
        [79, 133],
        [61, 43],
      ]
    : RPIRInCount(20, 180, 4);
  window.points = points;
  const code = distanceMultiple(points);
  console.log(code);
  window.onload = () => draw(points);
};

// 运行
run();
