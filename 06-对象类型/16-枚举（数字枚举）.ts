// 枚举：

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// 成员设置初始值：

// enum Direction {
//   Up = 10,
//   Down,
//   Left,
//   Right
// }

enum Direction {
  Up = 2,
  Down = 4,
  Left = 8,
  Right = 16
}

function changeDirection(direction: Direction) {}

changeDirection(Direction.Up)
