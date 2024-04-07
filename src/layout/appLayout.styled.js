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

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
    }
`;

export const Logo = styled.img`
    height: 2rem;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

export const NavLinks = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 1rem;
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-left: 1.5rem;
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 768px) {
        margin: 0.5rem 0;
    }
`;

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    height: 30px;
    flex-direction: row;
    align-items: center;
    margin-left: 1.5rem;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 1rem;
    }
`;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    padding-left: 1rem;
    border-radius: 0.25rem;
    background-color: #333;
    color: #fff;
    width: 180px;
    height: 30px;
    margin-right: 8px;

    @media (max-width: 768px) {
        width: 100%;
        margin-right: 4px;
    }
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
