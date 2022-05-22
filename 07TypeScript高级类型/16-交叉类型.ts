// interface Point2D {
//   x: number
//   y: number
// }

// // 通过继承 Point3D 具有 x/y/z 三个属性
// interface Point3D extends Point2D {
//   z: number
// }

// let p3: Point3D = {
//   x: 1,
//   y: 2,
//   z: 3
// }

// --

interface Person {
  name: string
  say(): number
}
interface Contact {
  phone: string
}

type PersonDetail = Person & Contact

let obj: PersonDetail = {
  name: 'jack',
  phone: '133....',
  say() {
    return 1
  }
}
