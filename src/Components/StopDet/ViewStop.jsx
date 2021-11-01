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
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Bus Stop Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Route No: </label>
                            <div> { this.state.stops.routeno }</div>
                        </div>
                        <div className = "row">
                            <label>Bus Stop: </label>
                            <div> { this.state.stops.busstops }</div>
                        </div>
                        
                    </div>

                </div>

                
            </div>
        )
    }
}

export default ViewStop