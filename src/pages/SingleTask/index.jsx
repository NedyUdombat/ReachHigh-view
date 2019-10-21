import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Layout from '../../wrappers/Layout/Index';
import Button from '../../components/Button/Index';

// styles
import './SingleTask.scss';

// actions
import { getSingleTask } from '../../store/modules/task';

// helpers
import { decodeToken } from '../../api/helpers';

class SingleTask extends Component {
  componentDidMount = () => {
    this.props.getSingleTask(this.props.match.params.id);
  };

  render() {
    const { task } = this.props;
    return (
      <Layout>
        {task && (
          <section className="single-task-container">
            <header className="header d-block d-md-flex">
              <Link to="/tasks" className="mr-auto">
                <i className="fas fa-long-arrow-alt-left text-dark fa-2x" />
              </Link>
              <h4 className="mr-auto title">
                {task.title}({task.duration} mins)
              </h4>
            </header>
            <div className="d-flex justify-content-start justify-content-md-between my-3 my-md-5">
              <div className="d-flex">
                <i className="fas fa-user fa-2x mr-2" />
                <p className="mt-2">{decodeToken().email}</p>
              </div>
              <div className="d-none d-md-block">
                <Button type="button" className="btn-success mark-btn">
                  <i className="fas fa-check-square mr-1" />
                  Finished this task? Mark as Complete
                </Button>
              </div>
              <Button
                type="button"
                className="btn-success p-0 floating-btn d-block d-md-none"
              >
                <i className="fas fa-check" />
              </Button>
            </div>
            <div className="d-flex justify-content-center">
              <div className="row w-100">
                <div className="col-12 col-md-4 px-0 pl-md-2">
                  <div className="card mb-3">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus rhoncus vulputate sollicitudin. Ut commodo gravida
                      orci vel mattis. Mauris vitae elit dui. Donec enim enim,
                      euismod a felis ac, aliquam varius leo. Etiam pretium
                      pharetra leo, vitae scelerisque est egestas convallis.
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. Vivamus vel egestas ex, et molestie enim.
                      Pellentesque nec mollis libero, vel iaculis mauris. Nullam
                      arcu est, condimentum vitae ornare ac, blandit in dui.
                      Mauris blandit aliquet dolor.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8 px-0 pl-md-2">
                  <div
                    className="video"
                    style={{
                      position: 'relative',
                      paddingBottom: '56.25%' /* 16:9 */,
                      paddingTop: 25,
                      height: 0,
                    }}
                  >
                    <iframe
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '80%',
                      }}
                      src={`https://www.youtube.com/embed/-UB11zOrl4M`}
                      frameBorder="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = ({ task }) => ({
  task: task.task,
  error: task.error,
});

export default connect(
  mapStateToProps,
  { getSingleTask },
)(SingleTask);
