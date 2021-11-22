import React, { Component } from 'react'
import Service from '../Service'

class ViewStop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            stops: {}
        }
    }

    componentDidMount(){
        Service.getStopById(this.state.id).then( res => {
            this.setState({stops: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-4 offset-md-3">
                    <h3 className = "text-center">Bus Stop Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Route No:  {this.state.stops.routeno} </label>
                          
                        </div>
                        <div className = "row">
                            <label>Bus Stop:  {this.state.stops.busstops} </label>
                            
                        </div>
                        
                    </div>

                </div>

                
            </div>
        )
    }
}

export default ViewStop