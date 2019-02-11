import React, { Component } from 'react';

import './stylesheets/Lever.css'



class Lever extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: this.props.active,
        }
    }

    id = this.props.id;
    changeState = this.props.changeState;

    handleClick = e => {
        e.preventDefault();
        e.target.classList.toggle('active')
        this.setState({ isActive: !this.state.isActive })
        this.changeState(this.id);
        for (let i = 0; i < this.props.complexity; i++) {
            // console.log(this.props.boundaries)
            this.changeState(this.props.boundaries[i]);
        }
    }
    componentDidMount() {

        //    this.setState({
        //         isActive
        //     })
    }
    componentDidUpdate() {
        if (this.state.isActive !== this.props.active) {
            this.setState({
                isActive: this.props.active,
            })
        }
    }


    render() {
        const classString = this.state.isActive ? "alarm active" : "alarm";
        const btnClass = this.state.isActive ? "button active" : "button";
        return (
            <div className="leverobj">
                <div className="alarm"></div>
                <div className={classString} ></div>
                <div className="lever">

                    <button onClick={this.handleClick} className={btnClass}></button>
                </div>
            </div>
        );
    }
}

export default Lever;