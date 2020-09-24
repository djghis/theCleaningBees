import React, {Component} from 'react'
import './menu-button.css'


class MenuButton extends Component {
  render() {
    return (
     <button 
        aria-label="slide menu"
        id='round-button' 
        onMouseDown={this.props.handleMouseDown} 
        />
    )
  }
}

export default MenuButton