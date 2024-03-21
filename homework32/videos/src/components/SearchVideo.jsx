import {Component} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import {getVideosByName} from "../api/youtubeApi";

class SearchVideo extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: '',
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchInput);
        getVideosByName().then((res)=>console.log(res.data))
    }

    render() {
        return(
            <form style={{ width: '100%' }} onSubmit={this.onFormSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Search your videos..."
                    variant="outlined"
                    value={this.state.searchInput}
                    onChange={(event) =>
                        this.setState({
                            searchInput: event.target.value,
                        })
                    }
                    sx={{ width: '90%' }}
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        height: '55px',
                        borderRadius: '0 5px 5px 0',
                        width: '10%',
                    }}
                >
                    {' '}
                    <SearchIcon />
                </Button>
            </form>
        )
    }
}

export default SearchVideo