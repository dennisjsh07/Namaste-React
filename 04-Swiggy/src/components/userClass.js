import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default"
      }
    };

    console.log("child constructor called");
  }

  async componentDidMount() {
    console.log("child component did mount");

    // api call...
    const data = await fetch("https://api.github.com/users/dennisjsh07");
    const json = await data.json();

    this.setState({
        userInfo: json
    })
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("component will unmount");
  }

  render() {
    console.log("child render called");
    // const { name, location } = this.props;
    const {name, location, avatar_url} = this.state.userInfo;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h3>Count: {count}</h3>
        <h3>count2: {count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h3>Name: {name}</h3>
        <h3>Location: Bengaluru</h3>
        <h3>Contact: {location}</h3>
        <img src={avatar_url}/>
      </div>
    );
  }
}

export default UserClass;
