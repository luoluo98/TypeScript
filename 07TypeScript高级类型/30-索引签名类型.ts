interface AnyObject {
  [key: string]: number
}

let obj: AnyObject = {
  a: 1,
  abc: 124,
  abcde: 12345
}

// --

const arr = [1, 3, 5]
arr.forEach

interface MyArray<Type> {
  [index: number]: Type
}
let arr1: MyArray<number> = [1, 3, 5]
arr1[0]
