import React, {Component} from 'react';

class VideoPlayer extends Component{
    render(){
        return (
            <div className="video-player" >
                <video 
                    src={'https://storage.coverr.co/videos/Gubat%20Beach?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTY1NjYyODYwLCJleHAiOjE1NjU2NjY0NjB9.T-5NcNNWEqJYb1psBsiwFLAlZNN9h_BIUSzSWZ0tMj4'}
                    controls autoPlay loop
                />
                <button>[ ]</button>
            </div>
        );
    }
}

export default VideoPlayer;