import React, { Component } from 'react'
import Service from '../Service'
import { MdArrowBackIosNew } from 'react-icons/md';
import { RiDeleteBinLine } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

export default class ListBus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bus_det: []
        }
        this.addBus = this.addBus.bind(this);
        this.editBus = this.editBus.bind(this);
        this.deleteBus = this.deleteBus.bind(this);
    }

    deleteBus(id) {
        Service.deleteBus(id).then(res => {
            this.setState({ bus_det: this.state.bus_det.filter(route => route.id !== id) });
        });
    }
    editBus(id) {
        this.props.history.push(`/update-bus/${id}`);
    }
    componentDidMount() {
        Service.getBus().then((res) => {
            this.setState({ bus_det: res.data });
        });
    }
    addBus() {
        this.props.history.push("/AddBus");
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
                    <h2 className="text-center">BUS DETAILS</h2>
                    <button type="button" style={{ marginLeft: "1000px" }} className="btn btn-primary mb-3" onClick={this.addBus}>ADD BUS</button>
                    <div className="row">
                        <table className="table table-striped border-dark  table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Bus_NO</th>
                                    <th>Driver Name</th>
                                    <th> Mobile No</th>
                                
                                    <th>Operation</th>

                                </tr>
                            </thead>

                            <tbody >
                                {
                                    this.state.bus_det.map(
                                        bus =>
                                            <tr key={bus.id}>

                                                <td>{bus.busno}</td>
                                                <td>{bus.drivername}</td>
                                                <td>{bus.mobileno}</td>
                                                <td><button onClick={() => this.editBus(bus.id)} className="btn btn-primary"><GrUpdate/> </button>
                                                    <button style={{ marginLeft: "15px" }} onClick={() => this.deleteBus(bus.id)} className="btn btn-danger"><RiDeleteBinLine/></button>
                                                    {/* <button style={{marginLeft: "15px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
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