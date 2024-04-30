import React, { useState } from "react";
import { usePopularPeopleQuery } from "../../hooks/usePeopleList";
import Loading from "../../common/Loading/Loading";
import * as S from "./personPage.styled.js";
import PersonCard from "./components/PersonCard/PersonCard.jsx";
import Pagination from "./components/pagination/Pagination";
const PersonPage = () => {
    const [page, setPage] = useState(1);
    const ClickPage = (selected) => {
        setPage(selected);
    };
    const { data, isLoading, isError, error } = usePopularPeopleQuery(page);

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
            <S.PeopleList>
                {data.results.map((person) => (
                    <PersonCard key={person.id} person={person} />
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
