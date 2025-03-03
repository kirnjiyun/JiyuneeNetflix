import React, { useState } from "react";
import * as S from "./appLayout.styled";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Navbar from "../common/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import ChatBot from "../common/chatBot/ChatBot";
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
            <Navbar />
            <ChatBot />
            <Outlet />
            <Footer />
        </S.AppLayout>
    );
};

export default AppLayout;
