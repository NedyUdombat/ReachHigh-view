import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// component
import Layout from '../../wrappers/Layout/Index';

// styles
import './Authentication.scss';
import Button from '../../components/Button/Index';

class Authentication extends Component {
  state = {
    registerState: true,
  };

  toggleDisplay = () => {
    const { registerState } = this.state;
    this.setState(previousState => ({
      ...previousState,
      registerState: !registerState,
    }));
  };
  render() {
    const { registerState } = this.state;
    return (
      <Layout>
        <h3 className="text-center mt-3 mt-md-3 auth-title">
          Sign Up To See & Save Your Goals
        </h3>
        <section className="d-flex justify-content-center">
          <div className="card auth-card">
            <div className="card-body">
              {registerState ? (
                <form className="registration-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      aria-describedby="fullNameHelp"
                      placeholder="Full Name"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We&apos;ll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      aria-describedby="usernameHelp"
                      placeholder="Username"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We&apos;ll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We&apos;ll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We&apos;ll never share your email with anyone else.
                    </small>
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We&apos;ll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      I agree to the <Link to="#">Terms of Use</Link> and{' '}
                      <Link to="#">Privacy Policy</Link>
                    </label>
                  </div>
                  <Button
                    type="button"
                    className="custom-btn btn-blue w-100 my-1"
                    value="SUBMIT"
                  />
                  <div className="d-flex switch-state-div justify-content-center">
                    Already have an account?
                    <Button
                      value="Login"
                      className="min-btn"
                      onClick={this.toggleDisplay}
                    />
                  </div>
                </form>
              ) : (
                <form className="authentication-form">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We&apos;ll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We&apos;ll never share your email with anyone else.
                    </small>
                  </div>
                  <Button
                    type="button"
                    className="custom-btn btn-blue w-100"
                    value="Continue"
                  />
                  <div className="d-flex switch-state-div justify-content-center">
                    Don&apos;t have an account?
                    <Button
                      value="Register"
                      className="min-btn"
                      onClick={this.toggleDisplay}
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Authentication;
