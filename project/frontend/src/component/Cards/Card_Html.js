import React, { Component } from "react";
import { Card, Popconfirm, Button, message, Badge, Icon, Row, Col,Progress } from "antd";
import ReactCardFlip from "react-card-flip";

export class CardHtml extends Component {
  constructor() {
    super();
    this.state = {
      htmldata:[],
      isFlipped: false,
      isLoading: true,
      errors: null,
      isDone:false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.callImgalgo = this.callImgalgo.bind(this);
  }
  callImgalgo() {
    fetch(`http://127.0.0.1:8000/api/htmlmin/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
         htmldata: data,
          isLoading: false,
          isDone:true
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  handleClick(e) {
    e.preventDefault();
    message.success("Html minification has been initiated.");
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    if(!this.state.isDone)
        {
          this.callImgalgo();
        }
  }
  handleBack(e) {
    e.preventDefault();
    message.error("Operation has been aborted by user.");
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    const text = "Are you sure to initiate this task?";
    const { isLoading,htmldata} = this.state;
    const om=[htmldata];
    var avgc=om.map(d => d.html_comp)[0];
    var n=Number.parseFloat(Number(avgc)).toPrecision(4);
    var k=Number(n);
    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <Card key="front" title="Html Optimization" headStyle={{fontSize:"20px",fontFamily:"system-ui",background:"#2196f3",color:"white"}}>
            <h3>
            Minification is the process of removing whitespace and any code
              that is not necessary to create a smaller but perfectly valid code
              file
            </h3>

            <br />
            <h3>
              There are{" "}
              <Badge
                count={this.props.html_count}
                style={{ backgroundColor: "#52c41a" }}
              />{" "}
              html files in your project that can be optimized.
            </h3>
            <br />

            <Popconfirm
              placement="right"
              title={text}
              onConfirm={this.handleClick}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary">
                <Icon type="rocket" /> Take Action
              </Button>
            </Popconfirm>
          </Card>

          <Card
            key="back"
            title="Html Optimization"
            style={{ width: 556, minHeight: 300 }}
            headStyle={{fontSize:"20px",fontFamily:"system-ui",background:"#2196f3",color:"white"}}
          >
            {!isLoading ? (
             <Row style={{textAlign:"center"}} gutter={16}>
                
                <Col span={12} offset={6} style={{textAlign:"center"}}>
                <Progress type="circle" percent={k}  width={80}/>
                <br></br>
                <hr></hr>
                <h4>Average Compression</h4>
                </Col>
                </Row>
              
            ) : (
              <h3>
               
                <Icon type="loading" /> Loading result...
              </h3>
            )}
        
        <Row style={{marginTop:"40px" , textAlign:"right"}}>
          <Button onClick={this.handleBack}>Back</Button>
          </Row>
        {/* {error ? <p>{error.message}</p> : null} */}
          </Card>
        </ReactCardFlip>
      </div>
    );
  }
}

export default CardHtml;
