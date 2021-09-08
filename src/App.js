import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import data from './components/data.json'

import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast ";
import { Form } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      title: "",
      image_url: "",
      description: "",
      data: data
    }
  }
  diplayImge = (newArr) => {
    this.setState({
      data: newArr

    })
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpen = (title, image_url, description) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description,


    })
  }

  render() {
    return (
      <>
        <Header />
        <Main  diplayImge={this.diplayImge} data={this.state.data} handleOpen={this.handleOpen} />
        <SelectedBeast
          handleClose={this.handleClose}
          showModal={this.state.showModal}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
        />

        <Footer />

      </>

    )
  }
}

export default App
