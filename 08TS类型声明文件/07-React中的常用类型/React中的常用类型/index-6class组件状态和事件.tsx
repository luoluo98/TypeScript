

// class 组件
// class 组件状态(state)和事件

type State = { count: number }
class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        计数器：{this.state.count}
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}