import React, { Component } from 'react';

function toggledComponent(ToggledComponent) {
    return class extends Component {
        state = {
            isOpen: false
        };

        handleToggle = () => {
            this.setState((prevState) => {
                return {
                    isOpen: !prevState.isOpen
                }
            });
        };

        render() {
            return <ToggledComponent isOpen={this.state.isOpen} {...this.props} handleToggle={this.handleToggle} />
        }
    }
}

export default toggledComponent;