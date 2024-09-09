import React, { useState } from "react";
import * as S from "./appLayout.styled";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import Footer from "../common/Footer/Footer";

const AppLayout = () => {
    const [keyword, setKeyword] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("all");
    const navigate = useNavigate();

    const searchByKeyword = (e) => {
        e.preventDefault();
        const searchPath = dropdownValue === "all" ? "multi" : dropdownValue;
        navigate(`/${searchPath}?q=${keyword}`);
        setKeyword("");
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleDropdownChange = (e) => {
        setDropdownValue(e.target.value);
    };

    return (
        <S.AppLayout>
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
                        <S.NavLink to="/movies">Movies</S.NavLink>
                        <S.NavLink to="/tv">Tv Shows</S.NavLink>
                        <S.NavLink to="/person">People</S.NavLink>
                    </S.NavLinks>
                </S.LeftSection>

                <S.SearchContainer onSubmit={searchByKeyword}>
                    <S.Dropdown
                        value={dropdownValue}
                        onChange={handleDropdownChange}
                    >
                        <option value="all">All</option>
                        <option value="movies">Movies</option>
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
            <Outlet />
            <Footer />
        </S.AppLayout>
    );
};

export default AppLayout;
