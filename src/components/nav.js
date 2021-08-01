import React, { Component } from 'react'

export class nav extends Component {
    styles={
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        padding:10
    }
    render() {
        return (
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <li className="nav-item">
                    <a style={this.styles}>My Contacts</a>
                </li>
          
          </nav>
        );
    }
}

export default nav
