import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import styles from './mystyle.module.css'; 

class Header extends Component {
    render() {
        return (
            <>

                <Navbar bg="dark" variant="dark">
                    <Container >
                        <Navbar.Brand className={styles.bigblue}  href="#home">
                        {' '}
                        Horned Beast      </Navbar.Brand>
                </Container>
            </Navbar>

     
        </>
        )
    }

}
export default Header
