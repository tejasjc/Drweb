import React, { Component } from "react";
import { Row, Col, Card, Drawer, Button } from "antd";
import logo from "../images/drweblogo.PNG";
import Particles from "react-particles-js";
//import "../css/homeStyle.css";
//import "../css/info.css"
import Fileupload from "./Fileupload";
export class Info extends Component {
    constructor(props){
        super(props);
        this.state = { visible: false };
    }
 
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <Particles
          params={{
            particles: {
              number: {
                value: 150
              },
              size: {
                value: 3
              },
              color: {
                value: "#1565c0"
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
       

        <Row style={{top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: "absolute",
  padding: "40px"}}>
       < Col span={16} offset={4} style={{ textAlign: "center" , marginBottom:"40px"}}>
       <Button
              type="primary"
              shape="round"
              icon="cloud-upload"
              size="large"
              onClick={this.showDrawer}
            >
              Upload Project
            </Button>
       </ Col>

          <Col span={16} offset={4}>
            
            <div style={{
                background: "#2196f3",
                padding: "3px",
                marginTop: "40px"
              }}>
              <Card style={{ textAlign: "center" }}>
                <img alt="Logo" src={logo} width="120" height="100" />
              </Card>
            </div>
            <div
              style={{
                background: "#2196f3",
                padding: "3px",
                marginTop: "40px"
              }}
            >
              <Card
                title="What does Dr.Web do ?"
                description="This is the description"
              >
                <h4 style={{ fontFamily: "system-ui", textAlign: "center" }}>
                  Dr.Web is intelligent platform where you can upload your web
                  application project and Dr.Web will provide you optmiztion
                  that will boost your web experence.
                </h4>
              </Card>
            </div>
            <div
              style={{
                background: "#2196f3",
                padding: "3px",
                marginTop: "40px"
              }}
            >
              <Card title="How does Dr.Web do this ?">
                <Row gutter={16}>
                  <Col span={8}>
                    <Card title="Html minifier">Html minifier</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Css Minifier">Css Minifier</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Js Optimization">Information here...</Card>
                  </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: "40px" }}>
                  <Col span={8}>
                    <Card title="Javascripts async">Information here...</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Leverage browser caching">Information here...</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Image Optimization">Information here...</Card>
                  </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: "40px" }}>
                  <Col span={8}>
                    <Card title="Remove unused CSS">Information here...</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Handle bad requests">Information here...</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Render blocking  JS/CSS">Information here...</Card>
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
        </Row>
        <Drawer
          title="Upload project directory..!!"
          placement="bottom"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}

        >
          <Fileupload />
        </Drawer>
      </div>
    );
  }
}
export default Info;
