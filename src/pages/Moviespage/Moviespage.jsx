import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import * as S from "./moviespage.styled";
import ReactPaginate from "react-paginate";

const Moviespage = () => {
    const [query] = useSearchParams();
    const keyword = query.get("q");

    const [page, setPage] = useState(1);
    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
    };
    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
        page,
    });

    if (isLoading) {
        return <div>Loading... (loadingspinner 추가해야됨)</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    console.log(data.results);

    return (
        <S.Container>
            <S.MoviespageContainer>
                <S.FilterContainer>
                    <form action="#">
                        <label for="lang">Sort</label>
                        <select name="languages" id="lang">
                            \
                        </select>
                        <input type="submit" value="Submit" />
                    </form>
                    <form action="#">
                        {" "}
                        <label for="genre">Filter</label>{" "}
                        <select name="genres" id="genre">
                            {" "}
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
                            <option value="science fiction">
                                Science Fiction
                            </option>{" "}
                            <option value="tv movie">TV Movie</option>{" "}
                            <option value="thriller">Thriller</option>{" "}
                            <option value="war">War</option>{" "}
                            <option value="western">Western</option>{" "}
                        </select>{" "}
                        <input type="submit" value="Submit" />{" "}
                    </form>
                </S.FilterContainer>
                <S.MoviesContainer>
                    {data?.results?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </S.MoviesContainer>
            </S.MoviespageContainer>
            <S.PagenationWrap>
                <ReactPaginate
                    breakLabel={"..."}
                    nextLabel={"next >"}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={data?.total_pages}
                    previousLabel={"< previous"}
                    previousClassName="page-item"
                    nextClassName="page-item"
                    breakClassName="break"
                    containerClassName="pagination"
                    pageClassName="page-item"
                    activeClassName="active"
                    disabledClassName="disabled"
                    forcePage={page - 1}
                />
            </S.PagenationWrap>
        </S.Container>
    );
};

export default Moviespage;
