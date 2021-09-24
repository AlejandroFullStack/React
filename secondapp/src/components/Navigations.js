import React, {Component} from "react";
import 'antd/dist/antd.css';
import { Menu , Badge } from 'antd';



class Navigation extends Component{

    constructor(props){
        super(props);
        this.state = {
          title : ''
        };
    
    }
   

    render(){
        return(
            <Menu mode="horizontal" >
                <Menu.Item key="home" >
                    N° Task  <Badge count={this.props.title} ></Badge> 
                </Menu.Item>
                
            </Menu>
        )
        }

}

export default Navigation;