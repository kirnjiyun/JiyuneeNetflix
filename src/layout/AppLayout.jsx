import React from "react";
import * as S from "./appLayout.styled";
import { Outlet } from "react-router-dom";
import searchIcon from "../assets/images/icon-search.svg";
import logo from "../assets/images/logo.png";

const AppLayout = () => {
    return (
        <S.AppLayout>
            <S.Navbar>
                <S.Logo src={logo} alt="Netflix Logo" />
                <S.NavLinks>
                    <S.NavLink to="/">Home</S.NavLink>
                    <S.NavLink to="/movies">Movies</S.NavLink>
                    <S.SearchInput type="text" placeholder="Search" />
                    <S.SearchIcon src={searchIcon} alt="Search Icon" />
                </S.NavLinks>
            </S.Navbar>
            <Outlet />
        </S.AppLayout>
    );
};

export default AppLayout;
