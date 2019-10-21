import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// components
import Layout from '../../wrappers/Layout/Index';

// styles
import './Goals.scss';

// actions
import { selectGoal, getUserGoals } from '../../store/modules/goal';

let DEFAULT_STATE = {
  goals: [
    { id: 1, name: 'Be a better leader', checked: false, icon: 'fa-users' },
    {
      id: 2,
      name: 'Build my network ',
      checked: false,
      icon: 'fa-copyright',
    },
    { id: 3, name: 'Get a promotion', checked: false, icon: 'fa-chart-line' },
    {
      id: 4,
      name: 'Personal Growth',
      checked: false,
      icon: 'fa-user-tie',
    },
  ],
};
class Goals extends Component {
  state = {};

  componentDidMount = async () => {
    await this.props.getUserGoals();
    const { userGoals } = this.props;
    let goalsForState;
    if (userGoals.length !== 0) {
      for (let userGoal of userGoals) {
        goalsForState = DEFAULT_STATE.goals.map(goal => {
          if (goal.id === userGoal.goalId) {
            goal.checked = true;
            return goal;
          }
          return goal;
        });
      }
      this.setState({
        goals: goalsForState,
      });
    } else {
      this.setState({ goals: DEFAULT_STATE.goals });
    }
  };

  handleSelection = ({ target: { name } }) => {
    let selectedGoal = DEFAULT_STATE.goals.find(goal => goal.name === name);
    this.setState(previousState => {
      const newState = previousState.goals.map(goal => {
        if (goal.name === name) {
          goal.checked = !goal.checked;
          return goal;
        }
        return goal;
      });
      return {
        newState,
      };
    });
    this.props.selectGoal(selectedGoal.id).then(() => {
      if (this.props.error) {
        this.setState({ ...DEFAULT_STATE });
      }
    });
  };

  render() {
    const { goals } = this.state;
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
                {goals &&
                  goals.map(goal => (
                    <li className="list-group-item" key={goal.id}>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={goal.name}
                          name={goal.name}
                          checked={goal.checked}
                          onChange={this.handleSelection}
                        />
                        <label
                          className="custom-control-label w-100 pl-4"
                          htmlFor={goal.name}
                        >
                          <i className={`fas ${goal.icon} fa-lg mr-2`} />
                          {goal.name}
                        </label>
                      </div>
                    </li>
                  ))}
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

const mapStateToProps = ({ goal }) => ({
  userGoals: goal.goals,
  error: goal.error,
});

export default connect(
  mapStateToProps,
  { selectGoal, getUserGoals },
)(Goals);
