import {Component} from "react";
import VideoItem from "./VideoItem";



class VideoList extends Component {
    render() {
        if (!this.props.videos.length) {
            return <h4>No results</h4>;
        }
        return (
            <div className="image-list">
                {this.props.videos.slice(1).map((video) => (
                    <VideoItem key={video.id.videoId} video={video} />
                ))}
            </div>
        );
    }

}

export default VideoList