import React from 'react';
import PropTypes from 'prop-types';
// import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';


function SurveyActive (props){


  return (
    <React.Fragment>
    <h1>{props.surveytitle}</h1>
    {/* <h3>Submitted by: {USER}</h3> */}
    <form class='dropdown'>
      - q1a1 
      - q1a2
      - q1a3
      <select name="q1answer" id="q1answer">
        <option value="{props.q1a1}">{props.q1a1}</option>
      </select>
    </form>

    {/* // Q2 */}

    {/* // Q3 */}
    </React.Fragment>
  )
}



SurveyActive.propTypes = {
  surveytitle: PropTypes.string,
}

export default SurveyActive;