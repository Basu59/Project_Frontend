import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class Route extends Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
          
    routeno: '',
    busno: '',
    origin:'',
    destination:''
    
        }
        this.changeRouteNoHandler = this.changeRouteNoHandler.bind(this);
        this.changeBusNoHandler = this.changeBusNoHandler.bind(this);
        this.changeOriginHandler = this.changeOriginHandler.bind(this);
        this.changeDestinationHandler = this.changeDestinationHandler.bind(this);
        this.saveRoute = this.saveRoute.bind(this);
      }
  
      saveRoute = (e) =>{
        e.preventDefault();
    
        let route = {routeno: this.state.routeno,busno : this.state.busno,origin:this.state.origin,destination:this.state.destination }
        console.log('route =>' + JSON.stringify(route));
    
        Service.createRoute(route).then(res =>{
          this.props.history.push('/ListRoute');
        });
    
        
      }
      changeRouteNoHandler(event){
        this.setState({routeno: event.target.value})
      }
    
      changeBusNoHandler(event){
        this.setState({busno: event.target.value})
      }
   
      changeOriginHandler(event){
        this.setState({origin: event.target.value})
      }
    
      changeDestinationHandler(event){
        this.setState({destination: event.target.value})
      }
     

      
      cancel(){
        this.props.history.push("/ListRoute");
      }
    
      render() {
        return (
    
    <>
    
    <div>
         <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
            <h3 className="text-center text mt-2">Route</h3>
            <div className="card-body">
              <Form striped bordered hover variant="light">
                <Row className="mb-3">
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Route number
                    </Form.Label>
                    
                    <Form.Control
                      type="text"
                      value={this.state.routeno}
                      onChange={this.changeRouteNoHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Bus number 
                    </Form.Label>
                   
                    <Form.Control
                      type="number"
                      value={this.state.busno}
                      onChange={this.changeBusNoHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Origin
                    </Form.Label>
                   
                    <Form.Control
                      type="text"
                      value={this.state.origin}
                      onChange={this.changeOriginHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Deatination
                    </Form.Label>
                   
                    <Form.Control
                      type="text"
                      value={this.state.destination}
                      onChange={this.changeDestinationHandler}
                    />
                  </Form.Group>
                </Row>
                <Button
                  className="btn-center me-2"
                  variant="primary"
                  type="submit"
                  onClick={this.saveRoute}
                >
                  Submit
                </Button>
                 <Button
                  className="btn-center"
                  variant="primary"
                  type="submit"
                  onClick={this.cancel.bind(this)}
                > Cancel</Button>
              </Form>
            </div>
          </div>
        </div>
      
  
          </>
        );
      }
}
