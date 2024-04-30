import React from "react";
import { usePopularPeopleQuery } from "../../hooks/usePeopleList";
import Loading from "../../common/Loading/Loading";
import * as S from "./personPage.styled.js";

export default function Personpage() {
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
        <>
            <S.Container>
                <h1>Popular People</h1>
                <S.PeopleList>
                    {data.results.map((person) => (
                        <S.PersonItem key={person.id}>
                            <S.PersonName>{person.name}</S.PersonName>
                            {person.profile_path && (
                                <S.PersonImage
                                    src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                                    alt={person.name}
                                />
                            )}
                            <S.KnownForList>
                                <p>Known For:</p>
                                <ul>
                                    {person.known_for.map((work) => (
                                        <S.KnownForItem key={work.id}>
                                            <S.WorkTitle>
                                                {work.title || work.name} (
                                                {work.media_type})
                                            </S.WorkTitle>
                                            <S.WorkOverview>
                                                {work.overview}
                                            </S.WorkOverview>
                                        </S.KnownForItem>
                                    ))}
                                </ul>
                            </S.KnownForList>
                        </S.PersonItem>
                    ))}
                </S.PeopleList>
            </S.Container>
        </>
    );
}
