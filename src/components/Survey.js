import React from "react";
import PropTypes from "prop-types";


function Survey(props){
    return (
      <React.Fragment>
        <h1>{props.surveytitle}</h1>
        <h3>{props.surveydesc}</h3>
        <hr />
      </React.Fragment>
    );
}

Survey.propTypes = {
  surveytitle: PropTypes.string,
  surveydesc: PropTypes.string,
  whenSurveyClicked: PropTypes.func
}

export default Survey; 