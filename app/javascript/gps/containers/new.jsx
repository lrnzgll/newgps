import React, { Component } from 'react'
import { isSignedIn } from '../actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createRoute } from '../actions/index';

function validate(values){
    const errors = {};
    if (!values.title) {
        errors.title = "Dai un titolo al tuo itinerario"
    } else if (values.title.length > 10) {
        errors.title = "Perfetto"
    }
    return errors
}

class New extends Component {
    componentWillMount(){
        this.props.isSignedIn()
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.signed_in !== undefined) {
            return true
        } else {
            return false
        }
    }
    onSubmit = (values) => {
        this.props.createRoute((values), (result) => {
            this.props.history.push('/');
            return result;
        })
    }
    render(){ 
        const renderField = ({
            input,
            label,
            type,
            meta: { error }
        }) => (
                <div>
                    <label>{label}</label>
                    <div>
                        <input {...input} placeholder={label} type={type}/>
                    </div>
                    <div>
                        {(error && <span>{error}</span>)}
                    </div>
                </div>
            )
        if (this.props.signed_in == false){
            return (
                <div>
                    <h3 className="text-center">Accedi per creare un nuovo itinerario</h3>
                    <div class="profile-body">
                        <div class="newroute-login">
                        <a href="/users/sign_in">Login</a>
                        <p> oppure, se non hai ancora un account:</p>
                        <a href="/users/sign_up" >Iscriviti</a>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.signed_in == undefined){
            return(
                <div className="region-home">
                    <h2 className="text-center">
                        ...
                    </h2>
                    <div className="region-grid">
                        <div className="content-region-grid">
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-picture"></div>
                                    <div className="ph-picture"></div>
                                    <div className="ph-picture"></div>
                                    <div className="ph-picture"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="newroute-title">
                        <div>
                            <Field
                                name="title"
                                component={renderField}
                                label="titolo"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="newroute-distance">
                        <label>Distanza</label>
                        <div>
                            <Field
                                name="distance"
                                component="input"
                                type="text"
                                placeholder="distanza"
                            />Km
                        </div>
                    </div>
                    <div className="newroute-kind">
                        <label>Tipo</label>
                        <div>
                            <Field name="kind" component="select">
                                <option value="strada">strada</option>
                                <option value="sentiero">sentiero</option>
                                <option value="ciclopedonale">ciclopedonale</option>
                                <option value="ciclabile">ciclabile</option>
                            </Field>
                        </div>
                    </div>
                    <div className="newroute-surface">
                        <label>Superficie</label>
                        <div>
                            <Field name="surface" component="select">
                                <option value="asfalto">asfalto</option>
                                <option value="misto">misto</option>
                                <option value="ghiaia">ghiaia</option>
                                <option value="terra">terra</option>
                            </Field>
                        </div>
                    </div>
                    <div className="newroute-region">
                        <label>Regione</label>
                        <div>
                            <Field name="region" component="select">
                                <option value="1">Abruzzo</option>
                                <option value="2">Basilicata</option>
                                <option value="3">Calabria</option>
                                <option value="4">Campania</option>
                                <option value="5">Emilia Romagna</option>
                                <option value="6">Friuli Venezia Giulia</option>
                                <option value="7">Lazio</option>
                                <option value="8">Liguria</option>
                                <option value="9">Lombardia</option>
                                <option value="10">Marche</option>
                                <option value="11">Molise</option>
                                <option value="12">Piemonte</option>
                                <option value="13">Puglia</option>
                                <option value="14">Sardegna</option>
                                <option value="15">Sicilia</option>
                                <option value="16">Toscana</option>
                                <option value="17">Trentino Alto Adige</option>
                                <option value="18">Umbria</option>
                                <option value="19">Valle D'Aosta</option>
                                <option value="20">Veneto</option>
                            </Field>
                        </div>
                    </div>
                    <div className="newroute-description">
                        <label>Descrizione:</label>
                        <div>
                            <Field name="description" component="textarea" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="newroute-btn">
                            Submit
                        </button>
                    </div>
                </form> 
            </div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        signed_in: state.data.signed_in,
        user: state.data.user
    }
}

function mapDispatchToState(dispatch) {
    return bindActionCreators({
        isSignedIn: isSignedIn,
        createRoute
    }, dispatch)
}
export default reduxForm({ form: 'newrouteForm', validate, touchOnBlur: false })(connect(mapStateToProps, mapDispatchToState)(New))