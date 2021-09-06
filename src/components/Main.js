import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'
class Main extends Component {
    constructor(props){
        super(props);
      this.state={
            numlikes:this.props.numlikes,
        }
    }
    raiselikes=()=>{
        this.setState({
            numlikes:this.state.numlikes+1
        })
    }
    render() {
       
        return (
            <>


                {

                    data.map(elements => {
                        console.log(elements)
                        return <HornedBeast titelAnimal={elements.title} img={elements.image_url} discription={elements.description}
                        keyword ={elements.keyword}  horns={elements.horns} raiselikes={this.state.numlikes} />
                    })

                    // <HornedBeast raiselikes={this.state.numlikes}/>
                        // console.log(this.state);

                }
            </>
        )
    } }

    export default Main
