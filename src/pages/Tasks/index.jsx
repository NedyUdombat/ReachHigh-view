import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Layout from '../../wrappers/Layout/Index';

// styles
import './Tasks.scss';

// actions
import { getUsersTasks } from '../../store/modules/task';

// helpers
import { decodeToken } from '../../api/helpers';

class Tasks extends Component {
  componentDidMount = () => {
    this.props.getUsersTasks();
  };

  render() {
    const { tasks } = this.props;
    const completedTasks = tasks.filter(task => task.completed === true);
    const completionPercentage = (
      (completedTasks.length / tasks.length) *
      100
    ).toFixed(1);
    return (
      <Layout>
        <section className="tasks-section">
          <header className="header d-block d-md-flex">
            <Link to="/goals" className="mr-auto">
              <i className="fas fa-long-arrow-alt-left text-dark fa-2x" />
            </Link>
            <h4 className="mr-auto">
              {decodeToken().email.split('@')[0]}, here&apos;s your list of
              suggested tasks
            </h4>
          </header>

          <div className="container">
            {Number(completionPercentage) === 100 ? (
              <p>Hurray your goals are 100% complete</p>
            ) : (
              <p>You are {completionPercentage}% towards your goal</p>
            )}
          </div>
          <div className="container-fluid card-deck-container">
            <div className="card-deck">
              {tasks.length !== 0 &&
                tasks.map(task => (
                  <div className="card" key={task.id}>
                    <div className="card-header">
                      {task.taskDetails.goal.title}
                    </div>
                    <div className="card-body">
                      <p className="card-text">{task.taskDetails.title}</p>
                    </div>
                    <div className="card-footer bg-white">
                      {task.completed ? (
                        <Link
                          to={`/tasks/${task.taskId}`}
                          className="custom-btn-link btn-success w-100 text-decoration-none"
                        >
                          <i className="fas fa-check-square mr-1" />
                          Completed
                        </Link>
                      ) : (
                        <Link
                          className="custom-btn-link btn-blue text-decoration-none"
                          to={`/tasks/${task.taskId}`}
                        >
                          <i className="fas fa-play-circle mr-1" />
                          <span className="mt-1">Start Task</span>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

const mapStateToProps = ({ task }) => ({
  tasks: task.tasks,
  error: task.error,
});

export default connect(
  mapStateToProps,
  { getUsersTasks },
)(Tasks);
