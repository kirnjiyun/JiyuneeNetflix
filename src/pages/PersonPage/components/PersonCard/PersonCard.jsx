import React from "react";
import * as S from "./personCard.styled";

export default function PersonCard({ person }) {
    return (
        <S.PersonItem>
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
                                {work.title || work.name} ({work.media_type})
                            </S.WorkTitle>
                            <S.WorkOverview>{work.overview}</S.WorkOverview>
                        </S.KnownForItem>
                    ))}
                </ul>
            </S.KnownForList>
        </S.PersonItem>
    );
}
