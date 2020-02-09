import React from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from './contents/Subject';
import TOC from './contents/TOC';
import Content from './contents/Content';

function App() {
  return (
    <div className="App">
      <Subject title="WEB" desc="World Wide Web!!"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is the HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
