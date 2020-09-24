import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
// import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';


function SurveyActive (props){

  const firestore = useFirestore();

  function addSurveyResponseToFireStore(event) {
    event.preventDefault();

    props.onClickingSubmit();

    return firestore.collection('surveyResponses').add(
      {
        surveyId: props.survey.id,
        q1answer: event.target.q1answer.value,
        q2answer: event.target.q2answer.value,
        q3answer: event.target.q3answer.value
      }
    );
  }

  return (
    <React.Fragment>
    <h1>{props.surveytitle}</h1>
    <h3>{props.surveydesc}</h3>
    <form onSubmit={addSurveyResponseToFireStore}>
      <select name="q1answer" id="q1answer">
        <option value={props.q1a1}>{props.q1a1}</option>
        <option value={props.q1a2}>{props.q1a2}</option>
        <option value={props.q1a3}>{props.q1a3}</option>
      </select>
      <select name="q2answer" id="q2answer">
        <option value={props.q2a1}>{props.q2a1}</option>
        <option value={props.q2a2}>{props.q2a2}</option>
        <option value={props.q2a3}>{props.q2a3}</option>
      </select>
      <select name="q3answer" id="q3answer">
        <option value={props.q3a1}>{props.q3a1}</option>
        <option value={props.q3a2}>{props.q3a2}</option>
        <option value={props.q3a3}>{props.q3a3}</option>
      </select>
      <button type='submit'>Submit</button>
    </form>
    </React.Fragment>
  )
}

SurveyActive.propTypes = {
  survey: PropTypes.object,
  onClickingSubmit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default SurveyActive;