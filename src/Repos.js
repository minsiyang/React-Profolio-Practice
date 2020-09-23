import React, {Component} from 'react';

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = { repos: [] }
  }

  componentDidMount(){
    // const link = this.props.url
    fetch("https://api.github.com/users/minsiyang/starred")
    .then(res => res.json())
    .then(data => this.setState({ repos: data}))
  }
  render() {
    return(
      <div className="repos">
        {this.state.repos.map(repo => {
          return (
            <p><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></p>
          )
        })}
      </div>
    )
  }
}
export default Repos;