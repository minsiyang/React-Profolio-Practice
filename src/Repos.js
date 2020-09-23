import React, {Component} from 'react';

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = { repos: [] }
  }

  componentDidMount(){
    // const link = this.props.url
    fetch("https://api.github.com/users/minsiyang/repos")
    .then(res => res.json())
    .then(data => this.setState({ repos: data}))
  }
  render() {
    return(
      <div className="repos">
        {this.state.repos.map(repo => {
          return (
            <p>{repo.full_name}</p>
          )
        })}
      </div>
    )
  }
}
export default Repos;