import React, { Component } from 'react';

// component
import Layout from '../../wrappers/Layout/Index';
import Register from '../../components/Register';
import Button from '../../components/Button/Index';

// styles
import './Authentication.scss';

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
                <Register />
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
