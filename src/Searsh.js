import React, { Component } from 'react';
import './App.css';

export class Searsh extends Component {
  state = {
    Search: '',
  };
  handleForm = (e) => {
    this.setState({
      Search: e.target.value,
    });
  };
  searsh = (event) => {
    event.preventDefault();
    this.props.getSearsh(this.state.Search);
  };
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="d-flex  justify-content-center h-100"> 
            <form class="d-flex input justify-content-center" onSubmit={this.searsh}>
              <input
                value={this.state.Search}
                onChange={this.handleForm}
                className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"
              />
               <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Searsh;