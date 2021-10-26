import React, { Component } from 'react'
import Service from '../Service';
export default class ListPassenger extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            passenger:[]
        }
this.addPassenger=this.addPassenger.bind(this);
this.editPassenger=this.editPassenger.bind(this);
this.deletePassenger=this.deletePassenger.bind(this);
}

deletePassenger(id){
    Service.deletePassenger(id).then(res =>{
        this.setState({passenger:this.state.passenger.filter(passenger => passenger.id !==id)});
    });
}
editPassenger(id){  
    this.props.history.push(`/update-passenger/${id}`);
}
componentDidMount(){
        Service.getPassenger().then((res)=>{
            this.setState({passenger:res.data});
        });
    }
addPassenger(){
        this.props.history.push("/AddPassenger");
    }

    render(){
        return(
            <div style={{marginLeft: "30px"}} >
                
                <h2 className="text-center"> List Of Passenger</h2>
                <button type="button" style={{marginLeft: "1200px"}} className="btn btn-primary" onClick={this.addPassenger}>Add Details</button>
                <div className="row">
                

                    <table className="table table-striped table-bordered table-hover">

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
                                   
                                   <td><button  onClick ={() => this.editPassenger(passenger.id)}className="btn btn-primary">Update </button>
                                   <button style={{marginLeft: "15px"}} onClick={ () => this.deletePassenger(passenger.id)} className="btn btn-danger">Delete</button>
                                   {/* <button style={{marginLeft: "15px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
                                   </td>

                                    </tr>
                            )
                        }</tbody>

                    </table>
                </div>
                


            </div>
                
        
        )
    }
}
