import React, { Component } from 'react'
import Service from '../Service'
import { MdArrowBackIosNew } from 'react-icons/md';

export default class ListSchedule extends Component {
    constructor(props) {
        super(props)

        this.state = {
            schedule_det: []
        }
        this.addSchedule = this.addSchedule.bind(this);
        this.editSchedule = this.editSchedule.bind(this);
        this.deleteSchedule = this.deleteSchedule.bind(this);
    }

    deleteSchedule(id) {
        Service.deleteSchedule(id).then(res => {
            this.setState({ schedule_det: this.state.schedule_det.filter(schedule => schedule.id !== id) });
        });
    }
    editSchedule(id) {
        this.props.history.push(`/update-schedule/${id}`);
    }
    componentDidMount() {
        Service.getSchedule().then((res) => {
            this.setState({ schedule_det: res.data });
        });
    }
    addSchedule() {
        this.props.history.push("/AddSche");
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

                    <h2 className="text-center"> SCHEDULE</h2>
                    <button type="button" style={{ marginLeft: "920px" }} className="btn btn-primary mb-3" onClick={this.addSchedule}>Add Schedule</button>
                    <div className="row">


                        <table className="table table-striped border-dark  table-bordered table-hover">

                            <thead className="thead-dark">
                                <tr>

                                    <th>Bus_NO</th>
                                    <th>Arrival Time</th>
                                    <th> Departure Time</th>


                                </tr>
                            </thead>

                            <tbody >
                                {
                                    this.state.schedule_det.map(
                                        schedule =>
                                            <tr key={schedule.id}>

                                                <td>{schedule.busno}</td>
                                                <td>{schedule.aritime}</td>
                                                <td>{schedule.deptime}</td>

                                                <td><button onClick={() => this.editSchedule(schedule.id)} className="btn btn-primary">Update </button>
                                                    <button style={{ marginLeft: "15px" }} onClick={() => this.deleteSchedule(schedule.id)} className="btn btn-danger">Delete</button>
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
