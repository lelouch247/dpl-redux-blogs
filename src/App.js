import React, { Component } from 'react';
import './App.css';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

class App extends Component {
  render()   {
    return (
      <div className='App'>
        <BlogList />
        <BlogForm />
      </div>
    );
  }
}

export default App;
