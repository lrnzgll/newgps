import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { loadRoute, clickedlikebtn} from '../actions/index';
import Map from '../containers/map'



class BRoute extends React.Component{


    componentWillMount(){
        this.props.loadRoute(this.props.match.params.id)
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.loadRoute(this.props.match.params.id)
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
if ((nextProps.route !== undefined) || (nextProps.match.params.id !== this.props.match.params.id)) {
            return "true"
        } else {
            return false
        }
    }

    mode = () =>{
        return (
            this.props.modes.map((mode, index) => {
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
        const gpxroute = () => {
            if (this.props.route.gpx.url != null) {
                return(
                    <a href="/api/v1/downloadgpx/1/" download><button className="route-downloads">Download gpx</button></a>
                )
            }
        }

        const likeclicked = () => {
            this.props.clickedlikebtn(this.props.match.params.id)
        }

        const checkButton = () =>{
            if (this.props.current_user == null) {
                return (
                    < div className="likes-disabled text-right" >
                        {gpxroute()}
                        <button id="like-button" disabled>
                            <i className="fa fa-thumbs-up"><p>Like</p></i>
                            <span>{this.props.route.likes}</span>
                        </button>
                    </div >
                )
            } else {
                return (
                    < div className="likes text-right" >
                        {gpxroute()}
                        <button id="like-button" onClick={likeclicked}>
                            <i className="fa fa-thumbs-up"><p>Like</p></i>
                            <span>{this.props.route.likes}</span>
                        </button>
                    </div >
                )
            }
        }
        if (this.props.route){
            return (
                <div className="route-main">
                    <h3 className="text-center">{this.props.route.title}</h3>
                    {checkButton()}
                    <div className="route-graphs">
                        <div className="route-map">
                            <Map
                                className="map-route"
                            />
                        </div>
                        <div className="route-datas table-users">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Tipo: </td>
                                        <td>{this.mode()}</td>
                                    </tr>
                                    <tr>
                                        <td>Lunghezza: </td>
                                        <td>{this.props.route.distance} Km</td>
                                    </tr>
                                    <tr>
                                        <td>Difficoltà: </td>
                                        <td>{this.props.route.difficulty}</td>
                                    </tr>
                                    <tr>
                                        <td>Percorso: </td>
                                        <td>{this.props.route.kind}</td>
                                    </tr>
                                    <tr>
                                        <td>Fondo: </td>
                                        <td>{this.props.route.surface}</td>
                                    </tr>
                                    <tr>
                                        <td>Autore: </td>
                                        <td>{this.props.user.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Creato: </td>
                                        <td>{this.props.created}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="route-description">
                            <p>{this.props.route.description}</p>
                        </div>
                    </div>
                    <div className="route-comments">
                        comments
                    </div>
                </div>
            )
        } else {
            return(
                <div className="route-main">
                    <h3 className="text-center">...</h3>
                    <div className="route-graphs">
                        <div className="route-map">
                            map
                        </div>
                        <div className="route-datas table-users">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Lunghezza: </td>
                                        <td>... Km</td>
                                    </tr>
                                    <tr>
                                        <td>Difficoltà: </td>
                                        <td>...</td>
                                    </tr>
                                    <tr>
                                        <td>Percorso: </td>
                                        <td>...</td>
                                    </tr>
                                    <tr>
                                        <td>Fondo: </td>
                                        <td>...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="route-description">
                            <p>...</p>
                        </div>
                    </div>
                    <div className="route-comments">
                        comments
                    </div>
                </div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        route: state.data.route,
        user: state.data.user,
        modes: state.data.modes,
        created: state.data.created_at
        }
}

function mapDispatchToState(dispatch) {
    return bindActionCreators({
        loadRoute: loadRoute,
        clickedlikebtn: clickedlikebtn
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToState)(BRoute)




