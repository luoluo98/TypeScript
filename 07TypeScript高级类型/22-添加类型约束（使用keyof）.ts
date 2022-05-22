function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

getProp({ name: 'jack', age: 18 }, 'age')
getProp({ name: 'jack', age: 18 }, 'name')

// 补充：（了解）
getProp(18, 'toFixed')
getProp('abc', 'split')
getProp('abc', 1) // 此处 1 表示索引
getProp(['a'], 'length')
getProp(['a'], 1000)

console.log('object'[1]) // b

// 错误演示：
// getProp({ name: 'jack', age: 18 }, 'name1')
