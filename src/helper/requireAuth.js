import React, { Component } from 'react'
import { app as firebase } from '../config/firebase'

export default (WrappedComponent) => {
  class RequireAuth extends Component {

    state = {
      isLogin : null
    }

    componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{
        console.log(user);
        if (user) {
          // User is signed in.
          this.setState({
            isLogin : true
          })
        } else {
          this.props.history.push({
            pathname: '/login'
          });
          // No user is signed in.
        }
      });
    }

    render(){
      const {isLogin} = this.state
      if (isLogin) {
        return <WrappedComponent {...this.props} />
      }else{
        return (
          <div>Loading</div>
        )
      }
    }
  }

  return RequireAuth
}
