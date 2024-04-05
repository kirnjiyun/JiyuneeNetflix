import React from "react";
import * as S from "./appLayout.styled";
import { Outlet } from "react-router-dom";
import searchIcon from "../assets/images/icon-search.svg";
import logo from "../assets/images/logo.png";

const AppLayout = () => {
    return (
        <S.AppLayout>
            <S.Navbar>
                <S.NavLinks>
                    <S.Logo src={logo} alt="Netflix Logo" />
                    <S.NavLink to="/">Home</S.NavLink>
                    <S.NavLink to="/movies">Movies</S.NavLink>
                </S.NavLinks>
                <S.SearchContainer>
                    <S.SearchInput type="text" placeholder="Search" />
                    <S.SearchIcon>
                        <path
                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M20.9999 21L16.6499 16.65"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </S.SearchIcon>
                </S.SearchContainer>
            </S.Navbar>
            <Outlet />
        </S.AppLayout>
    );
};

export default AppLayout;
