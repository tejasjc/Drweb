import React, { Component } from "react";
import {  Row, Col, Skeleton, Divider,notification } from "antd";
import CanvasJSReact from "../js/canvasjs.react";
import CardCss from "./Cards/Card_css";
import CardJs from "./Cards/Card_js";
import CardImg from "./Cards/Card_img";
import CardHtml from "./Cards/Card_Html";
import CardJsAsync from "./Cards/Card_JsAsync";
import CardCutCss from "./Cards/Card_CutCss";
import CardBadReq from "./Cards/Card_BadReq";
import CardNoImport from "./Cards/Card_NoImport";
import CardRblockCss from "./Cards/Card_RblockCss";
import CardRblockJs from "./Cards/Card_RblockJs";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const openNotification = () => {
  notification.open({
    message: 'File Upload Successfull..!!',
    description: 'Your directory will be scanned shortly.',
    duration: 6,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
export class Analysis_count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdata: [],
      isLoading: true,
      errors: null
    };
  }

  fetchUsers() {
    fetch(`http://127.0.0.1:8000/api/getdata/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          countdata: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    openNotification();
    this.fetchUsers();
  }

  render() {
    const { isLoading, countdata, error } = this.state;
    const imgcount=countdata.map(user => user.img_count);
    const csscount=countdata.map(user => user.css_count);
    const jscount=countdata.map(user => user.js_count);
    const htmlcount=countdata.map(user => user.html_count);
    var ic=imgcount[0];
    var cc=csscount[0];
    var jc=jscount[0];
    var hc=htmlcount[0];
    return (
      <div style={{ marginTop: "20px" }}>
        <Row>
          
          <Col span={16} offset={4} style={{padding:"55px"}}>
            {error ? <p>{error.message}</p> : null}

            {!isLoading ? (
              countdata.map(user => {
                const { id, js_count, css_count, html_count ,img_count} = user;
                const options = {
                  animationEnabled: true,
                  animationDuration: 3000,
                  theme: "light2",
                  title: {
                    text: "Basic analysis of project"
                  },
                  axisX: {
                    title: "Files",
                    reversed: true
                  },
                  axisY: {
                    title: "Count",
                    interval: 1
                  },
                  width:800,
                  data: [
                    {
                      type: "bar",
                      dataPoints: [
                        { y: js_count, label: "Js" },
                        { y: css_count, label: "Css" },
                        { y: html_count, label: "HTML" },
                        { y: img_count, label: "Images" }
                      ]
                    }
                  ]
                };
                return (
                  <div key={id}>
                    <CanvasJSChart options={options} />
                  </div>
                );
              })
            ) : (
            
              <Skeleton active />
            )}
          </Col>
         
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col style={{ background: "#f0f2f5", padding: "10px" }}>
            <div>
              <Divider>
                <h1 style={{ fontFamily: "system-ui", textAlign: "center" }}>
                  Let's get started for building a better web.{" "}
                </h1>
                <p style={{ textAlign: "center" }}>
                  Dr.Web has identified following optimizable parameters.
                </p>
              </Divider>
            </div>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "20px" }} >
        <div className="container">
            <Col span={12}>
           <CardCss css_count={cc}/>
            </Col>
            <Col span={12}>
            <CardJs js_count={jc}/>
            </Col>
            </div>
        </Row>
        <Row gutter={16} style={{ marginTop: "20px" }} >
        <div className="container">
            <Col span={12}>
            <CardHtml html_count={hc}/>
            </Col>
            <Col span={12}>
            <CardImg img_count={ic}/>
            </Col>
            </div>
        </Row>
        {/* <Row gutter={16} style={{ marginTop: "20px" }} >
        <div className="container">
            <Col span={12}>
            <CardJsAsync/>
            </Col>
            <Col span={12}>
            <CardCutCss/>
            </Col>
            </div>
        </Row> */}
        <Row style={{ marginTop: "20px" }}>
          <Col style={{ background: "#f0f2f5", padding: "10px" }}>
            <div>
              <Divider>
                <h1 style={{ fontFamily: "system-ui", textAlign: "center" }}>
                With Dr.web, you can give your users the best experience.{" "}
                </h1>
                <p style={{ textAlign: "center" }}>
                  Dr.Web has identified following Recommandation Modules.
                </p>
              </Divider>
            </div>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "20px" }} >
        <div className="container">
            <Col span={12}>
            <CardBadReq/>
            </Col>
            <Col span={12}>
            <CardNoImport/>
            </Col>
            </div>
        </Row>
        <Row gutter={16} style={{ marginTop: "20px" ,marginBottom:"20px"}} >
        <div className="container">
            <Col span={12}>
            <CardRblockCss/>
            </Col>
            <Col span={12}>
            <CardRblockJs />
            </Col>
            </div>
        </Row>
      </div>
    );
  }
}

export default Analysis_count;
