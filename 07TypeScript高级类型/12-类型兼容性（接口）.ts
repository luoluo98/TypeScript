interface Point {
  x: number
  y: number
}
interface Point2D {
  x: number
  y: number
}
interface Point3D {
  x: number
  y: number
  z: number
}

let p1: Point
let p2: Point2D
let p3: Point3D

// 正确：
// p1 = p2
// p2 = p1
// p1 = p3

// 错误演示：
// p3 = p1

// 类和接口之间也是兼容的
class Point4D {
  x: number
  y: number
  z: number
}
p2 = new Point4D()
