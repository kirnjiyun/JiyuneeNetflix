import React from "react";
import { Modal } from "react-bootstrap";
import * as S from "./movieModal.styled";

const MovieModal = ({ show, onHide, title }) => {
    return (
        <S.ModalWrapper show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
                <S.CloseButton onClick={onHide}>&times;</S.CloseButton>
            </Modal.Header>
            <S.ModalContent>
                {/* 여기에 트레일러 비디오 또는 추가 정보를 넣을 수 있습니다 */}
                <p>Trailer video goes here</p>
            </S.ModalContent>
        </S.ModalWrapper>
    );
};

export default MovieModal;
