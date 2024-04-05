import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

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

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
`;

export const SearchInput = styled.input`
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    background-color: #333;
    color: #fff;
    width: 180px;
    margin-right: 8px;
`;

export const SearchIcon = styled.svg`
    width: 24px;
    height: 24px;
    cursor: pointer;

    path {
        stroke: white;
        transition: stroke 0.3s ease-in-out;
    }

    &:hover path {
        stroke: #dc1a28;
    }
`;
