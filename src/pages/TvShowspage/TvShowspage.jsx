import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import TVCard from "../../common/TVCard/TVCard";
import Loading from "../../common/Loading/Loading";
import * as S from "./tvShowspage.styled";
import FilterandSort from "../Moviespage/components/filterandSort/FilterandSort";
import { useSearchTVQuery } from "../../hooks/useSearchTv";
import Pagination from "./components/pagination/Pagination";

const TvShowspage = () => {
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

    const ClickCard = (tv) => {
        navigate(`/tv/${tv.id}`);
        window.scrollTo(0, 0);
    };

    const { data, isLoading, isError, error } = useSearchTVQuery({
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
                filtered = filtered.filter((tv) =>
                    tv.genre_ids.includes(parseInt(selectedGenre))
                );
            }

            if (selectedSort === "popularity.asc") {
                filtered = filtered.sort((a, b) => a.popularity - b.popularity);
            } else if (selectedSort === "popularity.desc") {
                filtered = filtered.sort((a, b) => b.popularity - a.popularity);
            }

            setFilteredResults(filtered);
        }
    }, [data, selectedGenre, selectedSort, page]);

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
                    <S.TvspageContainer>
                        <S.FilterContainer>
                            <FilterandSort
                                onGenreChange={handleGenreChange}
                                onSortChange={handleSortChange}
                                selectedGenre={selectedGenre}
                                selectedSort={selectedSort}
                            />
                        </S.FilterContainer>
                        <S.TvsContainer>
                            {filteredResults.map((tv) => (
                                <TVCard
                                    onClick={ClickCard}
                                    key={tv.id}
                                    tv={tv}
                                />
                            ))}
                        </S.TvsContainer>
                    </S.TvspageContainer>
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

export default TvShowspage;
