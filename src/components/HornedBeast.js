import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numlikes: 0,
        }
    }
    raiselikes = () => {
        this.setState({
            numlikes: this.state.numlikes + 1
        })
    }
    getHandleOpen = () => {
        
        let title = this.props.title;
        let image_url = this.props.image_url
        let discription = this.props.discription

        this.props.handleOpen(title, image_url, discription);
    }

    render() {

        return (
            <>
            
            
                    <Card style={{ width: '18rem' }}>
                        <Card.Img onClick={this.raiselikes} variant="top" src= {this.props.image_url}
                        alt={this.props.title} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.discription}
                            </Card.Text>
                        </Card.Body>
                      
                            <Card.Text>{this.props.keyword}</Card.Text>
                            <Card.Text>{this.props.horns}</Card.Text>
                            <Card.Text>{this.state.numlikes}</Card.Text>
                        <Card.Body>
                            <Button
                                onClick={this.getHandleOpen}
                                variant="primary"
                            >
                                Show More Data
                            </Button>  </Card.Body>
                    </Card>
         
            </>
            )
    }
}
export default HornedBeast
