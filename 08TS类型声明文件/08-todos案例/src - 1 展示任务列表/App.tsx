import { Component } from 'react'

import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

// 导入todos样式
import './App.css'

/*
展示任务列表：

1. 为父组件 App，提供状态（任务列表数据）和类型
2. 为子组件 TodoList 指定能够接收到的 props 类型
3. 将任务列表数据传递给 TodoList 组件
*/

// 任务项的类型
type TodoItem = {
  id: number
  text: string
  done: boolean
}

// App 组件的状态类型
type Todos = {
  todos: TodoItem[]
}

const todos: TodoItem[] = [
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

class App extends Component<{}, Todos> {
  state: Todos = {
    todos
  }

  render() {
    return (
      <section className="todoapp">
        {/* 添加任务 */}
        <TodoAdd />

        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          {/* 列表组件 */}
          <TodoList list={this.state.todos} />
        </section>

        {/* footer 组件 */}
        <TodoFooter />
      </section>
    )
  }
}

export default App
