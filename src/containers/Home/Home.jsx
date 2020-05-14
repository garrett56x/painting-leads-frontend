import React from 'react';
import { connect } from 'react-redux';
// import './Home.scss';

class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="page-header header-filter clear-filter homeHero" data-parallax="true">
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 md-offset-2">
                        This is the home page
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {};

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export { connectedHome as Home };
