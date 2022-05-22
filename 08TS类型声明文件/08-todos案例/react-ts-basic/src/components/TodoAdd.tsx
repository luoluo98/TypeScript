import React from 'react'

// 属性的类型
type Props = {
  onAddTodo(text: string): void
}

// 状态的类型
type State = {
  text: string
}

class TodoAdd extends React.Component<Props, State> {
  state: State = {
    text: ''
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value
    })
  }

  onAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 1 非空判断
    const { text } = this.state
    if (text.trim() === '') return

    // console.log(e.keyCode)
    // 注意： keyCode 属性将来会被废弃调用，因此，在 TS 中
    // 使用的时候，会有一个 中横线
    // 可以使用下面  code 属性来代替
    if (e.keyCode === 13) {
      // console.log('enter')
      this.props.onAddTodo(this.state.text)

      // 2 清空文本框的值
      this.setState({
        text: ''
      })
    }

    // console.log(e.code)
    // if (e.code === 'Enter') {
    //   console.log('enter')
    // }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.text}
          onChange={this.onChange}
          onKeyDown={this.onAdd}
        />
      </header>
    )
  }
}

export default TodoAdd
