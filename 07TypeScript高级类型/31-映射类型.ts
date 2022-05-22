type PropKeys = 'x' | 'y' | 'z' | 'a' | 'b'
type Type1 = { x: number; y: number; z: number; a: number; b: number }

type Type2 = { [Key in PropKeys]: number }

// 错误演示：
// interface Type3 {
//   [Key in PropKeys]: number
// }
