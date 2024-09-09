import React, { useState } from "react";
import {
    DropdownContainer,
    MainMenu,
    MainItem,
    SubMenu,
    SubItem,
} from "./dropdown.styled";
import { Link } from "react-router-dom";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DropdownContainer>
            <MainMenu>
                <MainItem onClick={toggleDropdown}>
                    <span>{isOpen ? "ALL ▼" : "ALL ▲"}</span>
                    {isOpen && (
                        <SubMenu>
                            <SubItem>
                                <Link to="/movie">Movie</Link>
                            </SubItem>
                            <SubItem>
                                <Link to="/tv">TV</Link>
                            </SubItem>
                            <SubItem>
                                <Link to="/people">People</Link>
                            </SubItem>
                        </SubMenu>
                    )}
                </MainItem>
            </MainMenu>
        </DropdownContainer>
    );
};

export default Dropdown;
