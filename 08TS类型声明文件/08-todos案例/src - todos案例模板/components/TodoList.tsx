import React from 'react'

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {/* 编辑样式：editing  已完成样式：completed */}
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>吃饭</label>
            <button className="destroy" />
          </div>
          <input className="edit" defaultValue="Create a TodoMVC template" />
        </li>
      </ul>
    )
  }
}

export default TodoList
