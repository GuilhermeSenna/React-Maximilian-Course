import { Component, useState } from 'react';
import classes from './User.module.css';

// Changed to class
class User extends Component {
  render() {
    // Added the this statement
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
