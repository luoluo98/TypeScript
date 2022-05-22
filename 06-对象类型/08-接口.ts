// let person: { name: string; age: number; sayHi(): void } = {
//   name: '刘老师',
//   age: 18,
//   sayHi() {}
// }

// let person1: { name: string; age: number; sayHi(): void }

// 接口：
interface IPerson {
  name: string
  age: number
  sayHi(): void
}

let person: IPerson = {
  name: '刘老师',
  age: 18,
  sayHi() {}
}

let person1: IPerson = {
  name: 'jack',
  age: 16,
  sayHi() {}
}
