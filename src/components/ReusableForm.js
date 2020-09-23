import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='q1'
          placeholder='Enter your first question' />
          <input
            type='text'
            name='q1a1'
            placeholder='First answer' />
          <input
            type='text'
            name='q1a2'
            placeholder='Second answer' />
          <input
            type='text'
            name='q1a3'
            placeholder='Third answer' />
        <input
          type='q2'
          name='location'
          placeholder='Enter your second question' />
          <input
            type='text'
            name='q2a1'
            placeholder='First answer' />
          <input
            type='text'
            name='q2a2'
            placeholder='Second answer' />
          <input
            type='text'
            name='q2a3'
            placeholder='Third answer' />
        <input
          type='text'
          name='q3'
          placeholder='Enter your third question' />
          <input
            type='text'
            name='q3a1'
            placeholder='First answer' />
          <input
            type='text'
            name='q3a2'
            placeholder='Second answer' />
          <input
            type='text'
            name='q3a3'
            placeholder='Third answer' />

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