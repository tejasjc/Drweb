import React, { Component } from "react";
import "../css/homeStyle.css";
import Content from "./Content";
import {notification,Icon } from "antd";
const openNotification = () => {
  notification.open({
    message: 'Welcome to Dr.Web !!',
    description: 'Get to know what is Dr.Web and enjoy the benifits of blazing fast website loading performances.',
    duration: 5,
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
export class main extends Component {
  constructor(props){
    super(props);
this.state={
  status:false
}
  }
  componentDidMount(){
    openNotification();
  }
  render() {
  
    return (
      <div style={{marginTop:'20px'}}>
    {/* <Fileupload upload={this.state.status}/> */}
    <Content path={this.props.match.url} status={this.state.status}/>
    </div>
    );
      
    
    
  }
}

export default main;
