
import React, { Component } from 'react';
import { Link } from '@reach/router'

class LogIn extends Component {

  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)

  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state);
    this.setState({
      email: '',
      password: ''
    })
  }


  render () {

    return (

      <div className="login">
        <div className="logo">
          <span className="mylogo">MATCH</span>
          <Link className="create-account" to="/create">
            <span className="test">Create Account</span>
          </Link>
        </div>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input type="text" className="form-text form-item" placeholder="Username" name="email" onChange={this.handleChange} value={this.state.email} />
          <input type="text" className="form-text form-item" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password}></input>
          <input type="submit" className="form-btn form-item" value="SUBMIT"></input>
        </form>




      </div>




    )

  }

}

export default LogIn;