import { Component } from 'react'

import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

// 导入todos样式
import './App.css'

const todos = [
  {
    id: 1,
    text: '吃饭',
    done: true
  },
  {
    id: 2,
    text: '休息',
    done: false
  }
]

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        {/* 添加任务 */}
        <TodoAdd />

        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          {/* 列表组件 */}
          <TodoList />
        </section>

        {/* footer 组件 */}
        <TodoFooter />
      </section>
    )
  }
}

export default App
