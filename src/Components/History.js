import React, { Component } from 'react';

class History extends Component {
    render() {
        return (
            <div className="History">
                <ol>
                    {
                        this.props.todos.map((item) => {
                            return <li
                                className="completed"
                                key={item.ID}
                                onClick={() => {
                                    this.props.Switch(item.ID)
                                }}
                            >
                                {item.value}
                            </li>
                        })
                    }
                </ol>
            </div>
        );
    }
}

export default History;