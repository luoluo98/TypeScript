interface ILength {
  length: number
}

function id<Type extends ILength>(value: Type): Type {
  value.length
  return value
}

id(['a', 'c'])
id('abc')
id({ length: 10, name: 'jack' })

// 错误演示
// id(123)
