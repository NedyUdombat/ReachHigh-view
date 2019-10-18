import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

// component
import Button from '../../components/Button/Index';

// actions
import { register } from '../../store/modules/auth';

class Register extends Component {
  state = {
    userDetails: {
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    redirect: false,
    loading: false,
    disabled: false,
  };

  handleChange = ({ target }) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [target.name]: target.value,
      },
    });
  };

  handleRegistration = () => {
    event.preventDefault();
    this.setState({
      ...this.state,
      loading: true,
      disabled: true,
    });
    this.props
      .register({
        ...this.state.userDetails,
      })
      .then(() => {
        this.setState({
          loading: false,
          redirect: true,
          disabled: false,
        });
      });
  };

  render() {
    const { redirect, loading, disabled } = this.state;
    if (redirect) {
      return <Redirect push to="/goals" />;
    }
    return (
      <div>
        {loading && (
          <div className="loader d-flex justify-content-center align-items-center">
            <i className="fas fa-spinner fa-pulse fa-10x text-white" />
          </div>
        )}
        <form
          className="registration-form"
          onSubmit={this.handleRegistration}
          autoComplete="on"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              aria-describedby="fullNameHelp"
              placeholder="Full Name*"
              disabled={disabled}
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              aria-describedby="usernameHelp"
              placeholder="Username*"
              required
              disabled={disabled}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email*"
              required
              disabled={disabled}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password*"
              pattern="(?=.*[a-z]).{6,}"
              title="Must be 6 characters or more and contain at least lowercase letter"
              required
              disabled={disabled}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password*"
              required
              disabled={disabled}
              onChange={this.handleChange}
            />
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
            type="submit"
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
      </div>
    );
  }
}

export default connect(
  null,
  { register },
)(Register);
