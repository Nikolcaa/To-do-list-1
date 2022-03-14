import React, { Component } from 'react';
import '../App.css';

import Form from "./Form"
import List from "./List"
import History from "./History"

//import findByID from "../lib/index";

class App extends Component {

  state = {
    inputValue: "",
    todos: [
      {
        ID: 1,
        value: "Clean the room",
        done: false
      },
      {
        ID: 2,
        value: "Make to-do list",
        done: true
      }
    ],
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      todos: [
        ...this.state.todos,
        {
          ID: Math.random() * 1000,
          value: this.state.inputValue,
          done: false
        }
      ],
      inputValue: ""
    })
  }

  handleClick = (ID) => {
    this.setState({
      todos: [
        ...this.state.todos.map((item) => {
          if (item.ID === ID) {
            return {
              ...item,
              done: !item.done
            };
          }
          return item;
        })
      ]
    })
  }

  filteredTodos() {
    return this.state.todos.filter((item) => {
      if (item.done) return true;
      return false;
    })
  }

  render() {
    return (
      <div className="App">
        <Form
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <List
          todos={this.state.todos}
          handleClick={this.handleClick}
        />
        <hr />
        <History
          todos={this.filteredTodos()}
          Switch={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
