import React, { Component } from 'react';
import {Card,Popconfirm,Button ,message , Icon,Row,Col,Table} from 'antd';
import ReactCardFlip from 'react-card-flip';
export class CardNoImport extends Component {
    constructor(props) {
        super(props);
        this.state = {
          importdata:[],
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
        fetch(`http://127.0.0.1:8000/api/noimport/`)
          .then(response => response.json())
          .then(data =>
            this.setState({
              importdata: data,
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
    const { isLoading, error,importdata } = this.state;
    var hmap=Object.values(importdata);
    var count=hmap[2];
    
    var a=[];
   for(var i=0;i<count;i++){
     var d={};
 d['file']=hmap[0][i];
 d['status']=[hmap[1][i]];
 a.push(d);
   }
   const columns = [
     {
       title: 'File Name',
       dataIndex: 'file',
       key: 'file',
     },
     {
       title: '@import',
       dataIndex: 'status',
       key: 'status',
       render: status => (
         <span>
           {status.map(tag => {
             let color = tag ==='yes' ? 'red' : 'green';
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
        <Card key="front" title="No @import css" headStyle={{fontSize:"20px",fontFamily:"system-ui",background:"#ffc107",color:"white"}}>
        <h3>The CSS @import function makes it possible to include external CSS files in a document.CSS @import is notorious for loading every single imported file separately instead of paralleled.</h3>
        
        
        <h3>The browser of the visitor has to wait for every imported file to load instead of being able to load all your CSS files at once.</h3>
       <br/>

        <Popconfirm placement="right" title={text} onConfirm={this.handleClick} okText="Yes" cancelText="No">
        <Button style={{background:"#ffc107",color:"white"}}><Icon type="rocket" /> Take Action</Button>
        </Popconfirm>
        </Card>
 
        <Card key="back" title="No @import css" style={{ width: 556,height:300,overflowY: 'scroll' }} headStyle={{fontSize:"20px",fontFamily:"system-ui",background:"#ffc107",color:"white"}}>
        
          
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

export default CardNoImport;
