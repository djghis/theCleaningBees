import React, {Component} from 'react'
import ImageBee from './image-bee'
import './menu-button.css'



class MenuButton extends Component {
  render() {
    return (
    //  <button 
    //     aria-label="slide menu"
    //     id='round-button' 
    //     onMouseDown={this.props.handleMouseDown} 
    //     >
    //     {/* <ImageBee /> */}
    //     Menu</button>
    <div className="hamburger-button" onClick={this.props.handleMouseDown} aria-label="slide menu">
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
   
    )
  }
}

export default MenuButton