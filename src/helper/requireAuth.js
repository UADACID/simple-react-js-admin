import React, { Component } from 'react'

export default (WrappedComponent) => {
  class RequireAuth extends Component {

    state = {
      isLogin : null
    }

    componentDidMount(){
      setTimeout(()=>{
        const isLogin = false
        if (isLogin === false) {
          this.props.history.push({
            pathname: '/login'
          });
        }
      }, 2000);
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
