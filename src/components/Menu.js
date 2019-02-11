
import React, { Component } from 'react';

import Controller from './Controller';
import './stylesheets/Menu.css';

class Menu extends Component {
    state = {

    }

    render() {
        return (
            <div className='menu'>
                <Controller setter={this.props.setter} type='size' />
                <Controller setter={this.props.setter} type='chaos' />
                <Controller setter={this.props.setter} type='complex' />
                <button className='start' onClick={this.props.init}>Start</button>
            </div>
        );
    }
}

export default Menu;