import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
// import Button from "../../components/CustomButtons/Button.js";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import './Home.scss';

const styles = {
    largeIcon: {
      width: 60,
      height: 60,
    },
};

class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className="page-header header-filter clear-filter jss187 home-hero" data-parallax="true">
                    <div className="container">
                        <div className="title">
                            <h1>Connecting Homeowners and Painters</h1>
                        </div>
                        {/* <div>
                            <Button color="primary" component={Link} to="/leads">Get Started</Button>
                        </div> */}
                    </div>
                </div>
                <div className="connect">
                    <Typography variant="h4">Connect With Us</Typography>
                    <div className="social-icon-buttons">
                        <IconButton
                            // iconStyle={styles.largeIcon}
                            aria-label="facebook"
                            className="social-icon-button facebook-button"
                            href="https://www.facebook.com/The-Paint-Connection-107887174318905"
                            target="_blank"
                        >
                            <Facebook />
                        </IconButton>
                        <IconButton
                            aria-label="twitter"
                            className="social-icon-button twitter-button"
                            href="https://twitter.com/thepaintconnec1"
                            target="_blank"
                        >
                            <Twitter />
                        </IconButton>
                        <IconButton
                            aria-label="instagram"
                            className="social-icon-button instagram-button"
                            href="https://www.instagram.com/the_paint_connection/"
                            target="_blank"
                        >
                            <Instagram />
                        </IconButton>
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
