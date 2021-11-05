import React, { Component } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md';

import Service from '../Components/Service';
export default class RouteDe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route_det: []
        }
    }
    componentDidMount() {
        Service.getRoute().then((res) => {
            this.setState({ route_det: res.data });
        });
    }
    render() {
        return (
            <> <div class="bg-warning d-flex justify-content-center">
                <div class="">Centurion University of Technology and Management
                </div>
            </div>
                <a href="/userhome" className="ms-5"><MdArrowBackIosNew />
                </a>
                <div className=" container shadow-lg mt-5 table-data bg-light" >

                    <h2 className="text-center"> Route</h2>
                    <div className="row">


                        <table className="table table-striped border-dark table-bordered table-hover">

                            <thead className="thead-dark">
                                <tr>
                                    <th>Route_No</th>
                                    <th>Bus_NO</th>
                                    <th>Origin</th>
                                    <th> Destination</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.route_det.map(
                                        route =>
                                            <tr key={route.id}>
                                                <td>{route.routeno}</td>
                                                <td>{route.busno}</td>
                                                <td>{route.origin}</td>
                                                <td>{route.destination}</td>

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
