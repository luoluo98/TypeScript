// let arr: (number | string)[] = [1, 3, 5, 'a', 'b']
// let arr1: (number | string)[] = [1, 'x', 2, 'y']

// 改造：

// 类型别名：
type CustomArray = (number | string)[]

let arr: CustomArray = [1, 3, 5, 'a', 'b']
let arr1: CustomArray = [1, 'x', 2, 'y']
