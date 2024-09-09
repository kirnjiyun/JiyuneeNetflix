import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { usePopularPeopleQuery } from "../../hooks/usePeopleList"; // 인기 있는 사람 목록 조회 쿼리
import { useSearchPersonQuery } from "../../hooks/useSearchPerson"; // 사람 검색 쿼리
import Loading from "../../common/Loading/Loading";
import * as S from "./personPage.styled.js";
import PersonCard from "./components/PersonCard/PersonCard.jsx";
import Pagination from "./components/pagination/Pagination";

const PersonPage = () => {
    const [query] = useSearchParams();
    const keyword = query.get("q"); // 검색어를 query에서 가져옴
    const [page, setPage] = useState(1);
    const [filteredResults, setFilteredResults] = useState([]);
    const navigate = useNavigate();

    const ClickPage = (selected) => {
        setPage(selected);
    };

    const ClickCard = (person) => {
        navigate(`/person/${person.id}`);
        window.scrollTo(0, 0);
    };

    // 검색어와 페이지에 따른 두 가지 쿼리 호출
    const searchPersonData = useSearchPersonQuery({ keyword, page });
    const popularPeopleData = usePopularPeopleQuery(page);

    const {
        data: searchData,
        isLoading: isSearchLoading,
        isError: isSearchError,
        error: searchError,
    } = searchPersonData;
    const {
        data: popularData,
        isLoading: isPopularLoading,
        isError: isPopularError,
        error: popularError,
    } = popularPeopleData;

    useEffect(() => {
        // 검색어가 있을 경우 검색 결과, 없으면 인기 있는 사람 목록
        if (keyword && searchData?.results) {
            setFilteredResults(searchData.results);
        } else if (!keyword && popularData?.results) {
            setFilteredResults(popularData.results);
        }
    }, [keyword, searchData, popularData]);

    // 로딩 상태 확인
    if (isSearchLoading || isPopularLoading) {
        return <Loading />;
    }

    // 에러 상태 확인
    if (isSearchError) {
        return <div>Error: {searchError.message}</div>;
    }
    if (isPopularError) {
        return <div>Error: {popularError.message}</div>;
    }

    const hasResults = filteredResults?.length > 0;

    const goBack = () => {
        navigate(-1);
    };

    return (
        <S.Container>
            {hasResults ? (
                <>
                    <S.PeopleList>
                        {filteredResults.map((person) => (
                            <PersonCard
                                key={person.id}
                                person={person}
                                onClick={() => ClickCard(person)}
                            />
                        ))}
                    </S.PeopleList>
                    <S.PagenationWrap>
                        <Pagination
                            totalPages={
                                keyword
                                    ? searchData?.total_pages
                                    : popularData?.total_pages
                            }
                            currentPage={page}
                            onPageChange={ClickPage}
                        />
                    </S.PagenationWrap>
                </>
            ) : (
                <S.NoResultsContainer>
                    <S.NoResultsMessage>
                        No results found for your search.
                    </S.NoResultsMessage>
                    <S.GoBackButton onClick={goBack}>Go Back</S.GoBackButton>
                </S.NoResultsContainer>
            )}
        </S.Container>
    );
};

export default PersonPage;
