import React, { Component } from 'react'

class HornedBeast extends Component {
    constructor(props){
        super(props);
      this.state={
            numlikes:0,
        }
    }
    raiselikes=()=>{
        this.setState({
            numlikes:this.state.numlikes+1
        })
    }
    render(){
    
        return (
        <>
        <h2>{this.props.titelAnimal}</h2>
        <img   onClick={this.raiselikes} src={this.props.img} alt="imganimal" width="500px"></img>
        <p>{this.props.discription}</p>
        <p>{this.props.keyword}</p>
        <p>{this.props.horns}</p>
        <p>{this.props.likes}</p>
        <p>{this.state.numlikes}</p>

        </>)
    }
}
export default HornedBeast
