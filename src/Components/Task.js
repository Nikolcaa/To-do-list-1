import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="Task">
                <span
                    className="todos"
                >
                    {this.props.todo.value}
                </span>
                <button
                    onClick={
                        () => {
                            this.props.handleClick(this.props.todo.ID)
                        }
                    }
                    className="closebtn"
                    style={
                        {
                            display: this.props.todo.done
                                ? "none"
                                : "inline-block"
                        }
                    }
                >
                    X
                </button>
            </div>
        );
    }
}

export default Task;