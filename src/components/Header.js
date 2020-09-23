import { Link } from "react-router-dom";
import React from 'react';

function Header(){
  return (
    <React.Fragment>
      <h1>Way 2 Work</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/newsurveyform">Create Survey</Link>
        </li>
        <li>
          <Link to="/surveyList">See Surveys</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;