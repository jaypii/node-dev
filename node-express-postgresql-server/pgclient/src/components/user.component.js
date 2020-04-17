import React, { Component } from "react";
import UserDataService from "../services/user.service";

export default class User extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.getUser = this.getUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);

        this.state = {
            currentUser: {
                id: null,
                username: "",
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getUser(this.props.match.params.id);
    }

    onChangeUsername(e) {
        const username = e.target.value;

        this.setState(function(prevState) {
            return {
                currentUser: {
                    ...prevState.currentUser,
                    username: username
                }
            };
        });
    }

    getUser(id) {
        UserDataService.get(id)
            .then(response => {
            this.setState({
                currentUser: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    updateUser() {
        UserDataService.update(
        this.state.currentUser.id,
        this.state.currentUser
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "The user was updated successfully!"
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    deleteUser() {    
        UserDataService.delete(this.state.currentUser.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/users')
            })
            .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div>
                {currentUser ? (
                    <div>
                    <h4>User</h4>
                    <form className="card mt-2 p-3">
                        <div className="form-group">
                            <label htmlFor="username">
                                <strong>User Name</strong>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={currentUser.username}
                                onChange={this.onChangeUsername}
                            />
                        </div>
                    </form>
    
                    <button
                        className="badge badge-danger mr-2"
                        onClick={this.deleteUser}
                    >
                        Delete
                    </button>
    
                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={this.updateUser}
                    >
                        Update
                    </button>
                    <p>{this.state.message}</p>
                </div>
                    ) : (
                        <div>
                        <br />
                        <p>Please click on a User...</p>
                    </div>
                    )}
            </div>
        );       // ...
    }
}