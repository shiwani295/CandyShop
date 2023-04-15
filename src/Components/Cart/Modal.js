import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
//this is only for background overlay
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays"); // this id in index.html file where we show the elements

const Modal = (props) => {
  //console.log(props);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        //we will use this because the html code is not available every place and we want to place above root that by we use portal element(where you want to add html )
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
