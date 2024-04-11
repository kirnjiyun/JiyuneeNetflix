import React, { useState, useEffect } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams, useNavigate } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import * as S from "./moviespage.styled";
import FilterandSort from "./components/filterandSort/FilterandSort";
import Loading from "../../common/Loading/Loading";
import Pagination from "./components/pagination/Pagination";

const Moviespage = () => {
    const [query] = useSearchParams();
    const keyword = query.get("q");
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [selectedSort, setSelectedSort] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    const ClickPage = (selected) => {
        setPage(selected);
    };

    const ClickCard = (movie) => {
        navigate(`/movies/${movie.id}`);
    };

    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
        page,
    });

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    const handleSortChange = (sort) => {
        setSelectedSort(sort);
    };

    useEffect(() => {
        if (data?.results) {
            let filtered = data.results;

            if (selectedGenre !== "all") {
                filtered = filtered.filter((movie) =>
                    movie.genre_ids.includes(parseInt(selectedGenre))
                );
            }

            if (selectedSort === "popularity.asc") {
                filtered = filtered.sort((a, b) => a.popularity - b.popularity);
            } else if (selectedSort === "popularity.desc") {
                filtered = filtered.sort((a, b) => b.popularity - a.popularity);
            }

            setFilteredResults(filtered);
        }
    }, [data, selectedGenre, selectedSort]);

    console.log(data?.results);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    const hasResults = filteredResults?.length > 0;

    const goBack = () => {
        navigate(-1);
    };

    return (
        <S.Container>
            {hasResults ? (
                <>
                    <S.MoviespageContainer>
                        <S.FilterContainer>
                            <FilterandSort
                                onGenreChange={handleGenreChange}
                                onSortChange={handleSortChange}
                                selectedGenre={selectedGenre}
                                selectedSort={selectedSort}
                            />
                        </S.FilterContainer>
                        <S.MoviesContainer>
                            {filteredResults.map((movie) => (
                                <MovieCard
                                    onClick={ClickCard}
                                    key={movie.id}
                                    movie={movie}
                                />
                            ))}
                        </S.MoviesContainer>
                    </S.MoviespageContainer>
                    <S.PagenationWrap>
                        <Pagination
                            totalPages={data?.total_pages}
                            currentPage={page}
                            onPageChange={ClickPage}
                        />
                    </S.PagenationWrap>
                </>
            ) : (
                <S.NoResultsContainer>
                    <S.NoResultsMessage>
                        No results found for your search.
                    </S.NoResultsMessage>
                    <S.GoBackButton onClick={goBack}>Go Back</S.GoBackButton>
                </S.NoResultsContainer>
            )}
        </S.Container>
    );
};

export default Moviespage;
