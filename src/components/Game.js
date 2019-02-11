import React, { Component } from 'react';

import './stylesheets/Game.css';
import './stylesheets/BigGame.css';
import ListLevers from './ListLevers';
import Timer from './Timer';


class Game extends Component {
    state = {
        activeList: [],
        complexity: this.props.complexity,
        boundaries: [],
        size: this.props.size,
        chaos: this.props.chaos,
    }
    generateTab = () => {
        const activeList = [];
        for (let i = 0; i < this.state.size; i++)
            activeList.push(true);
        this.setState({ activeList });
    }

    changeState = (index) => {
        const list = this.state.activeList;
        list[index] = !this.state.activeList[index];
        this.setState({ activeList: list });
    }
    createBoundaries = (index) => {
        const length = this.state.size;
        let boundaries = [];
        for (let i = 0; i < this.state.complexity; i++) {
            let random = index;
            while (random === index)
                random = Math.floor(Math.random() * length)
            boundaries.push(random);

        }
        return boundaries;
    }
    randomTab = () => {
        let tab = [];
        for (let i = 0; i < this.state.chaos; i++)
            tab.push(Math.floor(Math.random() * this.state.size));
        return tab;
    }
    checkWin = () => {
        for (let i = 0; i < this.state.activeList.length; i++)
            if (this.state.activeList[i] === false)
                return false;
        return true;
    }
    componentWillMount() {
        this.generateTab();
        for (let i = 0; i < this.state.size; i++)
            this.state.boundaries.push(this.createBoundaries(i))
        this.interval = setInterval(this.props.updateTime, 1000);

    }
    componentDidMount() {

        const randomTab = this.randomTab();
        for (let i = 0; i < this.state.chaos; i++) {
            this.changeState(randomTab[i]);
            for (let j = 0; j < this.state.complexity; j++) {
                this.changeState(this.state.boundaries[randomTab[i]][j])
            }

        }


    }
    componentDidUpdate() {
        if (this.checkWin()) {
            clearInterval(this.interval);
            setTimeout(this.props.endF, 3000);
        }

    }


    render() {

        return (

            <div className="App">
                <Timer time={this.props.time} />
                <p className="objective">Activate all the levers</p>
                <ListLevers
                    changeState={this.changeState}
                    activeList={this.state.activeList}
                    boundaries={this.state.boundaries}
                    complexity={this.state.complexity}
                    size={this.state.size}
                />

            </div>
        );
    }
}

export default Game;
