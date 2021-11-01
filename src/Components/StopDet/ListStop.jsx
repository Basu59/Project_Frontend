import React, { Component } from 'react'
import Service from '../Service';
import { RiDeleteBinLine } from "react-icons/ri";
import { MdArrowBackIosNew } from 'react-icons/md';

import { GrUpdate } from "react-icons/gr";
import { GrView } from "react-icons/gr";
export default class ListStop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stop_det: []
        }
        this.addStop = this.addStop.bind(this);
        this.editStop = this.editStop.bind(this);
        this.deleteStop = this.deleteStop.bind(this);
    }

    deleteStop(id) {
        Service.deleteStop(id).then(res => {
            this.setState({ stop_det: this.state.stop_det.filter(stop => stop.id !== id) });
        });
    }
    editStop(id) {
        this.props.history.push(`/update-stop/${id}`);
    }

    viewStop(id) {
        this.props.history.push(`/view-stop/${id}`);
    }
    componentDidMount() {
        Service.getStop().then((res) => {
            this.setState({ stop_det: res.data });
        });
    }
    addStop() {
        this.props.history.push("/AddStop");
    }


    render() {
        return (
            <>
                <div class="bg-warning d-flex justify-content-center">
                    <div class="">Centurion University of Technology and Management
                    </div>
                </div>
                <a href="/Home" className="ms-5"><MdArrowBackIosNew />
                </a>
                <div className=" container shadow-lg mt-5 table-data bg-light" >
                    <h2 className="text-center">STOPS DETAILS</h2>
                    <button type="button" style={{ marginLeft: "980px" }} className="btn btn-primary mb-3" onClick={this.addStop}>ADD STOPS</button>
                    <div className="row">
                        <table className="table table-striped border-dark  table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Route NO</th>
                                    <th>Bus_Stops</th>
                                </tr>
                            </thead>

                            <tbody >
                                {
                                    this.state.stop_det.map(
                                        stop =>
                                            <tr key={stop.id}>

                                                <td>{stop.routeno}</td>
                                                <td>{stop.busstops}</td>

                                                <td><button onClick={() => this.editStop(stop.id)} className="btn btn-primary">Update </button>
                                                    <button style={{ marginLeft: "15px" }} onClick={() => this.deleteStop(stop.id)} className="btn btn-danger">Delete</button>

                                                    <button style={{ marginLeft: "15px" }} onClick={() => this.viewStop(stop.id)} className="btn btn-info"><GrView /> </button>
                                                </td>

                                            </tr>
                                    )
                                }</tbody>

                        </table>
                    </div>



                </div>
            </>



    

        )
    }
}
