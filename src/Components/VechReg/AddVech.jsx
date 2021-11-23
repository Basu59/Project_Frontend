import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class AddVech extends Component {
  constructor(props) {
    super(props);


    this.state = {
        busno: '',
        vechileno:'',
        brand:'',
        modelno:'',
    


    }
    this.changeBusnoHandler = this.changeBusnoHandler.bind(this);
        this.changeVechilenoHandler = this.changeVechilenoHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
         this.saveVech = this.saveVech.bind(this);
  }

  saveVech = (e) => {
    e.preventDefault();

    let vechs = { busno: this.state.busno, modelno: this.state.modelno,brand:this.state.brand,vechileno:this.state.vechileno}
    console.log('vechs =>' + JSON.stringify(vechs));

    Service.createVech(vechs).then(res => {
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

      <>
        <div >

          <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
          <h2 className="text-center text mt-2">Vechile Registration</h2>

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
                <label>Bus Number</label>
                <input placeholder="Busno" name="busno" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body is-invalid rounded"
                  value={this.state.busno} onChange={this.changeBusnoHandler} id="validationError" required/>
              </div>

                <Button
                        className="btn  me-3 mb-2"
                        variant="danger"
                        type="submit"
                        onClick={this.saveVech}
                      >
                        Save
                      </Button>
                <Button
                        className="btn me-4 mb-2"
                        variant="primary"
                        type="submit"
                        style={{ marginLeft: "10px" }}
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
