import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 3000);
      this.setState({ intervalIsSet: interval });
    }
  }

// our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 class="display-4">Fullstack App</h1>
          <p class="lead">Using React, Axios, API, Express &amp; MongoDB</p>
        </div>
        <div className="card p-2">
          <div className="card bg-light p-2 mt-2">
          <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.setState({ message: e.target.value })}
            placeholder="add something in the database"
          />
          <div className="input-group-append" id="button-add">
            <button className="btn btn-success" onClick={() => this.putDataToDB(this.state.message)}>
              ADD
            </button>
          </div>
        </div>
          <div className="input-group mb-2">
            <input
              type="text"
              onChange={(e) => this.setState({ idToUpdate: e.target.value })}
              placeholder="id of item to update here"
              className="form-control"
            />
            <input
              type="text"
              onChange={(e) => this.setState({ updateToApply: e.target.value })}
              placeholder="put new value of the item here"
              className="form-control"
            />
            <div className="input-group-append" id="button-upd">
              <button className="btn btn-primary"
                onClick={() =>
                this.updateDB(this.state.idToUpdate, this.state.updateToApply)
              }
              >
              UPDATE
              </button>
              </div>
            </div>
            <div className="input-group mb-2">
              <input
                type="text"
                onChange={(e) => this.setState({ idToDelete: e.target.value })}
                placeholder="put id of item to delete here"
                className="form-control"
              />
              <div className="input-group-append" id="button-del">
                <button className="btn btn-danger" onClick={() => this.deleteFromDB(this.state.idToDelete)}>
                DELETE
                </button>
              </div>
            </div>

        </div>
        <ul className="list-group list-group-flush">
          {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map((dat) => (
            <li className="list-group-item" key={data.message}>
              <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
              <span style={{ color: 'gray' }}> data: </span>
                {dat.message}
            </li>
          ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default App;