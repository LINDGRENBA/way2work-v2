import React from 'react';
import Signin from './Signin';
import Header from './Header';
import NewSurveyForm from './NewSurveyForm';
// import Survey from './Survey';
import SurveyList from './SurveyList';
import SurveyControl from './SurveyControl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <SurveyControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
