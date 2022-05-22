// 3 返回值类型，只需要关注返回值类型本身即可

// 原始类型：
type F5 = () => string
type F6 = () => string

let f5: F5
let f6: F6

f6 = f5
f5 = f6

// 对象类型：
type F7 = () => { name: string }
type F8 = () => { name: string; age: number }

let f7: F7
let f8: F8

f7 = f8

// 错误演示
// f8 = f7
