import React, { Component } from 'react'
import bus from './Bus.jpg'
import * as Icon from 'react-bootstrap-icons';
import { BiRightArrow } from 'react-icons/bi';

export default class Main extends Component {
    render() {
        return (
            <>
            <div className="logo">
                 <a href="/Home" ><img className="rounded-circle shadow-lg" height="80px" src={bus} />
                    </a>
            </div>
            <div>
           
            </div>
            </>
        )
    }
}
