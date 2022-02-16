import React from 'react'
import ReactDom from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return (
    <div className={classes.modal}>
        <button onClick={props.onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-cross" width="28" height="28" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M16 4h4v4"></path>
            <path d="M15 9l5 -5"></path>
            <path d="M4 20l5 -5"></path>
            <path d="M16 20h4v-4"></path>
            <path d="M4 4l16 16"></path>
          </svg>
        </button>
        <div className={classes.content}>{props.children}</div>
    </div>
    );
};

const protalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, protalElement)}
      {ReactDom.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        protalElement
      )}
    </React.Fragment>
  )
}

export default Modal;