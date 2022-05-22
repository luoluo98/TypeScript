type Props = { a: number; b: number; c: boolean }

// 其他使用方式：
type TypeA = Props['a' | 'b']

type TypeB = Props[keyof Props]
