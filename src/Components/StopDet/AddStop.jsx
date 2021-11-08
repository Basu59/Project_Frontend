import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class AddStop extends Component {
  constructor(props) {
    super(props);


    this.state = {
      routeno: '',
      busstops: '',


    }
    this.changeRouteNoHandler = this.changeRouteNoHandler.bind(this);
    this.changeBusstopHandler = this.changeBusstopHandler.bind(this);
    this.saveStop = this.saveStop.bind(this);
  }

  saveStop = (e) => {
    e.preventDefault();

    let stop = { routeno: this.state.routeno, busstops: this.state.busstops }
    console.log('stop =>' + JSON.stringify(stop));

    Service.createStop(stop).then(res => {
      this.props.history.push('/ListStop');
    });


  }

  changeRouteNoHandler(event) {
    this.setState({ routeno: event.target.value })
  }

  changeBusstopHandler(event) {
    this.setState({ busstops: event.target.value })
  }




  cancel() {
    this.props.history.push("/ListRoute");
  }

  render() {
    return (

      <>
        <div >

          <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
          <h2 className="text-center text mt-2">Stop</h2>

            <div className="card-body ">

              <Form>

                <div class="form-floating mb-3">
                  <label for="floatingInput">Route No</label>
                  <input type="RouteNo" class="form-control" id="floatingInput" placeholder="RouteNo"
                    value={this.state.routeno} onChange={this.changeRouteNoHandler} />

                </div>

                <div class="form-floating mb-3">
                  <label for="floatingInput">Bus Stops</label>
                  <input type="RouteNo" class="form-control" id="floatingInput" placeholder="Bus stops"
                    value={this.state.busstops} onChange={this.changeBusstopHandler} />

                </div>


                <Button
                        className="btn  me-3 mb-2"
                        variant="danger"
                        type="submit"
                        onClick={this.saveStop}
                      >
                        Save
                      </Button>
                <Button
                        className="btn me-4 mb-2"
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
