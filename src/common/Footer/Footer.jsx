import React from "react";
import * as S from "./footer.styled";

const Footer = () => {
    return (
        <S.FooterContainer>
            <S.FooterText>
                &copy; {new Date().getFullYear()} YUNFLIX. All rights reserved.
            </S.FooterText>
        </S.FooterContainer>
    );
};

export default Footer;
