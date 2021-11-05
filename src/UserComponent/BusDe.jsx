import React, { Component } from 'react'
import Service from '../components/Service';
import { MdArrowBackIosNew } from 'react-icons/md';

export default class BusDe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bus_det: []
        }
    }

    componentDidMount() {
        Service.getBus().then((res) => {
            this.setState({ bus_det: res.data });
        });
    }


    render() {
        return (
            <>
                <div class="bg-warning d-flex justify-content-center">
                    <div class="">Centurion University of Technology and Management
                    </div>
                </div>
                <a href="/userhome" className="ms-5"><MdArrowBackIosNew />
                </a>
                <div className=" container shadow-lg mt-5 table-data bg-light" >
                    <h2 className="text-center">BUS DETAILS</h2>
                    <div className="row">
                        <table className="table table-striped border-dark  table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Bus_NO</th>
                                    <th>Driver</th>
                                    <th> mobileno</th>
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