import React from "react";
import * as S from "./footer.styled";
import icon from "../../assets/images/icon-github.png";
const Footer = () => {
    return (
        <S.FooterContainer>
            <S.FooterText>
                &copy; {new Date().getFullYear()} YUNFLIX. All rights reserved.
            </S.FooterText>
            <S.Icon>
                <a href="https://github.com/kirnjiyun/JiyuneeNetflix">
                    <img src={icon} alt="GitHub Icon" />
                </a>
            </S.Icon>
        </S.FooterContainer>
    );
};

export default Footer;
