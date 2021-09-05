import React, { Component } from 'react'

class HornedBeast extends Component {

    render(){
        return (
        <>
        <h2>{this.props.titelAnimal}</h2>
        <img src={this.props.img} alt="imganimal" ></img>
        <p>{this.props.discription}</p>
        </>)
    }
}
export default HornedBeast
