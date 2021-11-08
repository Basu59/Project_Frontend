import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class AddSche extends Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
          
    busno: '',
    aritime:'',
    deptime:''
    
        }
        this.changeBusNoHandler = this.changeBusNoHandler.bind(this);
        this.changeAritimeHandler = this.changeAritimeHandler.bind(this);
        this.changeDeptimeHandler = this.changeDeptimeHandler.bind(this);
        this.saveSchedule = this.saveSchedule.bind(this);
      }
  
      saveSchedule = (e) =>{
        e.preventDefault();
    
        let schedule = {busno : this.state.busno,aritime:this.state.aritime,deptime:this.state.deptime }
        console.log('schedule =>' + JSON.stringify(schedule));
    
        Service.createSchedule(schedule).then(res =>{
          this.props.history.push('/ListSchedule');
        });
    
        
      }
     changeBusNoHandler(event){
        this.setState({busno: event.target.value})
      }
      
      changeAritimeHandler(event){
        this.setState({aritime: event.target.value})
      }
    
      changeDeptimeHandler(event){
        this.setState({deptime: event.target.value})
      }
     

      
      cancel(){
        this.props.history.push("/ListSchedule");
      }
    
      render() {
        return (
    
          <>
    
          <div>
               <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
                  <h3 className="text-center text mt-2">Schedule</h3>
                  <div className="card-body">
                    <Form striped bordered hover variant="light">
                        <Form.Group controlId="formGridZip">
                          <Form.Label>
                            Enter Bus Number 
                          </Form.Label>
                          
                          <Form.Control
                            value={this.state.busno}
                            onChange={this.changeBusNoHandler}
                          />
                        </Form.Group>
                        
                        <Form.Group controlId="formGridZip">
                          <Form.Label>
                            Enter Arrival Time
                          </Form.Label>
                         
                          <Form.Control
                            type="time"
                            value={this.state.aritime}
                            onChange={this.changeAritimeHandler}
                          />
                        </Form.Group>
                        <Form.Group controlId="formGridZip">
                          <Form.Label>
                            Departure
                          </Form.Label>
                         
                          <Form.Control
                            type="time"
                            value={this.state.deptime}
                            onChange={this.changeDeptimeHandler}
                          />
                        </Form.Group>
                    
                      <Button
                        className="btn-center me-2"
                        variant="danger"
                        type="submit"
                        onClick={this.saveSchedule}
                      >
                        Submit
                      </Button>
                       <Button
                        className="btn-center ms-2"
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
