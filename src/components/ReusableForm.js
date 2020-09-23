import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="surveytitle"
          placeholder="Enter survey title" /><br /><br />
        <input
          type="text"
          name="surveydesc"
          placeholder="Enter survey description" /><br /><br />
        <input
          type='text'
          name='q1'
          placeholder='Enter your first question' /><br />
          <input
            type='text'
            name='q1a1'
            placeholder='First answer' /><br />
          <input
            type='text'
            name='q1a2'
            placeholder='Second answer' /><br />
          <input
            type='text'
            name='q1a3'
            placeholder='Third answer' /><br />
        <input
          type='text'
          name='q2'
          placeholder='Enter your second question' /><br />
          <input
            type='text'
            name='q2a1'
            placeholder='First answer' /><br />
          <input
            type='text'
            name='q2a2'
            placeholder='Second answer' /><br />
          <input
            type='text'
            name='q2a3'
            placeholder='Third answer' /><br />
        <input
          type='text'
          name='q3'
          placeholder='Enter your third question' /><br />
          <input
            type='text'
            name='q3a1'
            placeholder='First answer' /><br />
          <input
            type='text'
            name='q3a2'
            placeholder='Second answer' /><br />
          <input
            type='text'
            name='q3a3'
            placeholder='Third answer' /><br />

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;