import React from 'react'
import classes from './LoginForm.module.css';
import Modal from '../UI/Modal';

function LoginForm(props) {
  return (
    <Modal onClose={props.onClose}>
        <h1>login form comes here.</h1>
    </Modal>
  )
}

export default LoginForm;