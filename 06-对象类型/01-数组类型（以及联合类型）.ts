// 数组类型：
/* 
let numbers: number[] = [1, 3, 5]

// let numbers1: Array<number> = [1, 3, 5]

let b: boolean[] = [true, false]
*/

// 联合类型：
// 添加小括号，表示：首先是数组，然后，这个数组中能够出现 number 或 string 类型的元素
let arr: (number | string)[] = [1, 3, 5, 'a', 'b']

// 不添加小括号，表示：arr1 既可以是 number 类型，又可以是 string[]
// let arr1: number | string[] = ['a', 'b']
// let arr1: number | string[] = 123
