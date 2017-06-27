import React, { Component } from 'react';
import './App.css';
import BlogList from './BlogList';
import BlogForm from './BlogForm';

class App extends Component {
  render()   {
    return (
      <div className='App'>
        <List />
        <Form />
      </div>
    );
  }
}

export default App;
