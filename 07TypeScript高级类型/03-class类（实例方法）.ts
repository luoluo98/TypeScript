class Point {
  x = 1
  y = 2

  scale(n: number) {
    this.x *= n
    this.y *= n
  }
}

const p = new Point()

p.scale(10)

console.log(p.x, p.y)
