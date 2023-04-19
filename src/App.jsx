import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log('React: constructor')
    console.log(props)
    this.state = {
      count: 0,
    }
  }

  // NOTE: This method not re-render, which the documentation of React version 16.2.0 suggests that if you want to set the initial value of the state, do it at the constructor() instead.
  componentWillMount() {
    console.log('React: componentWillMount')
    console.log(this.props.a);
  }

  componentDidMount() {
    console.log('React: componentDidMount')
  }

  componentWillUnmount() {
    console.log('React: componentWillUnmount')
  }

  shouldComponentUpdate() {
    console.log('React: shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('React: componentDidUpdate')
  }

  render() {
    console.log('React: render')
    return (
      <>
        <h1>Number is {this.state.count}</h1>
        <button
          type='button'
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Count {this.state.count}
        </button>
        <button type='button' onClick={() => this.setState({ count: 0 })}>
          Set Zero
        </button>
        <ChildComponent name='Nat nopphawong'/>
      </>
    )
  }
}

class ChildComponent extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <h3>{this.props.name}</h3>
    )
  }
}