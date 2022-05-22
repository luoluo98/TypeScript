import React from 'react'
import ReactDOM from 'react-dom'
// import { FC } from 'react'

/**
 * 函数组件：
 *
 * 事件绑定和事件对象
 */
type Props = { name: string; age?: number }
const Hello = ({ name, age = 18 }: Props) => {
  // const onClick = () => {
  //   console.log('赞！')
  // }

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('赞！', e.currentTarget)
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div>
      您好，我叫：{name}，我 {age} 岁了
      <button onClick={onClick}>点赞</button>
      <input onChange={onChange} />
    </div>
  )
}

const App = () => (
  <div>
    <Hello name="rose" />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
