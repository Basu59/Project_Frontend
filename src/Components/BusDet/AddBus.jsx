import React, { Component } from 'react'
import Service from '../Service';

export default class AddBus extends Component {
    constructor(props) {
        super(props);


        this.state = {

            busno: '',
            dname: '',
            mobileno: ''

        }
        this.changeBusnoHandler = this.changeBusnoHandler.bind(this);
        this.changeDnameHandler = this.changeDnameHandler.bind(this);
        this.changeMobilenoHandler = this.changeMobilenoHandler.bind(this);
        this.saveBus = this.saveBus.bind(this);
    }

    saveBus = (e) => {
        e.preventDefault();

        let bus = {  busno: this.state.busno, dname: this.state.dname, mobileno: this.state.mobileno }
        console.log('bus =>' + JSON.stringify(bus));

        Service.createBus(bus).then(res => {
            this.props.history.push('/ListBus');
        });


    }

    changeBusnoHandler(event) {
        this.setState({ busno: event.target.value })
    }

    changeDnameHandler(event) {
        this.setState({ dname: event.target.value })
    }

    changeMobilenoHandler(event) {
        this.setState({ mobileno: event.target.value })
    }



    cancel() {
        this.props.history.push("/ListBus");
    }

    render() {
        return (

            <>
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="card ">

                            <h2 >Bus</h2>
                            <form>
                                <div className="form-floating mb-3">
                                    <input  className="form-control" id="floatingInput" placeholder="RouteNo"
                                        value={this.state.busno} onChange={this.changeBusnoHandler} />
                                    <label for="floatingInput">Bus No</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input  className="form-control" id="floatingInput" placeholder="RouteNo"
                                        value={this.state.dname} onChange={this.changeDnameHandler} />
                                    <label for="floatingInput">dname</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input  className="form-control" id="floatingInput" placeholder="RouteNo"
                                        value={this.state.mobileno} onChange={this.changeMobilenoHandler} />
                                    <label for="floatingInput">mobileno</label>
                                </div>




                                {/* example */}


                                <button className="btn btn-success me-3 mb-2" onClick={this.saveBus}>Save</button>
                                <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>

                    </div>
                </div>



            </>
        );
    }
}
