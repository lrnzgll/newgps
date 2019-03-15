import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { loadRoutes } from '../actions/index';

class Routes extends Component{

    componentWillMount(){
        this.props.loadRoutes()
    }
    render(){
        return(
            <div>
                <h2 className="text-center">Itinerari</h2>
                { this.props.routes.map((route, index) => {
                        return (
                            <div>
                                routes
                            </div>    
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        routes: state.routes
    }
}


function mapDispatchToState(dispatch) {
    return bindActionCreators({
        loadRoutes: loadRoutes
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(Routes);