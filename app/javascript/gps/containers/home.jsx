import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Map from '../containers/map';

class Home extends Component{
    render(){
        return(
            <div className="home-feature1">
                <div className="home-description1">
                    <h3>
                        <p className="text-center">Migliaia di itinerari da scoprire</p>
                    </h3>
                </div>
            </div>
        )
    }
}
export default Home;





