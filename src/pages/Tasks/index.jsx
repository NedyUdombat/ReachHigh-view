import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// components
import Layout from '../../wrappers/Layout/Index';

// styles
import './Tasks.scss';
import Button from '../../components/Button/Index';

class Tasks extends Component {
  state = {
    completed: true,
  };
  render() {
    const { completed } = this.state;
    return (
      <Layout>
        <section className="tasks-section">
          <header className="header d-block d-md-flex">
            <Link to="/goals" className="mr-auto">
              <i className="fas fa-long-arrow-alt-left text-dark fa-2x" />
            </Link>
            <h4 className="mr-auto">
              Mary, here&apos;s your list of suggested tasks
            </h4>
          </header>
          <div className="container-fluid card-deck-container">
            <div className="card-deck">
              <div className="card">
                <div className="card-header">Get A Promotion</div>
                <div className="card-body">
                  <p className="card-text">
                    HAVE A CAREER CONVERSATION WITH YOUR MANAGER
                  </p>
                </div>
                <div className="card-footer">
                  {completed ? (
                    <Button className="btn-success w-100">
                      <i className="fas fa-check-square mr-1" />
                      Completed
                    </Button>
                  ) : (
                    <Link
                      className="custom-btn-link btn-blue text-decoration-none"
                      to="#"
                    >
                      <i className="fas fa-play-circle mr-1" />
                      <span className="mt-1">Start Task</span>
                    </Link>
                  )}
                </div>
              </div>
              <div className="card">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <p className="card-text">
                    WRITE YOUR PERSONAL BRAND STATEMENT
                  </p>
                </div>
                <div className="card-footer">
                  <Link
                    className="custom-btn-link btn-border-blue text-decoration-none"
                    to="/tasks/1"
                  >
                    <i className="fas fa-play-circle mr-1" />
                    <span className="mt-1">Start Task</span>
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="card-header">GET A PROMOTION</div>
                <div className="card-body">
                  <p className="card-text">ASK 4 PEERS FOR CANDID FEEDBACK</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <p className="card-text">ASK 4 PEERS FOR CANDID FEEDBACK</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Tasks;
