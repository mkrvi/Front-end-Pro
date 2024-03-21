import { Component } from 'react';

class VideoItem extends Component{

    handleVideoClick = (videoId) => {
        this.setState({ id: videoId });
    };

    render() {
        const {
            id: {videoId: src},
        } = this.props.video;

        return (
            <>
            <iframe
                src={`https://www.youtube.com/embed/${src}`}
                width='95%'
                // srcSet={}
                // alt={}
                loading="lazy"
                style={{height: '146px'}}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onClick={this.handleVideoClick}
            />
                <h4>{this.props.video.snippet.title}</h4>
            </>
        )
    }
}
export default VideoItem