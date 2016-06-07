import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount(){
    TodoStore.on("change", () =>{
      this.setState({
        todos: TodoStore.getAll()
      });
    });
  }

  createTodo(){
    var text = this.refs.input.getDOMNode().value
    TodoActions.createTodo(text);
  }



  render(){
    const { todos }  = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>
    });

    return (
    <div>
    <input ref="input" />
    <button onClick={this.createTodo.bind(this)}>Create Todo</button>
    <h1>Todos</h1>
    <ul>{TodoComponents}</ul>
    </div>
    );
  }
}