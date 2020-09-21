import React, { Component } from 'react';

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
          <p>{this.state.myData.name}</p>
        </div>
      )
    }
}

export default Name;