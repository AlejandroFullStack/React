import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import  { todos} from './todos.json';
//console.log(todos);
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    /* para no perder el scope */
    this.handleAddTodo = this.handleAddTodo.bind(this);
    
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
    
  }

  removeTodo(index){
    this.setState({
      todos: this.state.todos.filter((e,i) =>{ 
        return i !== index
      })
    })    
  }
  render () {
    const  todos = this.state.todos.map((todo,i) => {
      return (
        <div className="col-md-4" key={i} >
          <div className="card mt-4">
            <div className="card-header">
              
                <h5> {todo.title} </h5>
                <span className="badge  badge-pill badge-danger ml-2 ">
                {todo.priority}
                </span>
             
             
            </div>
            <div className="card-body">
              <p> {todo.description} </p>
              <p> {todo.responsible} </p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this,i)}
                >
                  Delete
              </button>
            </div>
          </div> 
        </div>
      )
    }) 
    return (
      <div className="App">
       
          <Navigation 
            title = {this.state.todos.length} 
          />  
         
          <div className="container">
            <div className="row">

              <div className="col-md-4">
              <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo} />
              </div>
              <div className="col-md-8">
                <div className="row">
                  {todos}
                </div>
                <br /> 
                
              </div>
            </div>
            
          </div>

          
      </div>
    );
  }
}

export default App;
