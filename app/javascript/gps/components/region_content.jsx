import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RegionContent extends Component {
    mode = (route) => {
        return(
            route.modes.map((mode, index) => {
                switch (mode.name) {
                    case "piedi":
                        return (
                            <i  className="fas fa-walking bikeicon" aria-hidden="true"></i>
                        )
                        break;
                    case "moto":
                        return (
                            <i  className="fas fa-motorcycle bikeicon" aria-hidden="true"></i>
                        )
                        break;
                    case "auto":
                        return (
                            <i  className="fas fa-car bikeicon" aria-hidden="true"></i>
                        )
                        break;
                    case "bicicletta":
                        return (
                            <i  className="fa fa-bicycle bikeicon" aria-hidden="true"></i>
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
        return(
                <div className="table-users">
                    <div className="table-header">Itinerari in {this.props.region.name}</div>
                    <table>
                        <tbody>
                        <tr>
                            <th>Itinerario</th>
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
                                        <td>{route.route.likes}</td>
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
   }
}
export default RegionContent;






