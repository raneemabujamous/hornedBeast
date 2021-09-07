import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'
import Col from 'react-bootstrap/Col';
import { Container, Row } from 'react-bootstrap';

class Main extends Component {

    render() {

        return (
            <>

                <Container>
                    <Row>
                    {

                        data.map(elements => {
                            return <Col>
                            
                                <HornedBeast handleOpen={this.props.handleOpen} title={elements.title}
                                    image_url={elements.image_url} discription={elements.description}
                                    keyword={elements.keyword} horns={elements.horns} raiselikes={this.props.numlikes} />
                            </Col>
                        })


                    }
                      </Row>
                </Container>
            </>
        )
    }
}

export default Main
