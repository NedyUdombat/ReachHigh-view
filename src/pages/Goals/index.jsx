import React, { Component } from 'react';

// components
import Layout from '../../wrappers/Layout/Index';

import './Goals.scss';
import { Link } from 'react-router-dom';

class Goals extends Component {
  render() {
    return (
      <Layout>
        <section className="goal-section">
          <h3 className="text-center">What Are Your Main Goals?</h3>
          <h6 className="text-center">
            Tell us what you would like to achieve with ReachHigh
          </h6>
          <section className="checkbox-section d-flex justify-content-center">
            <ul className="list-group">
              <form>
                <li className="list-group-item">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck"
                      name="example1"
                    />
                    <label
                      className="custom-control-label w-100 pl-4"
                      htmlFor="customCheck"
                    >
                      <i className="fas fa-users fa-lg mr-2" />
                      Build My Network
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck"
                      name="example1"
                    />
                    <label
                      className="custom-control-label w-100 pl-4"
                      htmlFor="customCheck"
                    >
                      <i className="fas fa-copyright fa-lg mr-2" />
                      Personal branding
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck"
                      name="example1"
                    />
                    <label
                      className="custom-control-label w-100 pl-4"
                      htmlFor="customCheck"
                    >
                      <i className="fas fa-chart-line fa-lg mr-2" />
                      Get a promotion
                    </label>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck4"
                      name="example1"
                    />
                    <label
                      className="custom-control-label w-100 pl-4"
                      htmlFor="customCheck4"
                    >
                      <i className="fas fa-user-tie fa-lg mr-2" />
                      Be a bettter leader
                    </label>
                  </div>
                </li>
              </form>
            </ul>
          </section>
          <div className="d-flex justify-content-start justify-content-md-end mx-2 mx-md-5 px-0 px-md-5 py-2">
            <Link
              className="custom-btn-link btn-blue mt-0 mt-md-5 text-decoration-none btn-end"
              to="/tasks"
            >
              See My Personalized List
            </Link>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Goals;
