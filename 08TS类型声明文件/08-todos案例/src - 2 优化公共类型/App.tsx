import { Component } from 'react'

import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

// 导入todos样式
import './App.css'

// 导入 TodoItem 类型
import { TodoItem } from './todos'

/*
优化：

1. 创建 todos.d.ts 文件
2. 将公共的类型移动到 todos.d.ts 文件中，并导出
3. 在用到该类型的组件（App、TodoList）中导入这些类型
*/

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
