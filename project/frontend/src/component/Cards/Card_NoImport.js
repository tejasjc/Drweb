import React, { Component } from 'react';
import {Card,Popconfirm,Button ,message ,Badge, Icon,Row,Col,Progress} from 'antd';
import ReactCardFlip from 'react-card-flip';
export class CardNoImport extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imagedata:[],
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
        fetch(`http://127.0.0.1:8000/api/image/`)
          .then(response => response.json())
          .then(data =>
            this.setState({
              imagedata: data,
              isLoading: false,
              isDone:true
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
          
      }
      handleClick(e) {
        e.preventDefault();
        message.success('No @import css has been initiated.');
        
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        if(!this.state.isDone)
        {
         // this.callImgalgo();
        }
        
      }
      handleBack(e) {
        e.preventDefault();
        message.error("Operation has been aborted by user.");
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
      componentDidMount(){
        
      }
  render() {
    const text = 'Are you sure to initiate this task?';
    const { isLoading, error,imagedata } = this.state;
    const om=[imagedata];
    var avgc=om.map(d => d.avg_comp)[0];
    var n=Number.parseFloat(Number(avgc)).toPrecision(4);
    var k=Number(n);
    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
        <Card key="front" title="No @import css" headStyle={{fontSize:"20px",fontFamily:"system-ui",background:"#ffc107",color:"white"}}>
        <h3>Finding the optimal settings for your image requires careful analysis along many dimensions: format capabilities, content of encoded data, quality, pixel dimensions, and more.</h3>
        
        <br></br>
        <h3>There are <Badge count={this.props.img_count} style={{ backgroundColor: '#52c41a' }} /> images in your project that can be optimized.</h3>
        <br></br>

        <Popconfirm placement="right" title={text} onConfirm={this.handleClick} okText="Yes" cancelText="No">
        <Button style={{background:"#ffc107",color:"white"}}><Icon type="rocket" /> Take Action</Button>
        </Popconfirm>
        </Card>
 
        <Card key="back" title="No @import css" style={{ width: 556,height:300 }} headStyle={{fontSize:"20px",fontFamily:"system-ui",background:"#ffc107",color:"white"}}>
        
          
          {!isLoading ? (
             <Row style={{textAlign:"center"}} gutter={16}>
                <Col span={8} style={{textAlign:"center"}}>
                <Progress type="circle" percent={10} width={80} />
                <br></br>
                <hr></hr>
                <h4>Total Files</h4>
                </Col>
                <Col span={8} style={{textAlign:"center"}}>
                <Progress type="circle" percent={23}  width={80}/>
                <br></br>
                <hr></hr>
                <h4>Size saved</h4>
                </Col>
                <Col span={8} style={{textAlign:"center"}}>
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
        {error ? <p>{error.message}</p> : null}
           
         
        </Card>
      </ReactCardFlip>
      </div>
    )
  }
}

export default CardNoImport;
