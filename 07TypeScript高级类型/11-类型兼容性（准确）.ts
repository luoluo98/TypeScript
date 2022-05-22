// 两个类的兼容性演示：

class Point {
  x: number
  y: number
}
class Point2D {
  x: number
  y: number
}

const p: Point = new Point2D()

class Point3D {
  x: number
  y: number
  z: number
}

const p1: Point = new Point3D()

// 错误演示
// const p2: Point3D = new Point()
