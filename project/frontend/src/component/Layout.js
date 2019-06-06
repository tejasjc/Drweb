import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import "antd/dist/antd.css";

import {Link} from "react-router-dom";
const {
     Content, Footer, Sider,
  } = Layout;
  
  
export class Layouts extends Component {
    constructor(props){
        super(props);
        this.state={
            
            collapsed: true,
        };
    }
      onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }
    

  render() {
        
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
             <Link to="/main"> <Icon type="desktop" />
              <span>Home</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/stat/visulize">
              <Icon type="project" />
              <span>Statistics</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/stat/analysis_count">
              <Icon type="file" />
              <span>Dashboard</span>
              </Link>
              
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ background: '#fff' }}>
           {this.props.children}
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            DR.WEB
          </Footer>
        </Layout>
      </Layout>
 
    );
  }
}

export default Layouts
