import ReactDOM from 'react-dom'
import React from 'react'

/**
 * class 组件：
 *
 * class 组件的属性和属性默认值
 */

type Props = { name: string; age?: number }
// class Hello extends React.Component<Props> {
//   // 提供属性的默认值
//   static defaultProps: Partial<Props> = {
//     age: 18
//   }

//   render() {
//     const { name, age } = this.props
//     return (
//       <div>
//         你好，我叫：{name}，我 {age} 岁了
//       </div>
//     )
//   }
// }

class Hello extends React.Component<Props> {
  render() {
    // 简化 class 组件的属性默认值
    const { name, age = 20 } = this.props
    return (
      <div>
        你好，我叫：{name}，我 {age} 岁了
      </div>
    )
  }
}

const App = () => (
  <div>
    <Hello name="rose" />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
