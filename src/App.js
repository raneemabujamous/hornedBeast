import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";

import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast  from "./components/SelectedBeast ";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      title:"",
      image_url: "",
      description: "",
  
    }
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpen = (title,image_url,description) => {
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
        <Main handleOpen={this.handleOpen} />
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
