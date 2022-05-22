import { Component } from 'react'

import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

// 导入todos样式
import './App.css'

// 导入 TodoItem 类型
import { TodoItem } from './todos'

/*
添加任务：

1. 为子组件添加状态和属性及其类型：
   - 状态：文本框的值
   - 属性：回调函数，接收一个 string 类型的参数
2. 通过`受控组件`方式获取到文本框的值
3. 在子组件文本框按下回车键时将数据传递给父组件
4. 父组件接收子组件传递过来的任务名称（文本框的值）
5. 将任务添加到父组件的状态数据中
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

  addTodo = (text: string) => {
    // console.log('父组件中获取到数据：', text)
    const { todos } = this.state
    const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1
    this.setState({
      todos: [
        ...todos,
        {
          id,
          text,
          done: false
        }
      ]
    })
  }

  render() {
    return (
      <section className="todoapp">
        {/* 添加任务 */}
        <TodoAdd onAddTodo={this.addTodo} />

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
