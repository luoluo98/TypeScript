import React from 'react'

// 任务项的类型
type TodoItem = {
  id: number
  text: string
  done: boolean
}

// 提供 props 类型
interface Props {
  list: TodoItem[]
}

class TodoList extends React.Component<Props> {
  render() {
    // console.log(this.props)
    return (
      <ul className="todo-list">
        {/* 编辑样式：editing  已完成样式：completed */}
        {this.props.list.map(todo => {
          return (
            <li key={todo.id} className={todo.done ? 'completed' : ''}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo.text}</label>
                <button className="destroy" />
              </div>
              <input
                className="edit"
                defaultValue="Create a TodoMVC template"
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default TodoList
