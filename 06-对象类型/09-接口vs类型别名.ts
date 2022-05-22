// 接口：
// interface IPerson {
//   name: string
//   age: number
//   sayHi(): void
// }

// 类型别名
type IPerson = {
  name: string
  age: number
  sayHi(): void
}

let person: IPerson = {
  name: '刘老师',
  age: 18,
  sayHi() {}
}
