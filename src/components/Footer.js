import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import styles from './mystyle.module.css'; 

class Footer extends Component {
    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
                    <Container >
                        <Navbar.Brand className={styles.bigblue}  href="#home">
                        {' '}
                        Raneem Abu Jamous  </Navbar.Brand>
                </Container>
            </Navbar>
              
            </>
        )
    }
}

export default Footer