import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./recommendationPart.styled";
import TVCard from "../../../../common/TVCard/TVCard";

const RecommendSection = ({ recommendData }) => {
    const navigate = useNavigate();
    const ClickCard = (tv) => {
        navigate(`/tv/${tv.id}`);
        window.scrollTo(0, 0);
    };

    const hasResults = recommendData?.results?.length > 0;

    return (
        <>
            {hasResults ? (
                <>
                    <S.RecommendSectionContainer>
                        <S.TvsContainer>
                            {recommendData.results.map((tv) => (
                                <TVCard
                                    onClick={ClickCard}
                                    key={tv.id}
                                    tv={tv}
                                />
                            ))}
                        </S.TvsContainer>
                    </S.RecommendSectionContainer>
                </>
            ) : (
                <S.NoResultsContainer>
                    <S.NoResultsMessage>
                        No recommended tv shows found.
                    </S.NoResultsMessage>
                </S.NoResultsContainer>
            )}
        </>
    );
};

export default RecommendSection;
