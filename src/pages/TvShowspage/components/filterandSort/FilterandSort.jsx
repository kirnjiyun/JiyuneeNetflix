import React, { useState } from "react";
import * as S from "./filterandSort.styled";
import { useTvGenreQuery } from "../../../../hooks/useTvGenre";
import { useCountriesQuery } from "../../../../hooks/useCountriesQuery";

const FilterandSort = ({
    onGenreChange,
    onSortChange,
    onOriginCountryChange,
    selectedGenre,
    selectedSort,
    onClose,
}) => {
    const { data: genreData } = useTvGenreQuery();
    const { data: countryData } = useCountriesQuery();
    const [searchCountry, setSearchCountry] = useState("");

    const handleGenreChange = (event) => {
        onGenreChange(event.target.value);
    };

    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };

    const handleOriginCountryChange = (country) => {
        onOriginCountryChange(country);
        setSearchCountry(country);
    };

    const handleSearchCountryChange = (event) => {
        setSearchCountry(event.target.value);
    };

    const filteredCountries = countryData?.filter((country) =>
        country.english_name.toLowerCase().includes(searchCountry.toLowerCase())
    );
    return (
        <S.Container>
            <S.CloseButton onClick={onClose}>x</S.CloseButton>
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
            <S.Form>
                <S.Label htmlFor="originCountry">Origin Country</S.Label>
                <S.Input
                    type="text"
                    id="searchCountry"
                    value={searchCountry}
                    onChange={handleSearchCountryChange}
                    placeholder="Search country..."
                />
                {searchCountry && filteredCountries.length > 0 && (
                    <S.CountryList>
                        {filteredCountries?.map((country) => (
                            <S.CountryItem
                                key={country.iso_3166_1}
                                onClick={() =>
                                    handleOriginCountryChange(
                                        country.english_name
                                    )
                                }
                            >
                                {country.english_name}
                            </S.CountryItem>
                        ))}
                    </S.CountryList>
                )}
            </S.Form>
        </S.Container>
    );
};

export default FilterandSort;
