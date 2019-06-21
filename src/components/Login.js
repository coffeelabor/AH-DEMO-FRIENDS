import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { Form, Input } from "reactstrap";

import { login } from "./actions/actions";

class Login extends React.Component {
  state = {
    creds: {
      username: "",
      password: ""
      // email: ""
    }
  };
  render() {
    return (
      <div className="login-wrapper">
        <Form>
          <img src="https://i.imgur.com/qp70wn0.png" alt="Logo" />
          <div>
            <Input
              placeholder="username"
              name="username"
              value={this.state.creds.username}
              onChange={this.handleChanges}
              className={
                this.props.error === true ? "error login-input" : "login-input"
              }
              required
            />
            <i className="fas fa-user" />
          </div>
          <div>
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.creds.password}
              onChange={this.handleChanges}
              className={
                this.props.error === true ? "error login-input" : "login-input"
              }
              required
            />
            <i className="fas fa-key" />
          </div>
          <div>
            <div className="btn-login shd" onClick={this.login}>
              {this.props.loggingIn === true ? (
                <Loader
                  type="ThreeDots"
                  color="#fb553b"
                  height={80}
                  width={80}
                />
              ) : (
                <h3>GO</h3>
              )}
            </div>
            <i className="fas fa-sign-in-alt" />
          </div>
        </Form>
        <div className="login-splash" />
      </div>
    );
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    // How do we login?!
    e.preventDefault();
    this.props.login(this.state.creds).then(() => {
      this.props.history.push("/");
    });
  };
}

const mapStateToProps = ({ loggingIn, error }) => ({
  loggingIn,
  error
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
