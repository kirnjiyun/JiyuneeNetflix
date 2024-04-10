import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import * as S from "./moviespage.styled";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import FilterandSort from "./components/FilterandSort";
import Loading from "../../common/Loading/Loading";
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
        return <Loading />;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    const hasResults = data?.results?.length > 0;

    return (
        <S.Container>
            {hasResults ? (
                <>
                    <S.MoviespageContainer>
                        <S.FilterContainer>
                            <FilterandSort />
                        </S.FilterContainer>
                        <S.MoviesContainer>
                            {data.results.map((movie) => (
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
                            nextLabel={" >"}
                            onPageChange={ClickPage}
                            pageRangeDisplayed={5}
                            pageCount={data?.total_pages}
                            previousLabel={"< "}
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
                </>
            ) : (
                <S.NoResultsContainer>
                    <S.NoResultsMessage>
                        No results found for your search.
                    </S.NoResultsMessage>
                </S.NoResultsContainer>
            )}
        </S.Container>
    );
};

export default Moviespage;
