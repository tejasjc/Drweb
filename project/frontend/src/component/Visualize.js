import React, { Component } from "react";
import { Row, Col, Skeleton, Divider } from "antd";

import { Chart } from "react-google-charts";

export class Visualize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdata: [],
      csdata: [],
      jsdata: [],
      
      htmldata: [],
      isLoading: true,
      errors: null
    };
  }

  fetchUsers() {
    fetch(`http://127.0.0.1:8000/api/htmlstat/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          htmldata: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));

    fetch(`http://127.0.0.1:8000/api/getdata/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          countdata: data
        })
      )
      .catch(error => this.setState({ error }));
      fetch(`http://127.0.0.1:8000/api/cssstat/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          csdata: data
        })
      )
      .catch(error => this.setState({ error }));
      fetch(`http://127.0.0.1:8000/api/jsstat/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          jsdata: data
        })
      )
      .catch(error => this.setState({ error }));
  }
  componentDidMount() {
    //openNotification();
    this.fetchUsers();
  }

  render() {
    const { isLoading, error, csdata, htmldata,jsdata,countdata } = this.state;
    const imgcount = countdata.map(user => user.img_count);
    const csscount = countdata.map(user => user.css_count);
    const jscount = countdata.map(user => user.js_count);
    const htmlcount = countdata.map(user => user.html_count);
    var ic = imgcount[0];
    var cc = csscount[0];
    var jc = jscount[0];
    var hc = htmlcount[0];
    //css graph data
    var cmap = Object.values(htmldata);
    var htmlArray = [];

    var d1 = [];
    d1.push("file");
    d1.push("before");
    d1.push("after");
    htmlArray.push(d1);
    for (var i = 0; i < hc; i++) {
      var data1 = [];

      data1.push(cmap[4][i]);
      data1.push(cmap[0][i]);
      data1.push(cmap[1][i]);
      htmlArray.push(data1);
    }
//css graph data
var cmap2 = Object.values(csdata);
console.log(cmap2);
var cssArray = [];
cssArray.push(d1);
for (var k = 0; k < cc; k++) {
  var data2 = [];

  data2.push(cmap2[4][k]);
  data2.push(cmap2[0][k]);
  data2.push(cmap2[1][k]);
  cssArray.push(data2);
}
//js graph data
var cmap3 = Object.values(jsdata);
var jsArray = [];
jsArray.push(d1);
for (var j = 0; j < jc; j++) {
  var data3 = [];
  data3.push(cmap3[4][j]);
  data3.push(cmap3[0][j]);
  data3.push(cmap3[1][j]);
  jsArray.push(data3);
}

    const options = {
        title: 'After vs before size comparison',
        hAxis: { title: 'File Name' },
        vAxis: { title: 'Size'},
        animation: {
          startup: true,
          easing: 'linear',
          duration: 1500,
        },
    };
    return (
      <div style={{ marginTop: "20px" }}>
          <Row style={{ marginTop: "20px" }}>
          <Col style={{ background: "#f0f2f5", padding: "10px" }}>
            <div>
              <Divider>
                <h1 style={{ fontFamily: "system-ui", textAlign: "center" }}>
                  Statistics of HTML Files.{" "}
                </h1>
                <p style={{ textAlign: "center" }}>
                  The comparison of files before and after applying Dr.Web .
                </p>
              </Divider>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4} style={{ padding: "55px" }}>
            {error ? <p>{error.message}</p> : null}

            {!isLoading ? (
              <Chart
                chartType="Bar"
                data={htmlArray}
               
                options={options}
                width="100%"
                height="400px"
                legendToggle
              />
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
                  Statistics of CSS Files.{" "}
                </h1>
                <p style={{ textAlign: "center" }}>
                  The comparison of files before and after applying Dr.Web .
                </p>
              </Divider>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4} style={{ padding: "55px" }}>
            {error ? <p>{error.message}</p> : null}

            {!isLoading ? (
              <Chart
                chartType="Bar"
                data={cssArray}
               
                options={options}
                width="100%"
                height="400px"
                legendToggle
              />
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
                  Statistics of JAVASCRIPT Files.{" "}
                </h1>
                <p style={{ textAlign: "center" }}>
                  The comparison of files before and after applying Dr.Web .
                </p>
              </Divider>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4} style={{ padding: "55px" }}>
            {error ? <p>{error.message}</p> : null}

            {!isLoading ? (
              <Chart
                chartType="Bar"
                data={jsArray}
               
                options={options}
                width="100%"
                height="400px"
                legendToggle
              />
            ) : (
              <Skeleton active />
            )}
          </Col>
        </Row>
        
        
      </div>
    );
  }
}

export default Visualize;
