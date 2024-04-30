import React, { useState } from "react";
import { usePersonDetailQuery } from "../../hooks/usePersonDetail";
import { useParams } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import * as S from "./personDetailpage.styled";

export default function PersonDetailPage() {
    const { id } = useParams();
    const { data, isLoading, isError } = usePersonDetailQuery(id);
    const [isBiographyExpanded, setIsBiographyExpanded] = useState(false);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>Error occurred while fetching person details.</div>;
    }

    const toggleBiographyExpansion = () => {
        setIsBiographyExpanded((prevState) => !prevState);
    };

    return (
        <S.Container>
            <S.ImageContainer>
                <S.ProfileImage
                    src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                    alt={data.name}
                />
            </S.ImageContainer>

            <S.InfoContainer>
                <S.Name>{data.name}</S.Name>
                <S.Biography
                    isExpanded={isBiographyExpanded}
                    onClick={toggleBiographyExpansion}
                >
                    {data.biography}
                </S.Biography>
                <S.Info>
                    <S.Label>Known For:</S.Label>
                    <S.Value>{data.known_for_department}</S.Value>
                </S.Info>
                <S.Info>
                    <S.Label>Birthday:</S.Label>
                    <S.Value>{data.birthday}</S.Value>
                </S.Info>
                <S.Info>
                    <S.Label>Place of Birth:</S.Label>
                    <S.Value>{data.place_of_birth}</S.Value>
                </S.Info>
                <S.Info>
                    <S.Label>Also Known As:</S.Label>
                    <S.Value>
                        {data.also_known_as.slice(0, 3).join(", ")}
                    </S.Value>
                </S.Info>
            </S.InfoContainer>
        </S.Container>
    );
}
