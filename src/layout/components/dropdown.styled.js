import styled from "styled-components";

export const DropdownContainer = styled.nav`
    position: relative;
    width: 200px;
`;

export const MainMenu = styled.ol`
    list-style: none;
    padding: 0;
`;

export const MainItem = styled.li`
    cursor: pointer;
    background-color: #ff9900;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
`;

export const SubMenu = styled.ol`
    background-color: #008080;
    margin-top: 5px;
    border-radius: 5px;
    padding: 0;
    list-style: none;
`;

export const SubItem = styled.li`
    padding: 10px;
    color: white;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: #006666;
    }
`;
