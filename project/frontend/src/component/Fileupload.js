import React, { Component } from "react";
import { Row, Col } from "antd";
import { Input, Form, Button } from "antd";
import { Redirect } from "react-router";

import "antd/dist/antd.css";

import axios from "axios";


export class Fileupload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect:false
    };
    // this.updateInput = this.updateInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // updateInput(event){
  //   this.setState({username : event.target.value})
  //   }

  //   handleSubmit(){
  //   console.log('Your input value is: ' + this.state.username)
  //   const data = {
  //    title: this.state.filepath
  //   };

  //   axios.post(`http://127.0.0.1:8000/api/`, { data })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  //   }
 
  handleFormSubmit = event => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    
    console.log(title);
    axios
      .put(`http://127.0.0.1:8000/api/1/`, {
        title: title
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        
        if(res.status===200){
          console.log("File path sent");
          this.setState({redirect:true});
                }
      });
      // this.context.history.push("/stat/analysis_count");
  };
  render() {
    if(this.state.redirect){
      return <Redirect to="/stat/analysis_count"/>;
    }
    return (
      <div>
        <div>
          <Row gutter={24}>
            <Form onSubmit={this.handleFormSubmit}>
              <Col span={14} offset={4}>
                <Form.Item>
                  <Input
                    size="large"
                    placeholder="Paste the project directory here..."
                    allowClear
                   
                    name="title"
                  />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item>
               
                  <Button type="primary" htmlType="submit" 
                  shape="round" icon="cloud-upload" size="large"
                  >
                   Go
                  </Button>
                </Form.Item>
              </Col>
            </Form>
          </Row>
        </div>
      </div>
    );
  }
}

export default Fileupload;
