import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/homeStyle.css";
import { Button } from "antd";
import "antd/dist/antd.css";
import Particles from "react-particles-js";
export class home extends Component {
  state = {
    size: "large"
  };
  render() {
    return (
      <div>
        <div className="frontpage">
          <div className="front">
            <div className="circle">
              <div className="circle__inner">
                <div className="circle__wrapper">
                  <div className="circle__content">
                    Dr.Web
                    <br />
                    <Button size={this.state.size}>
                      <Link to="/main">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 100
              },
              size: {
                value: 3
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
      </div>
    );
  }
}

export default home;
