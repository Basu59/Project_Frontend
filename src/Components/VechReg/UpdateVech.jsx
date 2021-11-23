import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class UpdateVech extends Component {
  constructor(props) {
    super(props);


    this.state = {
      id: this.props.match.params.id,
      busno: '',
    vechileno:'',
    brand:'',
    modelno:'',

     
    }
    this.changeBusnoHandler = this.changeBusnoHandler.bind(this);
        this.changeVechilenoHandler = this.changeVechilenoHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
       
    
    this.updateVech = this.updateVech.bind(this);
  }

  componentDidMount() {
    Service.getVechById(this.state.id).then((res) => {
      let vechs = res.data;
      this.setState({
        busno: vechs.busno,
        modelno: vechs.modelno,
        brand:vechs.brand,
        vechileno:vechs.vechileno,
        
      });
    });
  }
  updateVech = (e) => {
    e.preventDefault();

    let vechs = { busno: this.state.busno, modelno: this.state.modelno,brand:this.state.brand,vechileno:this.state.vechileno}
    console.log('vech =>' + JSON.stringify(vechs));
    console.log('id =>' + JSON.stringify(this.state.id));
    Service.updateVech(vechs, this.state.id).then(res => {
      this.props.history.push('/listvech');
    });
  }
  changeBrandHandler(event) {
    this.setState({ brand: event.target.value })
  }

  changeBusnoHandler(event) {
    this.setState({ busno: event.target.value })
  }

changeModelHandler(event){
    this.setState({modelno:event.target.value})
}

changeVechilenoHandler(event){
    this.setState({vechileno:event.target.value})
}

 
  cancel() {
    this.props.history.push("/listvech");
  }

  render() {
    return (


      <div >
        <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
          <h2 className="text-center text mt-2">Update</h2>

            <div className="card-body ">

            <Form>
            
              <div className="form-group">
                <label>Vechile No</label>
                <input placeholder="vechile no" name="vechno" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.vechileno} onChange={this.changeVechilenoHandler} id="validationError" required/>
              </div>

              <div className="form-group">
                <label>Brand</label>
                <input placeholder="Brand" name="brand" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body is-invalid rounded"
                  value={this.state.brand} onChange={this.changeBrandHandler} id="validationError" required/>
              </div>

              <div className="form-group">
                <label>Model Number</label>
                <input placeholder="model number" name="model number" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body is-invalid rounded"
                  value={this.state.modelno} onChange={this.changeModelHandler} id="validationError" required/>
              </div>
             
              <div className="form-group">
                <label>Bus No</label>
                <input placeholder="Busno" name="busno" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body is-invalid rounded"
                  value={this.state.busno} onChange={this.changeBusnoHandler} id="validationError" required/>
              </div>
           
              <button className="btn btn-success me-3 mb-2" onClick={this.updateVech}>Save</button>
              <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>
            </Form>
          </div>

        </div>

      </div>

    );
  }
}
