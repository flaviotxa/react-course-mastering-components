import React from 'react';
import './App.css';

import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="App">
    <VideoPlayer />
    <VideoList />
    </div>
  );
}

export default App;
