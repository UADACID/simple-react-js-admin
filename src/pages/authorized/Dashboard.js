import React , { Component } from 'react'
import { app as firebase } from '../../config/firebase'

export default class Dashboard extends Component {

  handleLogout = () => {
    firebase.auth().signOut()
    .then(()=>{
      // Sign-out successful.
    }).catch((error)=>{
      console.log(error);
      // An error happened.
    });
  }

  render(){
    return (
      <div>
        Dashboard
        <button onClick={()=>this.handleLogout()}>logout</button>
      </div>
    )
  }
}
