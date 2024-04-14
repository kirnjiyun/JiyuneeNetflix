import React from "react";
import * as S from "./tvCard.styled.js";

const TVCard = ({ tv }) => {
    const backdropUrl = tv.backdrop_path
        ? `https://image.tmdb.org/t/p/w1280${tv.backdrop_path}`
        : "https://via.placeholder.com/1280x720?text=No+Backdrop";

    return (
        <S.TVCardContainer style={{ backgroundImage: `url(${backdropUrl})` }}>
            <S.TVCard>
                <S.Title>{tv.name}</S.Title>
                <div>
                    <S.Vote>★ {tv.vote_average.toFixed(1)}</S.Vote>
                    {tv.adult ? <S.Adult>18+</S.Adult> : null}
                </div>
            </S.TVCard>
        </S.TVCardContainer>
    );
};

export default TVCard;
