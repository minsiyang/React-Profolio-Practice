import React, { Component } from 'react';
import Details from './Details';
import Repos from './Repos';

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      myData: {}
    }
  }

    componentDidMount() {
      const options = {
        "headers": {
          "Authorization": "token e1838b253912a5fd064f0be0427360c17c09b410",
          "Accept": "application/vnd.github.v3+json"
        }
      }
      fetch("https://api.github.com/users/minsiyang", options)
      .then(res => res.json())
      .then(data => this.setState({ myData: data }))
    }
    render() {
      return(
        <div className="header">
          <img src={this.state.myData.avatar_url} alt="Minsi Yang" />
          <p>{this.state.myData.name}</p>
          <a href={this.state.myData.html_url}>{this.state.myData.html_url}</a>
          <Details location={this.state.myData.location} followers={this.state.myData.followers} />
          <Repos url={this.state.myData.repos_url} />
        </div>
      )
    }
}

export default Name;