import React, { Component } from 'react';

import Task from "./Task"


class List extends Component {

    render() {
        return (
            <div className="List">
                {this.props.todos.map((todo) => {
                    if(todo.done) return null;
                    return (
                        <Task
                            todo={todo}
                            key={todo.ID}
                            handleClick={this.props.handleClick}
                        />
                    )
                })}
            </div>
        );
    }
}

export default List;