import React from "react";
import TVCard from "../../../../common/TVCard/TVCard";
import { useNavigate } from "react-router-dom";
import * as S from "./tvCredits.styled";

const TvCredits = ({ TvCreditsData }) => {
    const navigate = useNavigate();
    const ClickCard = (tv) => {
        navigate(`/tv/${tv.id}`);
        window.scrollTo(0, 0);
    };
    return (
        <S.TvContainer>
            {TvCreditsData.cast.map((tv) => (
                <TVCard key={tv.id} tv={tv} onClick={ClickCard} />
            ))}
        </S.TvContainer>
    );
};
export default TvCredits;
