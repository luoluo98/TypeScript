// 类型声明文件

// 类型
type Props1 = { x: number; y: number }

// 错误演示：因为 .d.ts 文件中，不能出现可执行代码（代码实现）
// 可执行代码
// function add1(num1: number, num2: number) {
//   return num1 + num2
// }
// console.log(add1(1, 5))
