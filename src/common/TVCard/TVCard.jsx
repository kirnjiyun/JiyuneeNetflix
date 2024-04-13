import React from "react";

const TVCard = ({ tv }) => {
    return (
        <S.TVCardContainer
            style={{
                backgroundImage: "url(" + `어쩌구` + ")",
            }}
        >
            <S.tvCard>
                <S.Title>{tv.title}</S.Title>
                <S.Genre>{showGenre(tv.genre_ids)}</S.Genre>
                <div>
                    <S.Vote>★ {tv.vote_average.toFixed(1)}</S.Vote>
                    {tv.adult ? <S.Adult>18+</S.Adult> : null}
                </div>
            </S.tvCard>
        </S.TVCardContainer>
    );
};

export default TVCard;
