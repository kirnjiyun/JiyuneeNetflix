import React, { useState, useEffect, useRef } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams, useNavigate } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import * as S from "./moviespage.styled";
import FilterandSort from "./components/filterandSort/FilterandSort";
import Loading from "../../common/Loading/Loading";

const Moviespage = () => {
    const [query] = useSearchParams();
    const keyword = query.get("q");
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [selectedSort, setSelectedSort] = useState("");
    const [movies, setMovies] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const sentinelRef = useRef(null);

    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
        page,
    });

    // 키워드가 변경되면 영화 목록과 페이지를 초기화
    useEffect(() => {
        setMovies([]);
        setPage(1);
    }, [keyword]);

    useEffect(() => {
        if (data?.results) {
            setMovies((prev) => [...prev, ...data.results]);
        }
    }, [data]);

    // 영화 목록에 필터와 정렬 적용
    useEffect(() => {
        let filtered = movies;
        if (selectedGenre !== "all") {
            filtered = filtered.filter((item) =>
                item.genre_ids.includes(parseInt(selectedGenre))
            );
        }
        if (selectedSort === "popularity.asc") {
            filtered = [...filtered].sort(
                (a, b) => a.popularity - b.popularity
            );
        } else if (selectedSort === "popularity.desc") {
            filtered = [...filtered].sort(
                (a, b) => b.popularity - a.popularity
            );
        } else {
            filtered = [...filtered];
        }
        setFilteredResults(filtered);
    }, [movies, selectedGenre, selectedSort]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (
                    entries[0].isIntersecting &&
                    !isLoading &&
                    data &&
                    page < data.total_pages
                ) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 1.0 }
        );
        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }
        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [page, data, isLoading]);
    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    const handleSortChange = (sort) => {
        setSelectedSort(sort);
    };

    const clickCard = (item) => {
        navigate(`/movie/${item.id}`);
        window.scrollTo(0, 0);
    };

    if (isError) {
        return <div>{error.message}</div>;
    }

    const hasResults = movies.length > 0;

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
                                    key={movie.id}
                                    movie={movie}
                                    onClick={clickCard}
                                />
                            ))}
                        </S.MoviesContainer>
                        <div ref={sentinelRef} style={{ height: "10px" }}></div>
                    </S.MoviespageContainer>
                    {isLoading && <Loading />}
                    <div ref={sentinelRef}></div>
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
