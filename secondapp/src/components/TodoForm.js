import React, {Component} from 'react';
import {Col, Card, Form, Input, Button, Select} from 'antd';

const { Option } = Select;

class TodoForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            title : '',
            responsible: '',
            description: '',
            priority : 'low'
        };
        
    }

    
    onFinish = (values) => {
        console.log('Recibe valores del formulario: ', values);
       
        this.setState({
                title : values.title,
                responsible: values.responsible,
                description: values.description,
                priority : values.priority

        })

        //Viene del Componente App - TodoForm - onAddTodo 
        this.props.onAddTodo(this.state);
    
    };

    
    render() {
        return (
        <div className="todo-form"> 
            <Col>
                <Card title="Add Task" bordered={false} style={{ width: 350 }}>
                    <Form onFinish={ this.onFinish}
                        
                    >
                        <Form.Item
                        name="title"
                        
                        rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                        <Input   placeholder="Title" />
                      </Form.Item>
                      <Form.Item
                        name="responsible"
                        rules={[
                            {
                              required: true,
                            },
                          ]}
                      >
                        <Input  placeholder="Responsible" />
                      </Form.Item>
                      <Form.Item
                        name="description"
                        rules={[
                            {
                              required: true,
                            },
                          ]}
                        
                      >
                        <Input    placeholder="Description" />
                        </Form.Item>
                        <Form.Item
                             name = "priority"
                             //onChange={this.handleInput}
                             rules={[
                                {
                                  required: true,
                                },
                              ]}
                        >
                            <Select  placeholder="Choice priority" >
                            <Option value="low">LOW</Option> 
                            <Option value="medium">MEDIUM</Option> 
                            <Option value="high">HIGH</Option>     
                           </Select> 
                        </Form.Item>
                        
                            
                       
                        <br /> 
                        <Form.Item
                            
                        >
                            <Button type="primary" htmlType="submit"  >
                            Enviar
                            </Button>
                        </Form.Item>
                        <br />
                    </Form>
                </Card>
           </Col>
        </div> 
        )
    }
}


export default TodoForm;