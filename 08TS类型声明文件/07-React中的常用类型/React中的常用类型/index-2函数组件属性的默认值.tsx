import ReactDOM from 'react-dom'
// import { FC } from 'react'

/**
 * 函数组件：
 *
 * 属性的默认值（defaultProps）
 */
type Props = { name: string; age?: number }

// const Hello: FC<Props> = ({ name, age }) => (
//   <div>
//     您好，我叫：{name}，我 {age} 岁了
//   </div>
// )
// Hello.defaultProps = {
//   age: 18
// }

const Hello = ({ name, age = 18 }: Props) => (
  <div>
    您好，我叫：{name}，我 {age} 岁了
  </div>
)

const App = () => (
  <div>
    <Hello name="rose" />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
