/* @flow */
import React, { Component } from 'react';
import { app as firebase } from '../../config/firebase'
import LoginForm from '../../components/LoginForm'


class Login extends Component {
  handleSubmit = (values) => {
    console.log(values);
    const { email, password } = values
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // ...
    });

  }
  render() {
    return (
      <div>
        <LoginForm
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Login
