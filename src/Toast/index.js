import React, { Component } from 'react'

import './style.css'

export default class Toast extends Component {
  constructor(props) {
    super(props)
    this.toastRef = React.createRef()
    this.duration = this.props.duration || 2000
  }

  state = {
    showToast: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.message !== this.props.message && this.props.message) {
      this.show()
    }
  }

  show = () => {
    this.setState({ showToast: true }, () =>
      window.setTimeout(this.hide, this.duration)
    )
  }

  hide = () => {
    this.setState({ showToast: false })
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          padding: '20px 0 0 20px',
          boxSizing: 'border-box'
        }}
      >
        <ToastBody show={this.state.showToast} {...this.props} />
      </div>
    )
  }
}

function ToastBody(props) {
  const toastSize = props.size || 300
  const toastStyles = {
    width: toastSize,
    position: 'relative',
    left: props.show ? 0 : `-${toastSize + 20}px`,
    transitionProperty: 'left',
    transitionDuration: '600ms'
  }
  return (
    <div
      className="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={toastStyles}
    >
      <div className="toast-body">{props.message}</div>
    </div>
  )
}
