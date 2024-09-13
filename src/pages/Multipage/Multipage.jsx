import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./multipage.styled";
import MovieCard from "../../common/MovieCard/MovieCard";
import TVCard from "../../common/TVCard/TVCard";
import PersonCard from "../PersonPage/components/PersonCard/PersonCard";
import { useSearchMultiQuery } from "../../hooks/useSearchMulti";
import Pagination from "./components/pagination/Pagination";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Multipage() {
    const navigate = useNavigate();
    const query = useQuery().get("q");
    const initialPage = parseInt(useQuery().get("page")) || 1;
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);

    const {
        data: searchResults,
        isLoading,
        error,
    } = useSearchMultiQuery({ keyword: query || "", page: currentPage });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!query)
        return (
            <div>Please enter a search query in the URL, like '?q=iron'</div>
        );
    if (!searchResults || searchResults.results.length === 0)
        return <div>No results found for "{query}"</div>;

    const movies = [];
    const tvShows = [];
    const people = [];

    searchResults.results.forEach((result) => {
        if (result.media_type === "movie") {
            movies.push(result);
        } else if (result.media_type === "tv") {
            tvShows.push(result);
        } else if (result.media_type === "person") {
            people.push(result);
        }
    });

    const handlePageChange = (page) => {
        setCurrentPage(page);
        navigate(`/multi?q=${query}&page=${page}`);
        window.scrollTo(0, 0);
    };

    return (
        <S.Container>
            {movies.length > 0 && (
                <>
                    <h2>Movies</h2>
                    <S.MoviespageContainer>
                        {movies.map((movie) => (
                            <MovieCard key={movie?.id} movie={movie} />
                        ))}
                    </S.MoviespageContainer>
                </>
            )}

            {tvShows.length > 0 && (
                <>
                    <h2>TV Shows</h2>
                    <S.TvsContainer>
                        {tvShows.map((tvShow) => (
                            <TVCard key={tvShow?.id} tvShow={tvShow} />
                        ))}
                    </S.TvsContainer>
                </>
            )}

            {people.length > 0 && (
                <>
                    <h2>People</h2>
                    <S.PeopleList>
                        {people.map((person) => (
                            <PersonCard key={person?.id} person={person} />
                        ))}
                    </S.PeopleList>
                </>
            )}

            <S.PagenationWrap>
                <Pagination
                    currentPage={currentPage}
                    totalPages={searchResults?.total_pages || 1}
                    onPageChange={handlePageChange}
                />
            </S.PagenationWrap>
        </S.Container>
    );
}
