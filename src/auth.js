import React from 'react';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome user</h1>;
  } else {
    return <Auth />;
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Someone has attempted a login: ' + this.state.value );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.userName} onChange={this.handleChange} />
        </label>
        <input type="password" value={this.state.password} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { isLoggedIn: false };

  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    var content = <LoginForm />


    return (
      <div>
        <LoginForm />
      </div>
    );
  }

}

export default Greeting;
