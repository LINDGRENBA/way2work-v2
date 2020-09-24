import React from "react";
import PropTypes from "prop-types";


function Survey(props){
    return (
      <React.Fragment>
        <div onClick={() => props.whenSurveyClicked(props.id)}>
          <h1>{props.surveytitle}</h1>
          <h3>{props.surveydesc}</h3>
        </div>
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