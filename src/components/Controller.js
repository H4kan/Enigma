
import React, { Component } from 'react';

class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 16,
            chaos: 50,
            complexity: 2,
        }
    }
    componentDidUpdate() {

    }
    render() {
        if (this.props.type === 'size')
            return (

                <section>
                    <p>Size: </p>
                    <div className="control">
                        <button onClick={() => {
                            if (this.state.size > 9) {
                                this.props.setter(this.state.size - 1, 'size');
                                this.setState({
                                    size: this.state.size - 1,
                                })
                            }
                        }
                        }>-</button>
                        <span>{this.state.size}</span>
                        <button onClick={() => {
                            if (this.state.size < 25) {
                                this.props.setter(this.state.size + 1, 'size');
                                this.setState({
                                    size: this.state.size + 1,
                                })
                            }
                        }
                        }>+</button>
                    </div>
                </section >
            );
        else if (this.props.type === 'chaos')
            return (

                <section>
                    <p>Chaos:</p>
                    <div className="control">
                        <button onClick={() => {
                            if (this.state.chaos > 20) {
                                this.props.setter(this.state.chaos - 5, 'chaos');
                                this.setState({
                                    chaos: this.state.chaos - 5,
                                });
                            }
                        }
                        }>-</button>
                        <span>{this.state.chaos}</span>
                        <button onClick={() => {
                            if (this.state.chaos < 2000) {
                                this.props.setter(this.state.chaos + 5, 'chaos');
                                this.setState({
                                    chaos: this.state.chaos + 5,
                                })
                            }
                        }
                        }>+</button>
                    </div>
                </section>
            );
        else return (

            <section>
                <p>Complexity:</p>
                <div className="control">
                    <button onClick={() => {
                        if (this.state.complexity > 2) {
                            this.props.setter(this.state.complexity - 1, 'complexity');
                            this.setState({
                                complexity: this.state.complexity - 1,
                            })
                        }
                    }}>-</button>
                    <span>{this.state.complexity}</span>
                    <button onClick={() => {
                        if (this.state.complexity < 7) {
                            this.props.setter(this.state.complexity + 1, 'complexity');
                            this.setState({
                                complexity: this.state.complexity + 1,
                            })
                        }
                    }
                    }>+</button>
                </div>
            </section>
        )

    }
}

export default Controller;