import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast  extends Component {
render(){
    return(
    <Modal show={this.props.showModal} onHide={this.props.handleClose} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>{this.props.title}</Modal.Title>
    </Modal.Header>

    <Card.Img variant="top" src={this.props.image_url} style={{width:"500"}}/>
{console.log(this.props,"hi")}
    <Modal.Body>{this.props.description}</Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={this.props.handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
    )
}

}
export default SelectedBeast 
