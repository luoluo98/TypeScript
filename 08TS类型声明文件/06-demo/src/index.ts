import { count, songName, add, Point } from './utils'

type Person = {
  name: string
  age: number
}

let p: Partial<Person> = {
  name: 'jack'
}

let p1: Point = {
  x: 10,
  y: 20
}

// console.log('项目启动了')
console.log('count', count)
console.log('songName', songName)
console.log('add()', add(1, 4))
