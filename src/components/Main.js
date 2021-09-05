import React, { Component } from 'react'
import HornedBeast from './HornedBeast'

class Main extends Component {
    render() {
        let aniaml = [{
            titelAnimal: "UniWhal",
            img: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80, discription:The markhor is the national animal of Pakistan",
            discription: "A unicorn and a narwhal nuzzling their horns"
        },
        {
            titelAnimal: "Rhino Family",
            img: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
            discription: "Mother (or father) rhino with two babies"
        }]

        return (
            <>
                {
                    aniaml.map(elements => {
                        return <HornedBeast titelanimal={elements.titelAnimal} img={elements.img} discription={elements.discription} />
                    })
                }
            </>
        )
    } }

    export default Main
