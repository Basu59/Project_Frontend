import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class UpdatePassenger extends Component {
  constructor(props) {
    super(props);


    this.state = {
      id: this.props.match.params.id,
      

    firstname: '',
    lastname: '',
    emailid:'',
    mobileno:''
    
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
    this.updatePassenger = this.updatePassenger.bind(this);
  }

  componentDidMount() {
    Service.getBusById(this.state.id).then((res) => {
      let passenger = res.data;
      this.setState({
        firstname: passenger.firstname,
        lastname : passenger.lastname ,
        emailid :passenger.emailid,
        mobileno: passenger.mobileno
      });
    });
  }
  updatePassenger = (e) => {
    e.preventDefault();

    let passenger = { firstname: this.state.firstname, lastname: this.state.lastname, emailid: this.state.emailid, mobileno: this.state.mobileno }
    console.log('passenger =>' + JSON.stringify(passenger));
    console.log('id =>' + JSON.stringify(this.state.id));
    Service.updatePassenger(passenger, this.state.id).then(res => {
      this.props.history.push('/ListPassenger');
    });
  }
  changeFirstNameHandler(event){
    this.setState({firstname: event.target.value})
  }

  changeLastNameHandler(event){
    this.setState({lastname: event.target.value})
  }

  changeEmailIdHandler(event){
    this.setState({emailid: event.target.value})
  }

  changeMobileNoHandler(event){
    this.setState({mobileno: event.target.value})
  }
 

  
  cancel(){
    this.props.history.push("/ListPassenger");
  }

  render() {
    return (


      <div>
         <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
            <h3 className="text-center text mt-2">Passenger</h3>
            <div className="card-body">
            <Form>
             <div className="form-group">
                <label>First Name</label>
                <input className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.firstname} onChange={this.changeFirstNameHandler} />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.lastname} onChange={this.changeLastNameHandler} required />
              </div>
              <div className="form-group">
                <label>Email Id</label>
                <input   className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.emailid} onChange={this.changeEmailIdHandler} />
              </div>
              <div className="form-group">
                <label>Mobile No</label>
                <input  className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.mobileno} onChange={this.changeMobileNoHandler} />
              </div>
           
              <button className="btn btn-success me-3 mb-2" onClick={this.updatePassenger}>Save</button>
              <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>
            </Form>
          </div>

        </div>

      </div>

    );
  
  }
}
