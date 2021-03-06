  import React from 'react';
import PropTypes from 'prop-types';
import Survey from './Survey';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function SurveyList(props) {

  useFirestoreConnect([
    { collection: 'surveys'}
  ]);

  const surveys = useSelector(state => state.firestore.ordered.surveys);

  if(isLoaded(surveys)) {
    return (
      <React.Fragment>
        {surveys.map((survey) => {
          return <Survey
          whenSurveyClicked = {props.onSurveySelection}
          surveytitle = {survey.surveytitle}
          surveydesc = {survey.surveydesc}
          q1 = {survey.q1}
          q1a1 = {survey.q1a1}
          q1a2 = {survey.q1a2}
          q1a3 = {survey.q1a3}
          q2 = {survey.q2}
          q2a1 = {survey.q2a1}
          q2a2 = {survey.q2a2}
          q2a3 = {survey.q2a3}
          q3 = {survey.q3}
          q3a1 = {survey.q3a1}
          q3a2 = {survey.q3a2}
          q3a3 = {survey.q3a3}
          id={survey.id}
          key={survey.id}
          />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func
};

export default SurveyList;