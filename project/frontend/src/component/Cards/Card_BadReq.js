import React, { Component } from 'react';
import {Card,Popconfirm,Button ,message ,Badge, Icon,Row,Col,Progress,Table} from 'antd';
import ReactCardFlip from 'react-card-flip';
export class CardBadReq extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hrefdata:[],
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
        fetch(`http://127.0.0.1:8000/api/badreq/`)
          .then(response => response.json())
          .then(data =>
            this.setState({
              hrefdata: data,
              isLoading: false,
              isDone:true
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
          
      }
      handleClick(e) {
        e.preventDefault();
        message.success('Javascript async has been initiated.');
        
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
      componentDidMount(){
        
      }
  render() {
    const text = 'Are you sure to initiate this task?';
    const { isLoading, error,hrefdata } = this.state;
   
    
     var hmap=Object.values(hrefdata);
     var count=hmap[2];
     
     var a=[];
    for(var i=0;i<count;i++){
      var d={};
  d['href']=hmap[0][i];
  d['status']=[hmap[1][i]];
  a.push(d);
    }
    const columns = [
      {
        title: 'Link Name',
        dataIndex: 'href',
        key: 'href',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: status => (
          <span>
            {status.map(tag => {
              let color = tag ==='yes' ? 'green' : 'red';
              let type;
              if (tag === 'yes') {
                type = 'check-circle';
              }else{
                type='close-circle';
              }
              return (
                <Icon type={type} theme="twoTone" twoToneColor={color} />
              );
            })}
          </span>
        ),
      },
      
    ];
    
    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
        <Card key="front" title="Analysis of Bad Requests" headStyle={{fontSize:"20px",fontFamily:"system-ui",background:"#ffc107",color:"white"}}>
        <h3>Bad Request means that the request you sent to the website server, often something simple like a request to load a web page, was somehow incorrect or corrupted and the server couldn't understand it.</h3>
        
        <br></br>
        <br/>
        <br></br>

        <Popconfirm placement="right" title={text} onConfirm={this.handleClick} okText="Yes" cancelText="No">
        <Button style={{background:"#ffc107",color:"white"}}><Icon type="rocket" /> Take Action</Button>
        </Popconfirm>
        </Card>
 
        <Card key="back" title="Analysis of Bad Requests" style={{ width: 556,height:300,overflowY: 'scroll'}} headStyle={{fontSize:"20px",fontFamily:"system-ui",background:"#ffc107",color:"white"}}>
        
          <div style={{height:300,overflowY: 'scroll' }}>
{!isLoading ? (
  <Row style={{textAlign:"center"}} gutter={16}>
    <Col>
    <Table dataSource={a} columns={columns} />;
    </Col>
    
     </Row>
   
 ) : (
   <h3>
    
     <Icon type="loading" /> Loading result...
     <br/>
It will take longer than usual...
   </h3>
 )}
          </div>
          
        
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

export default CardBadReq;
