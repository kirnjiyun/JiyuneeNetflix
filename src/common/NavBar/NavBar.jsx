import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./navBar.styled";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // 햄버거 메뉴 상태
    const [keyword, setKeyword] = useState(""); // 검색 키워드 상태
    const [dropdownValue, setDropdownValue] = useState("all"); // 드롭다운 선택 값
    const navigate = useNavigate();

    // 햄버거 메뉴 토글 함수
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    // 드롭다운 변경 핸들러
    const handleDropdownChange = (e) => {
        setDropdownValue(e.target.value);
    };

    // 검색 제출 핸들러
    const searchByKeyword = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            const path =
                dropdownValue === "multi"
                    ? `/multi?q=${encodeURIComponent(keyword)}`
                    : `/${dropdownValue}?q=${encodeURIComponent(keyword)}`;
            navigate(path);
            setKeyword(""); // 검색 후 입력창 초기화
            setIsOpen(false); // 모바일 메뉴 닫기
        }
    };

    return (
        <S.Navbar>
            <S.LeftSection>
                <Link to="/">
                    <S.Logo src={logo} alt="Yunflix Logo" />
                </Link>
                <S.HamburgerMenu onClick={toggleMenu}>
                    <S.Bar></S.Bar>
                    <S.Bar></S.Bar>
                    <S.Bar></S.Bar>
                </S.HamburgerMenu>
                <S.NavLinks isOpen={isOpen}>
                    <S.NavLink to="/">Home</S.NavLink>
                    <S.NavLink to="/movie">Movies</S.NavLink>
                    <S.NavLink to="/tv">Tv Shows</S.NavLink>
                    <S.NavLink to="/person">People</S.NavLink>
                </S.NavLinks>
            </S.LeftSection>

            <S.SearchContainer onSubmit={searchByKeyword}>
                <S.Dropdown
                    value={dropdownValue}
                    onChange={handleDropdownChange}
                >
                    <option value="multi">All</option>
                    <option value="movie">Movies</option>
                    <option value="tv">TV Shows</option>
                    <option value="person">People</option>
                </S.Dropdown>
                <S.SearchInput
                    type="text"
                    placeholder="Search"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <S.SearchIcon type="submit" hasInput={keyword.length > 0}>
                    <svg>
                        <path
                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M20.9999 21L16.6499 16.65"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </S.SearchIcon>
            </S.SearchContainer>
        </S.Navbar>
    );
};

export default Navbar;
