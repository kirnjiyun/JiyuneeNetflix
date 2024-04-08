import React, { useEffect, useState } from "react";
import * as S from "./appLayout.styled";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const AppLayout = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const searchByKeyword = (e) => {
        e.preventDefault();
        navigate(`/movies?q=${keyword}`);
        setKeyword("");
    };

    return (
        <S.AppLayout>
            <S.Navbar>
                <S.NavLinks>
                    <S.Logo src={logo} alt="Netflix Logo" />
                    <S.NavLink to="/">Home</S.NavLink>
                    <S.NavLink to="/movies">Movies</S.NavLink>
                </S.NavLinks>
                <S.SearchContainer onSubmit={searchByKeyword}>
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
        </S.AppLayout>
    );
};

export default AppLayout;
