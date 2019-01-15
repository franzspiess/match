import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class Create extends Component {

  state = {
    first: '',
    last: '',
    age: '',
    skill: '',
    email: '',
    password: '',
    sport: 'tennis'
  };



  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)

  }


  handleSubmit = event => {
    event.preventDefault();
    this.props.create(this.state);
    this.setState({
      first: '',
      last: '',
      age: '',
      // skill: '',
      email: '',
      password: ''
    })
  }

  componentDidMount () {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'my_cloud_name',
      uploadPreset: 'my_preset'
    }, (error, result) => { console.log(error, result) })

    document.getElementById("upload_widget").addEventListener("click", function () {
      myWidget.open();
    }, false);
  }


  render () {
    console.log('creat', this.props)
    if (localStorage.getItem('token')) return <Redirect to="" />
    return (

      <div className="create">
        <div className="logo">
          <span className="mylogo">MATCH</span>
        </div>





        <div className="user-create-input">
          <button id="upload_widget" className="cloudinary-button">Upload User Image</button>
          <form className="create-form" onSubmit={this.handleSubmit}>

            <select className="form-select " name="carlist" form="carform" name="sport" onChange={this.handleChange}>
              <option value="tennis">Tennis</option>
              <option value="tabletennis">Table-Tennis</option>
              <option value="badminton">Badminton</option>
              <option value="squash">Squash</option>
            </select>


            <input type="text" className="form-text form-item" placeholder="First Name" name="first" onChange={this.handleChange} />
            <input type="text" className="form-text form-item" placeholder="Last Name" name="last" onChange={this.handleChange} />
            <input type="text" className="form-text form-item" placeholder="Age" name="age" onChange={this.handleChange} />
            {/* <input type="text" className="form-text form-item" placeholder="Skill 1-5" name="skill" onChange={this.handleChange} /> */}

            <input type="text" className="form-text form-item" placeholder="E-Mail" name="email" onChange={this.handleChange} />
            <input type="text" className="form-text form-item" placeholder="password" name="password" onChange={this.handleChange} ></input>
              <input type="submit" className="form-btn"  value="Create User"></input>
          </form>
        </div>





        <Link to='/' className="login-link">
          <span>Already a user ?</span>
          <button className="login-button" onClick={this.props.logout}>LogIn</button>

        </Link>




      </div >





    )

  }
  handleChange (e) {

    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  }

}

export default Create;


{/* </div><
           */}