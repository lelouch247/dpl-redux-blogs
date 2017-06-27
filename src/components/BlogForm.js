import React from 'react';
import { connect } from 'react-redux';

const BlogForm = ({ dispatch }) => {
  let input;

  return (
    <div>
      <h3>Add A Blog</h3>
      <form
        onSubmit={ e => {
          e.preventDefault();
          dispatch({ type: 'ADD_BLOG', blog: input.value})
        }}
    </div>
  )
}

export default From;
