import ReactDOM from 'react-dom'
import React from 'react'
// import { FC } from 'react'

/**
 * class 组件：
 *
 * 组件的类型
 */

type State = { count: number }
type Props = { message?: string }

// 无 props 无 state
class C1 extends React.Component {}
// 有 props 无 state
class C2 extends React.Component<Props> {}
// 无 props 有 state
class C3 extends React.Component<{}, State> {}
// 有 props、state
class C4 extends React.Component<Props, State> {}

const App = () => <div></div>

ReactDOM.render(<App />, document.getElementById('root'))
