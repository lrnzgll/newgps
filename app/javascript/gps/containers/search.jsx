import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Search extends Component{

    mode = (route) => {
        return (
            route.modes.map((mode, index) => {
                switch (mode.name) {
                    case "piedi":
                        return (
                            <i className="fas fa-walking bikeicon" aria-hidden="true"></i>
                        )
                        break;
                    case "moto":
                        return (
                            <i className="fas fa-motorcycle bikeicon" aria-hidden="true"></i>
                        )
                        break;
                    case "auto":
                        return (
                            <i className="fas fa-car bikeicon" aria-hidden="true"></i>
                        )
                        break;
                    case "bicicletta":
                        return (
                            <i className="fa fa-bicycle bikeicon" aria-hidden="true"></i>
                        )
                        break;
                    default:
                        return (
                            <td>o</td>
                        )
                }
            })
        )

    }
    render(){
        if (this.props.routes) {
            return(
                <div className="table-users">
                    <div className="table-header">Trova il tuo itinerario</div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Nome</th>
                                <th>Tipo</th>
                                <th>Distanza</th>
                                <th>Likes</th>
                                <th>Visite</th>
                                <th>Utente</th>
                            </tr>

                            {this.props.routes.map((route, index) => {
                                return (
                                    <tr key={index}>
                                        <td><Link to={`/routes/${route.route.id}`}>{route.route.title}</Link></td>
                                        <td>{this.mode(route)}</td>
                                        <td>{route.route.distance} km</td>
                                        <td>{route.route.cached_votes_total}</td>
                                        <td>{route.route.views}</td>
                                        <td>{route.user.name}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else{
            return(
                <div>
                    ...
                </div>
            )
        }
    }
}       
function mapStateToProps(state) {
    return {routes: state.data.routes}
}

export default connect(mapStateToProps, null )(Search)

