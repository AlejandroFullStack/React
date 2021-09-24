import logo from './logo.svg';
import './App.css';
import Navegation from './components/Navigations';
import { Component } from 'react';
import  { todos} from './todos.json';
import {Row, Col, Card, Badge, Button } from 'antd'
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
    if (window.confirm('Are you sure you want delete it?')) {
      this.setState({
        todos: this.state.todos.filter((e,i) =>{ 
          return i !== index
        })
      })    
    }
  }

  render(){
      const  todos = this.state.todos.map((todo,i) => {
        return(
        <div className="card-extras" key={i}>
          <Col span={6} >
          
            <Card title={todo.title} bordered={false} style={{ width: 200 }}>
              <h5><Badge count={todo.priority}></Badge></h5> 
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            
              <Button type ="danger" shape="round"  onClick={this.removeTodo.bind(this,i)}>
                Delete
              </Button>
            </Card>
            
          </Col>
        </div>)
      })


      return (
        <div className="App">
          
          <Navegation 
            title={this.state.todos.length}
          /> 
        
          <Row>
            <Col span={8} type="flex" justify="center" align="center" > 
              <div className="centrar">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo} />
              </div>
            </Col>
            <Col span={16}  type="flex" justify="center"> 
              <Row  >
                  { todos }
              </Row> 
            </Col>
          </Row>
         
        </div>
      );
  }
}

export default App;
