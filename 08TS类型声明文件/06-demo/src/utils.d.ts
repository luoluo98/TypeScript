// 为 utils.js 文件来提供类型声明

declare let count: number
declare let songName: string
interface Point {
  x: number
  y: number
}
declare let position: Point

declare function add(x: number, y: number): number
declare function changeDirection(
  direction: 'up' | 'down' | 'left' | 'right'
): void

type FomartPoint = (point: Point) => void
declare const fomartPoint: FomartPoint

// 注意：类型提供好以后，需要使用 模块化方案 中提供的
//      模块化语法，来导出声明好的类型。然后，才能在
//      其他的 .ts 文件中使用
export { count, songName, position, add, changeDirection, fomartPoint, Point }
