import React from 'react';
import { Link } from 'react-router-dom';

// components
import Layout from '../../wrappers/Layout/Index';

// styles
import './index.scss';
import '../../components/Button/Button.scss';

const App = () => {
  return (
    <Layout>
      <section className="main-container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container inner text-center">
            <h1 className="headliner">Take Control of your Career</h1>
            <p className="subtext mt-4">
              Complete short, actionable tasks guaranteed to get you further in
              your career, faster than ever. Ready to get started? Take the
              short quiz below and get your personalized path today.
            </p>
            <div className="d-flex justify-content-center">
              <Link
                className="custom-btn-link btn-border-blue mt-0 mt-md-5 text-decoration-none btn-end"
                to="/auth"
              >
                <i className="fas fa-download fa-lg mr-2 mr-md-3" />
                <span className="font-weight-bold">Get Started</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid pt-4 d-block d-md-flex justify-content-center align-items-center">
          <div className="d-flex pl-md-3 pr-md-2">
            <i className="fas fa-user fa-3x mr-4" />
            <div>
              <p className="w-100">
                I love how quickly I can do the tasks, and see progress.
              </p>
              <p>—Mary Smith</p>
            </div>
          </div>
          <div className="d-flex pl-md-5  pr-md-2">
            <i className="fas fa-user fa-3x mr-4" />
            <div>
              <p className="w-100 w-md-75">
                The best investment I&apos;ve made in myself in ages.
              </p>
              <p>—Ben Johnson</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
