import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppLayout = styled.nav``;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #000;
`;

export const Logo = styled.img`
    height: 2rem;
`;

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-left: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
`;

export const SearchInput = styled.input`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    margin-left: 1.5rem;
`;
export const SearchIcon = styled.img`
    width: 100%;
    height: auto;
    margin-left: 8px;
    cursor: pointer;
`;
