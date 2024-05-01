import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePopularPeopleQuery } from "../../hooks/usePeopleList";
import Loading from "../../common/Loading/Loading";
import * as S from "./personPage.styled.js";
import PersonCard from "./components/PersonCard/PersonCard.jsx";
import Pagination from "./components/pagination/Pagination";

const PersonPage = () => {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const ClickPage = (selected) => {
        setPage(selected);
    };

    const {
        data,
        isLoading: dataLoading,
        isError,
        error,
    } = usePopularPeopleQuery(page);

    const ClickCard = (person) => {
        setIsLoading(true);
        setTimeout(() => {
            navigate(`/person/${person?.id}`);
            window.scrollTo(0, 0);
            setIsLoading(false);
        }, 1000);
    };

    if (dataLoading) {
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
            <S.PeopleList>
                {data?.results?.map((person) => (
                    <PersonCard
                        key={person.id}
                        person={person}
                        onClick={() => ClickCard(person)}
                        isLoading={isLoading}
                    />
                ))}
            </S.PeopleList>
            <S.PagenationWrap>
                <Pagination
                    totalPages={data?.total_pages}
                    currentPage={page}
                    onPageChange={ClickPage}
                />
            </S.PagenationWrap>
        </S.Container>
    );
};

export default PersonPage;
