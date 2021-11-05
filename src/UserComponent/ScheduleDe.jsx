import React, { Component } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md';

import Service from '../Components/Service';
export default class ScheduleDe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timing: []
        }
    }
    componentDidMount() {
        Service.getSchedule().then((res) => {
            this.setState({ timing: res.data });
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
                <div className=" container shadow-lg mt-5 bg-light table-data" >

                    <h2 className="text-center"> Schedule</h2>
                    <div className="row">


                        <table className="table table-striped border-dark table-bordered table-hover">

                            <thead className="thead-dark">
                                <tr>
                                    <th>Bus_NO</th>
                                    <th>Arrival TIme</th>
                                    <th> Depart</th>

                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.timing.map(
                                        schedule =>
                                            <tr key={schedule.id}>

                                                <td>{schedule.busno}</td>
                                                <td>{schedule.aritime}</td>
                                                <td>{schedule.deptime}</td>
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
