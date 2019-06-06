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
                  that will boost your web experince.
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
                    <Card title="Html minifier">Minification is the process of removing whitespace and any codethat is not necessary to create a smaller but perfectly valid code file.
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Css Minifier">Minification is the process of removing whitespace and any code that is not necessary to create a smaller but perfectly valid code file.
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Js Optimization"> Delivering less JavaScript can mean less time in network transmission, less spent decompressing code and less time parsing and compiling this JavaScript.</Card>
                  </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: "40px" }}>
                  <Col span={8}>
                    <Card title="Javascripts async">If we want script tags to load asynchronously, or to defer until the rest of the page has finished loading, we can add the async or defer attributes.</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Leverage browser caching">To leverage your browser's caching generally means that you can specify how long web browsers should keep images, CSS and JS stored locally. </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Image Optimization">Finding the optimal settings for your image requires careful analysis along many dimensions: format capabilities, content of encoded data, quality, pixel dimensions, and more.
                    </Card>
                  </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: "40px" }}>
                  <Col span={8}>
                    <Card title="Remove unused CSS">There’s a good chance that website contains CSS that have no impact on current page elements.Unused CSS just adds dead weight to your applications.</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Handle bad requests">Bad Request means that the request you sent to the website server, often something simple like a request to load a web page, was somehow incorrect or corrupted and the server couldn't understand it.</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Render blocking  JS/CSS">Whenever the parser encounters a linked css it has to stop and execute it before it can continue parsing the HTML. In the case of an external css the parser is also forced to wait for the resource to download.
        
        which may incur one or more network roundtrips and delay the time to first render of the page</Card>
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
