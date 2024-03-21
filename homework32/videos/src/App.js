import { Component } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';

import SearchVideo from "./components/SearchVideo";
import {getVideosByName} from "./api/youtubeApi";
import VideoList from "./components/VideoList";
import MainVideo from "./components/MainVideo";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      videos:[],
    };
  }

  onSearchSubmit = async (query) => {
    const {
      data: { items: videos },
    } = await getVideosByName(query);
    this.setState({ videos });
  };


  render() {
    return (
        <Box sx={{ flexGrow: 1, padding: '10px' }}>
          <Grid container spacing={2}>
            <Grid item md={8} xs={12}>
              <SearchVideo onSearchSubmit={this.onSearchSubmit}/>
                <MainVideo videos = {this.state.videos}/>
            </Grid>
            <Grid item md={4} xs={12}>
              <h3 style={{ marginBottom: '42px' }}>Suggested videos:</h3>
              <ImageList
                  sx={{
                    width: '100%',
                    height: '77vh',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
              >
                <VideoList videos={this.state.videos}/>
              </ImageList>
            </Grid>
          </Grid>
        </Box>
    );
  }
}


