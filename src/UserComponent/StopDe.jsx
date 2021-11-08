import React, { Component } from 'react'
import Service from '../Components/Service';
import { MdArrowBackIosNew } from 'react-icons/md';

export default class ListStop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stop_det: []
        }
   
    }

    componentDidMount() {
        Service.getStop().then((res) => {
            this.setState({ stop_det: res.data });
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
                    <h2 className="text-center">STOPS DETAILS</h2>
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
