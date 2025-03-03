import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams, useNavigate } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import SkeletonCard from "../../common/SkeletonCard/SkeletonCard";
import * as S from "./moviespage.styled";
import FilterandSort from "./components/filterandSort/FilterandSort";

const Moviespage = () => {
    const [query] = useSearchParams();
    const keyword = query.get("q");
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [selectedSort, setSelectedSort] = useState("");
    const [movies, setMovies] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const sentinelRef = useRef(null);
    const observer = useRef(null);

    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
        page,
    });

    useEffect(() => {
        setMovies([]);
        setFilteredResults([]);
        setPage(1);
        setHasMore(true);
    }, [keyword]);

    useEffect(() => {
        if (data?.results && data.results.length > 0) {
            setMovies((prevMovies) => {
                const newMovies = [...prevMovies];
                const existingIds = new Set(
                    prevMovies.map((movie) => movie.id)
                );

                data.results.forEach((movie) => {
                    if (!existingIds.has(movie.id)) {
                        newMovies.push(movie);
                    }
                });

                return newMovies;
            });

            // 더 불러올 페이지가 있는지 확인
            if (data.page >= data.total_pages) {
                setHasMore(false);
            }
        } else if (data?.results && data.results.length === 0) {
            setHasMore(false);
        }
    }, [data]);
    // 필터링 및 정렬 로직
    useEffect(() => {
        if (movies.length === 0) {
            setFilteredResults([]);
            return;
        }

        let filtered = [...movies];

        if (selectedGenre !== "all") {
            filtered = filtered.filter(
                (item) =>
                    item.genre_ids &&
                    item.genre_ids.includes(parseInt(selectedGenre))
            );
        }

        if (selectedSort === "popularity.asc") {
            filtered.sort((a, b) => a.popularity - b.popularity);
        } else if (selectedSort === "popularity.desc") {
            filtered.sort((a, b) => b.popularity - a.popularity);
        } else if (selectedSort === "vote_average.desc") {
            filtered.sort((a, b) => b.vote_average - a.vote_average);
        } else if (selectedSort === "vote_average.asc") {
            filtered.sort((a, b) => a.vote_average - b.vote_average);
        } else if (selectedSort === "release_date.desc") {
            filtered.sort(
                (a, b) => new Date(b.release_date) - new Date(a.release_date)
            );
        } else if (selectedSort === "release_date.asc") {
            filtered.sort(
                (a, b) => new Date(a.release_date) - new Date(b.release_date)
            );
        }

        setFilteredResults(filtered);
    }, [movies, selectedGenre, selectedSort]);

    // 무한 스크롤 구현
    const initializeObserver = useCallback(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isLoading && hasMore) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 0.1 }
        );

        if (sentinelRef.current) {
            observer.current.observe(sentinelRef.current);
        }
    }, [isLoading, hasMore]);

    useEffect(() => {
        initializeObserver();

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [initializeObserver]);

    const handleGenreChange = useCallback((genre) => {
        setSelectedGenre(genre);
    }, []);

    const handleSortChange = useCallback((sort) => {
        setSelectedSort(sort);
    }, []);

    const clickCard = useCallback(
        (item) => {
            navigate(`/movie/${item.id}`);
            window.scrollTo(0, 0);
        },
        [navigate]
    );

    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    // 에러 처리
    if (isError) {
        return (
            <S.Container>
                <S.NoResultsContainer>
                    <S.NoResultsMessage>
                        Error:{" "}
                        {error.message ||
                            "An error occurred while fetching data."}
                    </S.NoResultsMessage>
                    <S.GoBackButton onClick={goBack}>Go Back</S.GoBackButton>
                </S.NoResultsContainer>
            </S.Container>
        );
    }

    // 초기 로딩 상태
    const isInitialLoading = isLoading && movies.length === 0;

    return (
        <S.Container>
            <S.MoviespageContainer>
                {isInitialLoading ? (
                    // 초기 로딩 시 스켈레톤 표시
                    <S.MoviesContainer>
                        {Array(8)
                            .fill()
                            .map((_, index) => (
                                <SkeletonCard
                                    key={`skeleton-initial-${index}`}
                                />
                            ))}
                    </S.MoviesContainer>
                ) : movies.length > 0 ? (
                    <>
                        <S.FilterContainer>
                            <FilterandSort
                                onGenreChange={handleGenreChange}
                                onSortChange={handleSortChange}
                                selectedGenre={selectedGenre}
                                selectedSort={selectedSort}
                            />
                        </S.FilterContainer>
                        <S.MoviesContainer>
                            {filteredResults.length > 0 ? (
                                filteredResults.map((movie) => (
                                    <MovieCard
                                        key={`movie-${movie.id}`}
                                        movie={movie}
                                        onClick={() => clickCard(movie)}
                                    />
                                ))
                            ) : (
                                <S.NoResultsContainer>
                                    <S.NoResultsMessage>
                                        No movies match your filter criteria.
                                    </S.NoResultsMessage>
                                </S.NoResultsContainer>
                            )}
                        </S.MoviesContainer>
                    </>
                ) : (
                    <S.NoResultsContainer>
                        <S.NoResultsMessage>
                            No results found for your search.
                        </S.NoResultsMessage>
                        <S.GoBackButton onClick={goBack}>
                            Go Back
                        </S.GoBackButton>
                    </S.NoResultsContainer>
                )}

                {isLoading && movies.length > 0 && (
                    <S.SkeletonLoadingContainer>
                        {Array(3)
                            .fill()
                            .map((_, index) => (
                                <SkeletonCard key={`loading-${index}`} />
                            ))}
                    </S.SkeletonLoadingContainer>
                )}

                {hasMore && <S.Sentinel ref={sentinelRef} />}
            </S.MoviespageContainer>
        </S.Container>
    );
};

export default Moviespage;
