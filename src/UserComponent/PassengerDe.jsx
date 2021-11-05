import React, { Component } from 'react'
import Service from '../components/Service';
import { MdArrowBackIosNew } from 'react-icons/md';

export default class PassengerDe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            passenger: []
        }
       
    }


    componentDidMount() {
        Service.getPassenger().then((res) => {
            this.setState({ passenger: res.data });
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

                    <h2 className="text-center"> PASSENGER DETAILS</h2>
                    <div className="row">


                        <table className="table table-striped border-dark  table-bordered table-hover">

                            <thead className="thead-dark">
                                <tr>
                                    <th>First_Name</th>
                                    <th>Last_Name</th>
                                    <th>Email_Id</th>
                                    <th> Mobile_No</th>


                                </tr>
                            </thead>

                            <tbody >
                                {
                                    this.state.passenger.map(
                                        passenger =>
                                            <tr key={passenger.id}>

                                                <td>{passenger.firstname}</td>
                                                <td>{passenger.lastname}</td>
                                                <td>{passenger.emailid}</td>
                                                <td>{passenger.mobileno}</td>
                                              
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
