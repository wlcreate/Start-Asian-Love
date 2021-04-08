import ReactPlayer from 'react-player/lazy'

const VideoPlayer = () => {
    return (
        <div className="player-wrapper">
            <ReactPlayer 
                url='https://www.youtube.com/playlist?list=PLGDu7sAVejJ9QmTuI1OazxL8Tolx-PulB'
                // playing={true} // if do not have controls, allows user to play/pause
                controls={true} // for native player controls
                // light={true} // just shows video thumbnail and loads full player on click
                // width='100%'
                // height='100%'
            />
        </div>
    )
}

export default VideoPlayer;