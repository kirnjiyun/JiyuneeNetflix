import React from "react";
import * as S from "./personCard.styled";

export default function PersonCard({ person }) {
    const gender = person.gender === 1 ? "Female" : "Male";

    return (
        <S.PersonItem>
            {person.profile_path && (
                <S.ImageContainer>
                    <S.PersonImage
                        src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                        alt={person.name}
                    />
                </S.ImageContainer>
            )}
            <S.Info>
                <S.PersonName>{person.name}</S.PersonName>
                <S.GenderAndDepartment>
                    <p>{gender}</p>
                    <S.DepartmentBadge>
                        {person.known_for_department}
                    </S.DepartmentBadge>
                </S.GenderAndDepartment>
                <S.KnownForList>
                    <p>Known For:</p>
                    <ul>
                        {person.known_for.map((work) => (
                            <S.KnownForItem key={work.id}>
                                <S.WorkTitle>
                                    {work.title || work.name} ({work.media_type}
                                    )
                                </S.WorkTitle>
                            </S.KnownForItem>
                        ))}
                    </ul>
                </S.KnownForList>
            </S.Info>
        </S.PersonItem>
    );
}
