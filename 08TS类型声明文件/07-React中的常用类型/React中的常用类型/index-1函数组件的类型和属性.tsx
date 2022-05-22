import ReactDOM from 'react-dom'
// import { FC } from 'react'

/**
 * 函数组件：
 *
 * 组件的类型
 * 组件的属性（props），包括可选属性
 */
type Props = { name: string; age?: number }

// const Hello: FC<Props> = ({ name, age }) => (
//   <div>
//     您好，我叫：{name}，我 {age} 岁了
//   </div>
// )

// 说明：完全利用 JS（TS） 自身的能力来编写组件
const Hello = ({ name, age }: Props) => (
  <div>
    您好，我叫：{name}，我 {age} 岁了
  </div>
)

const App = () => (
  <div>
    <Hello name="rose" age={18} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
