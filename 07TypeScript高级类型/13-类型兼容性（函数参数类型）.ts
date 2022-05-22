// 2 参数类型： 相同位置的参数类型要相同或兼容

// 原始类型：
// type F1 = (a: number) => void
// type F2 = (a: number) => void

// let f1: F1
// let f2: F2

// f1 = f2
// f2 = f1

// --

// 对象类型
interface Point2D {
  x: number
  y: number
}
interface Point3D {
  x: number
  y: number
  z: number
}

type F2 = (p: Point2D) => void // 相当于有 2 个参数
type F3 = (p: Point3D) => void // 相当于有 3 个参数

let f2: F2
let f3: F3

f3 = f2

// f2 = f3
