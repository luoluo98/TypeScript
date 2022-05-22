// 使用泛型来创建一个函数：

function id<Type>(value: Type): Type {
  return value
}

// 调用泛型函数：

// 1 以 number 类型调用泛型函数
const num = id<number>(10)

// 2 以 string 类型调用泛型函数
const str = id<string>('a')
const ret = id<boolean>(false)
