import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import * as S from "./moviespage.styled";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import FilterandSort from "./components/FilterandSort";
const Moviespage = () => {
    const [query] = useSearchParams();
    const keyword = query.get("q");
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const ClickPage = ({ selected }) => {
        setPage(selected + 1);
    };
    const ClickCard = (movie) => {
        navigate(`/movies/${movie.id}`);
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

    return (
        <S.Container>
            <S.MoviespageContainer>
                <S.FilterContainer>
                    <FilterandSort />
                </S.FilterContainer>
                <S.MoviesContainer>
                    {data?.results?.map((movie) => (
                        <MovieCard
                            onClick={ClickCard}
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </S.MoviesContainer>
            </S.MoviespageContainer>
            <S.PagenationWrap>
                <ReactPaginate
                    breakLabel={"..."}
                    nextLabel={"next >"}
                    onPageChange={ClickPage}
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
