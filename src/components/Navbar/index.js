import React from 'react'
import { Link } from 'react-router-dom'
import './stylesheet.css'

export function NavItem(props) {
  return (
    <li className="nav-item">
      <Link {...props} className="nav-link" />
    </li>
  )
}

export class Navbar extends React.Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const className = `navbar-wrapper navbar-light ${
      this.state.isOpen ? 'open' : ''
    }`
    return (
      <div className={className}>
        <nav className="nav">
          <NavbarTogglerButton onClick={this.toggle}>
            {this.state.isOpen ? 'X' : String.fromCharCode(9776) }
          </NavbarTogglerButton>
          <ul className="flex-column nav">{this.props.children}</ul>
        </nav>
      </div>
    )
  }
}

function NavbarTogglerButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="navbar-toggler text-center border-0"
      type="button"
      aria-label="Toggle navigation"
    >
      {children}
    </button>
  )
}
