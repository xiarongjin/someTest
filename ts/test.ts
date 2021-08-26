// 私有成员变量#开头，外部不能访问甚至检测
// class Person {
//   #name: string;

//   constructor(name: string) {
//     this.#name = name;
//   }

//   greet() {
//     console.log("hello my name is" + this.#name);
//   }
// }

// let Json = new Person("Json");
// Json.greet();

// // 泛型接口
// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }

// 泛型工具

// 1.typeof用来获取变量声明或对象的类型
// interface Person {
//   name: string;
//   age: number;
// }

// const sem: Person = { name: "semLinker", age: 30 };
// type Sem = typeof sem; // -> Person

// function toArray(x: number): Array<number> {
//   return [x];
// }

// type Func = typeof toArray; // -> (x: number) => number[]

// 2.keyof操作符用来获取对象的键
// interface Person {
//   name: string;
//   age: number;
// }

// type K1 = keyof Person; // "name" | "age"
// type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
// type K3 = keyof { [x: string]: Person }; // string | number

// 3.in 操作符用来便利枚举类型
// type Keys = "a" | "b" | "c"

// type Obj =  {
//   [p in Keys]: any
// } // -> { a: any, b: any, c: any }

// 4.infer在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用。
// 简单说就是 infer R 拿到函数返回值类型方便后面使用
// type ReturnType1<T> = T extends (...args: any[]) => infer R ? R : any;

// 5.extends
// 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。

// interface ILengthwise {
//   length: number;
// }

// function loggingIdentity<T extends ILengthwise>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }
// loggingIdentity(3);//类型检查提示

// 6.Partial
// Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。

// 定义
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Make all properties in T optional
 */
//  type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// 示例
// interface Todo {
//   title: string;
//   description: string;
// }

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//   return { ...todo, ...fieldsToUpdate };
// }

// const todo1 = {
//   title: "organize desk",
//   description: "clear clutter",
// };

// const todo2 = updateTodo(todo1, {
//   description: "throw out trash",
// });

// Partial 执行了类似这样的操作
// interface Todo {
//   title？: string|undefined;
//   description？: string|undefined;
// }
// 将属性变为可选项

// ts 装饰器

// 它是一个表达式
// 该表达式被执行后，返回一个函数
// 函数的入参分别为 target、name 和 descriptor
// 执行该函数后，可能返回 descriptor 对象，用于配置 target 对象

// 例子
// function Greeter(target: Function): void {
//   target.prototype.greet = function (): void {
//     console.log("Hello Semlinker!");
//   };
// }

// @Greeter
// class Greeting {
//   constructor() {
//     // 内部实现
//   }
// }

// let myGreeting = new Greeting();
// myGreeting.greet(); // console output: 'Hello Semlinker!';
// 自定义输出
// function Greeter(greeting: string) {
//   return function (target: Function) {
//     target.prototype.greet = function (): void {
//       console.log(greeting);
//     };
//   };
// }

// @Greeter("Hello TS!")
// class Greeting {
//   constructor() {
//     // 内部实现
//   }
// }

// let myGreeting = new Greeting();
// myGreeting.greet(); // console output: 'Hello TS!';

// 二维数组去重
interface Res extends Object {
  [key: string]: any;
}

function repeats(arr: number[][]): number[][] {
  let res: Res = {};
  arr.forEach((item) => {
    res[item.toString()] = item;
  });

  return Object.values(res);
}
