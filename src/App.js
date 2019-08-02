import React, { Component } from 'react'

import Toast from './Toast'
import Content from './Content'

class App extends Component {
  state = {
    toastMessage: ''
  }

  componentDidMount() {
    // demo the
    window.setTimeout(() => this.setState({ toastMessage: 'This is a toast!' }), 1500)
  }

  render() {
    return (
      <>
        <Toast message={this.state.toastMessage} duration={3000} />
        <Content />
      </>
    )
  }
}

export default App
