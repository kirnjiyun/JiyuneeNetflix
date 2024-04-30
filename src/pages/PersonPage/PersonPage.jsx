import React from "react";
import { usePopularPeopleQuery } from "../../hooks/usePeopleList";
import Loading from "../../common/Loading/Loading";
import * as S from "./personPage.styled.js";
import PersonCard from "./components/PersonCard/PersonCard.jsx";


export default const Personpage = () => {
    const { data, isLoading, isError, error } = usePopularPeopleQuery();

    if (isLoading) {
        return (
            <S.Container>
                <Loading />
            </S.Container>
        );
    }

    if (isError) {
        return (
            <S.Container>
                <p>Error: {error.message}</p>
            </S.Container>
        );
    }

    return (
        <S.Container>
            <h1>Popular People</h1>
            <S.PeopleList>
                {data.results.map((person) => (
                    <PersonCard key={person.id} person={person} />
                ))}
            </S.PeopleList>
        </S.Container>
    );
};
