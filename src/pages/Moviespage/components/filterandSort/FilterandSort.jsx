import React from "react";
import * as S from "./filterandSort.styled";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";

const FilterandSort = ({
    onGenreChange,
    onSortChange,
    selectedGenre,
    selectedSort,
}) => {
    const { data: genreData } = useMovieGenreQuery();

    const handleGenreChange = (event) => {
        onGenreChange(event.target.value);
    };

    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };

    return (
        <S.Container>
            <S.Form>
                <S.Label htmlFor="genre">Filter</S.Label>
                <S.Select
                    name="genre"
                    id="genre"
                    value={selectedGenre}
                    onChange={handleGenreChange}
                >
                    <option value="all">ALL</option>
                    {genreData?.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name.toUpperCase()}
                        </option>
                    ))}
                </S.Select>
            </S.Form>
            <S.Form>
                <S.Label htmlFor="sort">Sort</S.Label>
                <S.Select
                    name="sort"
                    id="sort"
                    value={selectedSort}
                    onChange={handleSortChange}
                >
                    <option value="">None</option>
                    <option value="popularity.asc">
                        Popularity (Low to High)
                    </option>
                    <option value="popularity.desc">
                        Popularity (High to Low)
                    </option>
                </S.Select>
            </S.Form>
        </S.Container>
    );
};

export default FilterandSort;
