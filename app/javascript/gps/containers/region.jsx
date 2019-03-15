import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadRegionRoutes} from '../actions/index'
import RegionContent from '../components/region_content'

class Region extends Component{
    componentWillMount() {
        this.props.loadRegionRoutes(this.props.match.params.id, "all")     
    }
    componentDidUpdate(prevProps){
        if(this.props.match.params.id !== prevProps.match.params.id ){
            this.props.loadRegionRoutes(this.props.match.params.id, "all")
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if ((nextProps.routes !== undefined) || (nextProps.match.params.id !== this.props.match.params.id)) {
            return true
        } else {
            return false
        }
    }
    mode = (v) => {
        this.props.loadRegionRoutes(this.props.match.params.id, v)
    }

    render(){
        if (this.props.routes && this.props.region){
            return(
                <div className="region-home">
                    <h2 className="text-center">
                        {this.props.region.name}
                    </h2>
                    <div className="region-grid">
                        <div className="map-grid">
                        </div>
                        <div className="region-select-icons">
                            <i className="fa fa-bicycle fa-2x" aria-hidden="true" onClick={() => this.mode("bicicletta")}></i>
                            <i className="fas fa-walking fa-2x" aria-hidden="true" onClick={() => this.mode("piedi")}></i>
                            <i className="fa fa-car fa-2x" aria-hidden="true" onClick={() => this.mode("auto")}></i>
                            <i className="fa fa-motorcycle fa-2x" aria-hidden="true" onClick={() => this.mode("moto")}></i>
                            <i className="fa fa-reply-all fa-2x" aria-hidden="true" onClick={() => this.mode("all")}></i>
                        </div>
                        <div className="content-region-grid">
                            <RegionContent routes={this.props.routes} region={this.props.region} />
                        </div>

                    </div>
                </div>
            )
        } else
        {
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
        }
  
    }
}
function mapStateToProps(state) {
    return {
        routes: state.data.routes,
        region: state.data.region
    }
}

function mapDispatchToState(dispatch) {
    return bindActionCreators({
        loadRegionRoutes: loadRegionRoutes
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(Region);







