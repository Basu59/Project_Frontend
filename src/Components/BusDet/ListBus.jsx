import React, { Component } from 'react'
import Service from '../Service';
export default class ListBus extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            bus_det:[]
        }
this.addBus=this.addBus.bind(this);
this.editBus=this.editBus.bind(this);
this.deleteBus=this.deleteBus.bind(this);
}

deleteBus(id){
    Service.deleteBus(id).then(res =>{
        this.setState({bus_det:this.state.bus_det.filter(bus => bus.id !==id)});
    });
}
editBus(id){  
    this.props.history.push(`/update-bus/${id}`);
}
componentDidMount(){
        Service.getBus().then((res)=>{
            this.setState({bus_det:res.data});
        });
    }
addBus(){
        this.props.history.push("/AddBus");
    }

    render(){
        return(
            <> <div class="bg-warning d-flex justify-content-center">

            <div class="">Centurion University of Technology and Management
            </div>

        </div>
            <div className=" container shadow-lg mt-5 table-data" >
                
                <h2 className="text-center"> Bus</h2>
                <button type="button" style={{marginLeft: "1150px" }} className="btn btn-primary mb-3" onClick={this.addBus}>Add Bus</button>
                <div className="row">
                

                    <table className="table table-striped  table-bordered table-hover">

                        <thead className="thead-dark">
                            <tr>
                                <th>Bus_NO</th>
                                <th>Driver</th>
                                <th> Mobile</th>

                                
                            </tr>
                        </thead>

                        <tbody >
                        {
                            this.state.bus_det.map(
                                bus =>
                                <tr key={bus.id}>
                                   <td>{bus.busno}</td>
                                   <td>{bus.dname}</td>
                                   <td>{bus.mobileno}</td>
                                   
                                   <td><button  onClick ={() => this.editBus(bus.id)}className="btn btn-primary">Update </button>
                                   <button style={{marginLeft: "15px"}} onClick={ () => this.deleteBus(bus.id)} className="btn btn-danger">Delete</button>
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
