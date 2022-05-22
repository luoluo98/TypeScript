interface Point2D {
  x: number
  y: number
}
// interface Point3D { x: number; y: number; z: number }

// 使用 继承 实现复用：
interface Point3D extends Point2D {
  z: number
}

let p3: Point3D = {
  x: 1,
  y: 0,
  z: 0
}
