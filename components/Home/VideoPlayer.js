import ReactPlayer from 'react-player/lazy'
import styles from '../../styles/Home/VideoPlayer.module.css'

const VideoPlayer = () => {
    return (
        <div className={styles.wide}>
            <div className={styles.container}>
                <div className={styles["player-wrapper"]}>
                    <ReactPlayer 
                        url='https://www.youtube.com/playlist?list=PLL9IeepyId7qhVcWFLrXFC0BIKEe6eM5i'
                        // playing={true} // if do not have controls, allows user to play/pause
                        controls={true} // for native player controls
                        // light={true} // just shows video thumbnail and loads full player on click
                        width='100%'
                        height='100%'
                        style={{position: 'absolute', top: 0, left: 0}}
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;