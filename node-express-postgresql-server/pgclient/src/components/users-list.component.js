import React, { Component } from "react";
import UserDataService from "../services/user.service";

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.retrieveUsers = this.retrieveUsers.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveUser = this.setActiveUser.bind(this);

        this.state = {
            users: [],
            currentUser: null,
            currentIndex: -1,
        };
    }

    componentDidMount() {
        this.retrieveUsers();
    }

    retrieveUsers() {
        UserDataService.getAll()
            .then(response => {
                this.setState({
            users: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    refreshList() {
        this.retrieveUsers();
        this.setState({
            currentUser: null,
            currentIndex: -1
        });
    }

    setActiveUser(user, index) {
        this.setState({
            currentUser: user,
            currentIndex: index
        });
    }

    render() {
        const { users, currentIndex } = this.state;

        return (
            <div className="card mt-3 p-2">
                <div className="row">
                    <div className="col-md-12">
                        <h4>User List</h4>
                        <ul className="list-group">
                            {users &&
                                users.map((user, index) => (
                                <li
                                    className={"list-group-item " 
                                    +(index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveUser(user, index)}
                                    key={index}
                                >
                                {user.id}, {user.username}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}