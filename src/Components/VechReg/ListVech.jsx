import React, { Component } from 'react'
import Service from '../Service';
import { RiDeleteBinLine } from "react-icons/ri";
import { MdArrowBackIosNew } from 'react-icons/md';

import { GrUpdate } from "react-icons/gr";

export default class ListVech extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vechile: []
        }
        this.addVech = this.addVech.bind(this);
        this.editVech = this.editVech.bind(this);
        this.deleteVech = this.deleteVech.bind(this);
    }

    deleteVech(id) {
        Service.deleteVech(id).then(res => {
            this.setState({ vechile: this.state.vechile.filter(vechs => vechs.id !== id) });
        });
    }
    editVech(id) {
        this.props.history.push(`/update-vech/${id}`);
    }

    
    componentDidMount() {
        Service.getVech().then((res) => {
            this.setState({ vechile: res.data });
        });
    }
    addVech() {
        this.props.history.push("/addvech");
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
                    <h2 className="text-center">Vechile Details</h2>
                    <button type="button" className="btn btn-primary mb-3" style={{ marginLeft: "920px" }} onClick={this.addVech}>Register</button>
                    <div className="row">
                        <table className="table table-striped border-dark  table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Brand</th>
                                    <th>Model NO</th>
                                    <th>Vechile NO</th>
                                    <th>Bus NO</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>

                            <tbody >
                                {
                                    this.state.vechile.map(
                                        vechs =>
                                            <tr key={vechs.id}>

                                                <td>{vechs.brand}</td>
                                                <td>{vechs.modelno}</td>
                                                <td>{vechs.vechileno}</td>
                                                <td>{vechs.busno}</td>

                                                <td><button onClick={() => this.editVech(vechs.id)} className="btn btn-primary">< GrUpdate/></button>
                                                    <button style={{ marginLeft: "15px" }} onClick={() => this.deleteVech(vechs.id)} className="btn btn-danger"><RiDeleteBinLine/></button>

                                                    
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
