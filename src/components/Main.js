import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'
import Col from 'react-bootstrap/Col';
import { Container, Row  ,Forms
} from 'react-bootstrap';
import styles from './mystyle.module.css'; 


class Main extends Component {

    selectOption = (event) => {
        let value = event.target.value;
        let newArr = [];
        if (value) {

            newArr = data.filter(element => {
                if (element.horns == value) {
                    return element
                }
            })
        } else {
            newArr = data
        }
        this.props.diplayImge(newArr)

    }

    render() {

        return (
            <>



                <form>
                    <div class="form-group">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">select the number for Horned</label>
                        <select class="form-control" id="exampleFormControlSelect1" onChange={this.selectOption}>
                            <option value="1" >1</option>
                            <option value="2">2</option>
                            <option value="3" >3</option>
                            <option value="100">100</option>
                        </select>
                    </div>

                </form>



                <Container>
                    <Row>
                        {

                            this.props.data.map(elements => {
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
