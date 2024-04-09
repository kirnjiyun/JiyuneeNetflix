import React from "react";

const FilterandSort = () => {
    return (
        <div>
            {" "}
            <form action="#">
                <label for="lang">Sort</label>
                <select name="languages" id="lang"></select>
                <input type="submit" value="Submit" />
            </form>
            <form action="#">
                {" "}
                <label for="genre">Filter</label>{" "}
                <select name="genres" id="genre">
                    <option value="all">ALL</option>{" "}
                    <option value="action">Action</option>{" "}
                    <option value="adventure">Adventure</option>{" "}
                    <option value="animation">Animation</option>{" "}
                    <option value="comedy">Comedy</option>{" "}
                    <option value="crime">Crime</option>{" "}
                    <option value="documentary">Documentary</option>{" "}
                    <option value="drama">Drama</option>{" "}
                    <option value="family">Family</option>{" "}
                    <option value="fantasy">Fantasy</option>{" "}
                    <option value="history">History</option>{" "}
                    <option value="horror">Horror</option>{" "}
                    <option value="music">Music</option>{" "}
                    <option value="mystery">Mystery</option>{" "}
                    <option value="romance">Romance</option>{" "}
                    <option value="science fiction">Science Fiction</option>{" "}
                    <option value="tv movie">TV Movie</option>{" "}
                    <option value="thriller">Thriller</option>{" "}
                    <option value="war">War</option>{" "}
                    <option value="western">Western</option>{" "}
                </select>{" "}
                <input type="submit" value="Submit" />{" "}
            </form>
        </div>
    );
};

export default FilterandSort;
