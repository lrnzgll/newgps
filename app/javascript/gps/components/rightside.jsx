import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {loadLastRoutes} from '../actions/index';
import { withRouter } from 'react-router-dom';
import  {reduxForm, Field } from 'redux-form';
import { findRoutes } from '../actions/index';
import { Link } from 'react-router-dom';

class RightSide extends Component{
    componentWillMount(){
        this.props.loadLastRoutes()
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.lastroutes  !== undefined){
            return true
        } else{
            return false
        }
    }

    createRoute = () =>{
        this.props.history.push('/new_route');
    }

    clicksearchbtnopen = () => {
        $('#searchbar-input').animate({ width: 'toggle' });
        $("#searchbar-icon").toggle();
        $("#searchbar-cross").toggle(200);
        setTimeout(() => {
            $('#searchbar-input').attr("placeholder", "Trova il tuo itinerario");
        }, 200);
    }

    clicksearchbtnclose = () => {
        $('#searchbar-input').animate({ width: 'toggle' });
        $("#searchbar-cross").toggle();
        $("#searchbar-icon").toggle(200);
    }

    componentDidMount(){
    }
    renderField = (field) => {
        return(
            <div className="searchbar">
                <input
                id="searchbar-input"
                type={field.type}
                {...field.input}
                />
                <i className="fa fa-search" id="searchbar-icon" onClick={this.clicksearchbtnopen} aria-hidden="true"></i>
                <i className="fa fa-times" id="searchbar-cross" onClick={this.clicksearchbtnclose} aria-hidden="true"></i>
            </div>
        )
    }

    onChange = (values) => {
        this.props.findRoutes((values), (result) => {
            this.props.history.push('/search');
            return result;
        }) 
    }
    render(){
        if (this.props.lastroutes){
            return (
                <div className="rightside-menu">
                        <form onKeyUp={this.props.handleSubmit(this.onChange)}>
                            <Field
                                name="searchroute"
                                type="text"
                                component={this.renderField}
                            />                          
                        </form>  
                    <h3 className="text-center">Itinerari Favoriti</h3>
                    < div className="latest-routes">
                        {this.props.favouriteroutes.map((route, index) => {
                            return (
                                <Link key={index} to={`/routes/${route.id}`}><p>{route.title}</p></Link> 
                            )
                        })}
                    </div>
                    <h3 className="text-center">Nuovi itinerari</h3>
                    <div className="favourites-routes">
                        {this.props.lastroutes.map((route, index) => {
                            return (
                                <Link key={index} to={`/routes/${route.id}`}><p >{route.title}</p></Link>
                            )
                        })}
                    </div>
                    <div className="rightbar-options">
                        <br/>
                        <div className="add-icon" onClick={this.createRoute}>
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                </div>
            )
        } else{
            return(
                <div className="rightside-menu">
                    ...
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        lastroutes: state.data.lastroutes,
        favouriteroutes: state.data.favouriteroutes
    }
}

function mapDispatchToState(dispatch) {
    return bindActionCreators({
        loadLastRoutes: loadLastRoutes,
        findRoutes: findRoutes
    }, dispatch)
}


export default withRouter(reduxForm({form: 'searchrouteForm'})(connect(mapStateToProps, mapDispatchToState)(RightSide)));