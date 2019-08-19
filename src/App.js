import React, { Component } from 'react';
import './App.css';

import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: {
        img: 'https://static.videezy.com/system/resources/thumbnails/000/021/578/small/drone-flies-away-beach-4K.jpg',
        name: 'Away-Beach',
        url: 'https://static.videezy.com/system/resources/previews/000/021/578/original/drone-flies-away-beach-4K.mp4'
      }
    }
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <VideoPlayer video={ state.selectedVideo } />
        <VideoList video={ state.videos } />
        <VideoCinema isActive={ false }/>
      </div>
    );
  }
}

export default App;
