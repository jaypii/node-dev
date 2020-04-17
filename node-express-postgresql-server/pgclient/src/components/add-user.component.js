import React, { Component } from "react";
import UserDataService from "../services/user.service";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      username: "",
      submitted: false
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  saveUser() {
    var data = {
      username: this.state.username,
    };

    UserDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          username: response.data.username,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      id: null,
      username: "",

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newUser}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="uname">User name</label>
                <input
                  type="text"
                  className="form-control"
                  id="uname"
                  required
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  name="uname"
                />
              </div>
  
              <button onClick={this.saveUser} className="btn btn-success">
                Save
              </button>
            </div>
          )}
        </div>
      );
  }
}
