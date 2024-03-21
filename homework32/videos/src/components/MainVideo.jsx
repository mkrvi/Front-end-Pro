import {Component} from "react";
import Grid from "@mui/material/Grid";

class MainVideo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstVideo: null
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.videos !== this.props.videos && this.props.videos.length > 0) {
            this.setState({
                firstVideo: this.props.videos[0].id.videoId
            });
        }
    }

    render() {
        const { firstVideo } = this.state;
        if (!firstVideo) {
            return <></>;
        }

        return (
            <Grid item md={12} xs={12}>
                <div style={{ paddingTop: '30px', height: '80vh' }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${this.state.firstVideo}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <h4>{this.props.videos[0].snippet.title}</h4>
            </Grid>
        )
    }
}
export default MainVideo