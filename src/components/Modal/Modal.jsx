import React from 'react';
import { connect } from 'react-redux';
import { modalActions } from '../../actions/modal';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "../CustomButtons/Button.js";
import modalStyle from "../../assets/jss/material-kit-react/modalStyle.js";
import { Login } from '../../containers/Login/Login';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.props.toggleModal(false)}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <IconButton
              className={classes.modalCloseButton}
              style={{ marginTop: "0px" }}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.props.toggleModal(false)}
            >
              <Close className={classes.modalClose} />
            </IconButton>
            <h2 className={classes.modalTitle}>Login</h2>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}
          >
            <Login />
          </DialogContent>
          <DialogActions
            className={classes.modalFooter + " " + classes.modalFooterCenter}
          >
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { open } = state.modal;
  return { open };
}

const mapDispatchToProps = {
  toggleModal: modalActions.toggle,
}

const styledModal = withStyles(modalStyle)(Modal);
const connectedModal = connect(mapStateToProps, mapDispatchToProps)(styledModal);
export { connectedModal as Modal };
