import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateSearchValue} from "../reducers/searchReducer";

function Search() {
    const dispatch = useDispatch()
    const {searchValue} = useSelector(state=> state.searchValue)

    function onChange(event) {
        dispatch(updateSearchValue(event.target.value))
    }
    return(
        <div id="searchWrapper">
            <input
                type="text"
                name="searchBar"
                id="searchBar"
                value={searchValue}
                onChange={onChange}
                placeholder="search for a character"
            />
        </div>
    )
}

export default Search