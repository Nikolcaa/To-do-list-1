import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div className="Form">
                <form onSubmit={(e) => this.props.handleSubmit(e)} >
                    <input 
                        onChange={(e) => this.props.handleChange(e)}
                        value={this.props.inputValue}
                        className="formInput"
                    />
                </form>
            </div>
        );
    }
}

export default Form;